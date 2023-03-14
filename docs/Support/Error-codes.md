Error Codes
===========

`Global Web Services API header field 'AppCode' is now mandatory in UAT environment. This will enable Fiserv to enhance the API security and add granularity to its usage reporting. Clients will need to populate the header field with a unique code that will be provided via their account management team. If you are seeing new error (400 Invalid AppCode), it's due to this change, so please get in touch with account management team.`

B2B Channel
-----------

First Data Financial Services EMEA APIs when accessed from the B2B Channel use the following HTTP response codes:

- HTTP 200 - success
- HTTP 401 - Unauthorized
- HTTP 403 - Forbidden
- HTTP 404 - Service not found
- HTTP 452 - Undefined Exception. Report to FirstData.
- HTTP 453 - Validation error in the input request.
- HTTP 465 - Vision backend Error
- HTTP 466 - Estatements backend error
- HTTP 467 - FirstPay backend error
- HTTP 468 - FICS backend error
- HTTP 469 - Eletters backend error
- HTTP 500 - Uncaught Exception. Report to FirstData

Sample Error Response:

403

{\
"responseCode": 403,\
"errorCode": "FS002003",\
"message": "Provided Client ID ##### does not match its Client Name ######"\
}

404:

{\
"responseCode": 404,\
"errorCode": "FS005000",\
"message": "There are no service entries registered for /fs/fv_emea/v1/customerAccountInquiry"\
}

453:

{\
"responseCode":453,\
"errorCode":"FS001002",\
"message":"Invalid date in restStDate.  Expected BasicISO Date - YYYYMMDD format | Invalid date in restEndDate.  Expected BasicISO Date - YYYYMMDD format"\
}

465:

{\
"responseCode": 465,\
"errorCode": "FS000006",\
"resultCode": "465",\
"message": "Backend request failed VPL8STA20S ASM ACTION CODE IS NOT ON FILE",\
"odsMessages": [\
        "VPL8STA20S ASM ACTION CODE IS NOT ON FILE"\
    ]\
}

466:

{\
"responseCode": 466,\
"errorCode": "FS000006",\
"resultCode": "0004"

}

500:

{\
"responseCode":500,\
"resultCode":"500",\
"message":"Failed to establish a backside connection"\
}

Note: in case of error codes like 465 which means backend Error. Always check for field odsMessages and check the error code from backend. What error codes you can expect here is captured on the Swagger Definition page for the API.

Internet Channel
----------------

First Data Financial Services EMEA APIs when accessed from the Internet Channel  use the following HTTP codes:

- HTTP 200 -- OK
- HTTP 400 -- Invalid Input
- HTTP 401 -- Unauthorized
- HTTP 403 -- Forbidden
- HTTP 404 -- Not Found
- HTTP 410 -- Gone
- HTTP 452 -- System Error
- HTTP 453 -- Validation Error
- HTTP 454 -- Authorizations Platform Errors
- HTTP 455 -- ODS Error Exception
- HTTP 498 -- Invalid Token
- HTTP 500 -- General Error

Sample Error Response:

> `{`
>
> `"errorCode" : "API-Sec-005",\
> "errorMessage" :  "Resource not found"`
>
> `}`

Error Codes:

- *HTTP 400 :*
  - API-Sec-003 - Invalid request. This could be because of invalid data in the request or header, among other reasons.
  - API-Sec-004 - Invalid request. The client_assertion JWT is invalid
  - API-Sec-013 - The JWT has an invalid expiry. Pleases end a request with a valid JWT
- *HTTP 401:*
  - API-Sec-001 - The auth header has invalid values. Please try with valid values
  - API-Sec-002 - The client id provided is invalid. Please try with valid client id
  - API-Sec-007 - The access token is invalid. It may have expired, or maybe incorrect
- *HTTP 403:*
  - API-Sec-006 - Replay attack detected. Please try again with valid data
  - API-Sec-008 - Mismatch in scope. The access token does not have the permission to access this resource
- *HTTP 404:*
  - API-Sec-005 - Resource not found
- *HTTP 429:*
  - API-Sec-009 - You have exceeded the App level quota
  - API-Sec-010 - You have exceeded the Developer level quota
  - API-Sec-011 - You have exceeded the Product level quota
  - API-Sec-012 - Too many requests for this API. Please try after sometime

Sample error codes returned by 'token' API endpoint:

| errorCode   | errorMessage                                                                                          | Scenario                                                                                                                                                            | HTTPStatusCode   | HTTPReasonPhrase  |
|-------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------------------|
| API-Sec-001 | The auth header has invalid values. Please try with valid values                                      | Invalid Authorization header                                                                                                                                        | 401              | Unauthorized      |
| API-Sec-002 | The client id provided is invalid. Please try with valid client id                                    | Invalid Client_ID in the request                                                                                                                                    | 400              | Bad Request       |
| API-Sec-003 | Invalid request. This could be because of invalid data in the request or header, among other reasons. | Missing or Incorrect fields in the JWT claim or in the header and body                                                                                              | 400              | Bad Request       |
| API-Sec-004 | Invalid request. The client_assertion JWT is invalid.                                                 | Invalid JWT                                                                                                                                                         | 400              | Bad Request       |
| API-Sec-005 | Resource not found                                                                                    | When a request is sent to an invalid URI                                                                                                                            | 404              | Not Found         |
| API-Sec-006 | Replay attack detected. Please use a new JWT token with a unique jti claim                            | When a request is sent to generate an access token and if the client_assertion is reused in that request, this error is triggered. The 'jti' claim should be unique | 403              | Forbidden         |
