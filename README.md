# starzplay
# 1- RUN "npm i or yarn i" in root directory
# 2- RUN "npm run start" starts the port on '3000'
# 3- test url is "localhost:3000/media?filter=censoring&level=Uncensored"
# 4- RUN "npm test" for testing suite

Assumptions

I have assummed that only censored or uncensored records should be filterd and send to the response,
the records which don't have field "contentClassification" will not be included in the response
and only service code will include the unit tests.

Libraries & packages used

Expressjs 
axios  (for http calls)
jest.js (for unit tests)
joi (for vaidation & sanitization)
