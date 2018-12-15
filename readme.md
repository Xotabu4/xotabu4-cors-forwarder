### Simple CORS server that makes requests for you

Deploy this server somewhere. I pefer HEROKU, because it gives HTTPS certs.


1) Send POST request with JSON body of request lib options object - https://github.com/request/request#requestoptions-callback
Notice that functions won't be serialized

2) Server will use this POST body to send new request for you

3) You will get response object (with headers and everything) as JSON response

4) Errors will be returned with same error status code as original server