
# Fiserv API connectivity

Fiserv allows two methods of connection to access FirstVision API. Below describes the 2 processes

## B2B Connection Access to FV APIs (MPLS/VPN)

The following steps need to be carried out per environment (UAT, PROD)

### For accessing APIs in EMEA

| **Environment** | **endpoint domain**      | **port number** | **External IP Address** | **DR External IP Address**           |
|-----------------|--------------------------|-----------------|-------------------------|--------------------------------------|
| UAT             | uat-fsapi.firstdata.com  | 9758            | 170.186.105.111         | n/a                                  |
| Prod            | fsapi.firstdata.com      | 9758            | 170.186.104.20          | 170.186.105.189                      |

### For accessing APIs in APAC

| **Environment** | **endpoint domain**              | **port number** | **External IP Address** |
|-----------------|----------------------------------|-----------------|-------------------------|
| UAT             | cat-pl-fsapi-apac.fiservsoa.com  | 443             | 204.124.86.117          |
| Prod            | pl-fsapi-apac.fiservsoa.com      | 443             | 170.186.213.30          |

#### 1. VPN/MPLS Connectivity

Client will require a VPN/MPLS connection between the Client's network, terminating at Fiserv's ClientNet zone. The Client's Network team will likely need to be engaged to update their Network Address Translation (NAT) tables, to configure an internal IP address (in the range used to communicate across the established connection with Fiserv), that will target the external IP addresses above in Fiserv's ClientNet zone. The client will probably also want to update their internal DNS, so that in their environment the above URL's resolve to the internally natted IP address they have configured for this purpose.

#### 2. SSL Mutual Authentication of Certificates (mTLS)

We require the exchange of the following certificates between Client's host and the specific DataPower Tier1 (DPT1) environment (e.g. UAT, Prod). Fiserv will be acting as the server and the client as the client for the mTLS connection.

Fiserv to Client: The common practice is for Fiserv will supply the entire chain of the certificate. The client generally will store the Fiserv intermediate level certificate in the Client's trust store. It is general practice and sufficient for the Client to trust the root of the intermediate cert as it is issued by a valid Certificate Authority such as Digicert. Alternative, they can choose to establish trust with the server using the leaf cert as well. But this is not mandatory and less advantageous as leaf certs have a lesser life span of usual 1-2 years whereas intermediate certs have around 10 years.

Client to Fiserv: The client have to acquire/provide a CA signed client authentication certificate. Fiserv will install the Client's certificates (leaf level certs) in the DataPower trust store. Inside this certificate, the client will have their 'legal name' as the Common Name (CN) inside the certificates. In the event the client is unable to acquire this certificate directly with a CA, it is possible for Fiserv to acquire the certificate on behalf of the client.

#### 3. Fire Wall (FW)

Client will need to supply their source IP address(es). Our iCTO team will  need to raise the appropriate FW rules to whitelist the client's source IP(s) to access the client facing virtual IP addresses.

#### 4. Fiserv will the carry out the rest of the internal configurations for the client

## Internet Access to FV APIs

The following steps need to be carried out per environment (UAT, PROD, Sandbox)

### Endpoints

| Region | UAT                          | PRODUCTION               | Generic Sandbox        |
|--------|------------------------------|--------------------------|------------------------|
| EMEA   | cat.emea.api.fiservapps.com  | emea.api.fiservapps.com  | cert.api.firstdata.com |
| APAC   | cat-fsapi-apac.fiservsoa.com | fsapi-apac.fiservsoa.com | cert.api.firstdata.com |
| GLOBAL | cat.api.firstdata.com        | api.firstdata.com        | cert.api.firstdata.com |

#### 1. Apigee Developer Account Creation

Client will have different credentials per environment they need access to (Sandbox, UAT, Prod).

Create a Developer Account using First Name, Last Name and Email ID of Client.

Create new Developer App for this Developer account, add Product to App and set Customer variables.

Copy Consumer Key and Secret, and send securely to the Client. These credentials will be required to create Token for accessing APIs.

#### 2. Fiserv will the carry out the rest of the internal configurations for the client

Apigee will support 2 authorisation and authentication methods. The first method is the simple client key+secret to request for an access token.  The second method supported will be the more complex OAUTH2 method using a JWT (Java Web Token) to request an Access Token

The API Sandbox environment will allow for either methods. However, beyond the Sandbox (e.g. UAT, Prod), only the OAUTH2 method will be allowed
