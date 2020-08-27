## Serverless Auth with AWS Lambda, MongoDB & JWT video series codes
I tracked this playlist to learn serverless framework and AWS lambda.

**Youtube** : [https://www.youtube.com/playlist?list=PLcpL2kgfJqjmrmODjUygRYGTxD8gHdczi](https://www.youtube.com/playlist?list=PLcpL2kgfJqjmrmODjUygRYGTxD8gHdczi) by [Namaste Programming](https://www.youtube.com/channel/UCXFh7zg1ukKuDZgHxqCuBtQ)

My computer doesn't support windows 10 2004 yet, so I can't use AWS SAM because Docker doesn't support old Windows versions, it needs WSL 2. Indeed docker legacy can be work, but I didn't want to install the legacy version which is deprecated in a few months.

| Endpoint Name | URL |Request Type|Req. Json Data|Desc|
|--|--|--|--|--|
| /register | https://kwhxg3ebrd.execute-api.eu-central-1.amazonaws.com/dev/register |POST|```{ "name": "yourName", "email": "email@example.com", "password": "secret" }```|It works, It encrypts the password and saves user info to database|
|/login|https://kwhxg3ebrd.execute-api.eu-central-1.amazonaws.com/dev/login|POST||not implemented yet|
|/status|https://kwhxg3ebrd.execute-api.eu-central-1.amazonaws.com/dev/status|GET||Services is UP|

