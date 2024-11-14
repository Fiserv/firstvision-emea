Registration And Token
======================

The instructions on this page are applicable only for accessing APIs via Internet channel (OAuth based Authentication), and not via B2B (MPLS/VPN) using Certificate based Mutual Authentication.

FirstVision API
---------------

The FirstVision Product API allows users to discover various financial products Fiserv offers within EMEA and APAC region.

Registration
-------------

Every API expects an Access Token to be passed as header parameter (Authorisation). The Access Token will be valid for 60 minutes. Please contact us <DL-FirstVisionApiTeam@fiserv.com> to get Client Key and Secret created for you, which can be used for generating Access Token.

API Calls in Sandbox (Demo) environment
---------------------------------------

Once you've registered, you'll receive Client Key and Secret. Using these details, an Access Token can be created, which has a validity of 60 minutes. The Sandbox environment supports the endpoint 'Generate CC Token with JWT' for generating an Access Token.

Calling 'GenerateCCTokenWith JWT':

URL : '<https://cert.emea.api.fiservapps.com/api/fs/fv_emea/security/v1/token/jwt/generate>'

Method : POST

Headers:

- Content-Type : application/x-www-form-urlencoded

Form Data:

- grant_type : client_credentials

- scope: emea_firstvision

- client_assertion : *JWT*generated that asserts identity

- client_assertion_type: urn:ietf:params:oauth:client-assertion-type:jwt-bearer

- client_id :*Client Key*provided as part of registration.

How to get*JWT*

The client_assertion field is a JWT based off RFC7523 and is a way for the client to authenticate themselves to the Auth Server. The client is authenticated using the 'client_secret_jwt' method. More details about this method can be found in <http://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication>. The client_assertion consists of a JWT whose header and claims are as below.

JWT Header

`{`

`"typ" : "JWT",`

`"alg" : "HS256"`

`}`

JWT Claims

`{`

`"sub" : "Insert Client Key Here",`

`"aud" : "https://cert.emea.api.fiservapps.com/api/fs/fv_emea/security/v1/token",`

`"iss" : "Insert Client Key Here",`

`"exp" : 1526662198,`

`"iat" : 1526658598,`

`"jti" : "2a7caa12-850f-4fe9-b940-3d52cb804037"`

`}`

Below is a description and explanation of the values in this JWT. More information can be found at <https://tools.ietf.org/html/rfc7519>.

| Claim        | Description                                                                 | Values                                             |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| typ (Header) | Media type of the JWT                                                       | Recommended that this be sent 'JWT'. Not enforced. |
| alg (Header) | Algorithm used to create the JWS (JSONWeb signature)                        | Must be "HS256"                                    |
| sub          | Required. Identifies the subject of the JWT                                 | Must be "Client Key" of registered client          |
| aud          | Required. Audience for whom token is intended                               | Must be token URL of the Authentication server     |
| iss          | Required. Identifies the issuer of the JWT                                  | Must be "Client Key" of registered client          |
| exp          | Required. Expiry time (in UNIX epoch time) after which the token is invalid |                                                    |
| iat          | What time the token is issued at. Unix epoch time.                          |                                                    |
| jti          | Required. JWT ID. A unique value intended to prevent replay attacks.        |                                                    |

The signature is created using the HMAC SHA-256 algorithm. The HMAC is calculated using the client_secret of the registered client. When combined, the client_assertion JWT will look something like this (line breaks introduced for readability):

client_assertion - JWT

|

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJJbnNlcnRDbGllbnRJREhl`

`cmUiLCJhdWQiOiJodHRwczovL2NlcnQuYXBpLmZpcnN0ZGF0YS5jb20vYXBpL2ZzL2Z2X2Vt`

`ZWEvc2VjdXJpdHkvdjEvdG9rZW4iLCJpc3MiOiJJbnNlcnRDbGllbnRJREhlcmUiLCJleHAiO`

`jE2MjU1ODY2OTQsImlhdCI6MTYyNTU3OTQ5OSwianRpIjoiM2ExY2FhMTMtMTIwZi00ZmU5LWI5NDAtM`

`2Q1MmNiODAxMDQxIn0.StGOs0tV4sKUm0FK94B1rweG3Kc8rsFJ802pjmOBo80`

|

If the request is successful, it'll return an Access Token, which can be used as header parameter (Authorisation) while calling other API endpoints. The Access Token will expire after 60 minutes. The same '/generate' endpoint can be called again to get a new Access Token.

Calling APIs in other (UAT/Prod) environment and region (EMEA/APAC)
-------------------------------------------------------------------

The above process and steps can be used for calling APIs in other environment as well, but with following differences:

**Domain Name**: This will be environment and region specific. Instead of '[http://cert.emea.api.fiservapps.com](http://cert.emea.api.fiservapps.com/)', the value will be '[http://prod.emea.api.fiservapps.com](http://prod.emea.api.fiservapps.com/)' for EMEA and '[http://prod.apac.api.fiservapps.com](http://prod.apac.api.fiservapps.com/)' for APAC in Production. Similarly the value for UAT will be '[http://cat.emea.api.fiservapps.com](http://cat.emea.api.fiservapps.com/)' and '[http://cat.apac.api.fiservapps.com](http://cat.apac.api.fiservapps.com/)' respectively.

**Base Path**: The value of base path is region specific. For EMEA the value will remain 'fv_emea' in complete URL ('<https://prod.emea.api.fiservapps.com/api/fs/fv_emea/>'...) whereas it'll be 'fv_apac' for accessing APAC specific APIs.

**Scope**: The scope header parameter will have region specific values. For EMEA it's '*emea_firstvision*' whereas '*apac_firstvision*' for calling APAC specific APIs.
