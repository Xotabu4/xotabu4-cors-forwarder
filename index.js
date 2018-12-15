const express = require('express')
const request = require('request-promise-native')
request = request.defaults({ resolveWithFullResponse: true })
const SERVER = express()
SERVER.use(require('body-parser').json()); // for parsing application/json
// CORS requirement to support OPTIONS and special headers
SERVER.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) { res.sendStatus(200) } else { next() }
})
SERVER.post('/', async (req, res) => {
    console.log('===HEADERS===')
    console.log(req.headers)
    console.log('===BODY===')
    console.log(req.body)
    let proxiedResponse
    try {
        proxiedResponse = await request(req.body)
        console.log('===RESPONSE===')
        console.log(proxiedResponse)
        res.send(proxiedResponse)
    } catch (err) {
        res.send(err.statusCode, err)
    }
})
let port = process.env.PORT || 3001
SERVER.listen(port, () => console.log('Listening on port: ' + port))