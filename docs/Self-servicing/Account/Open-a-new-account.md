# Open a new account (including customer and card)

## Description

Open a new account. This message will generate the account, as well as the associated primary customer and card records.

NOTE: This sample request is the base of the message, however each client may require additional fields based on their individual settings. Work with your project team to identify these. The API message (link below) provides all the fields available for entry.

### API to use: [Account Maintenance > Customer Account Card Add](../api?type=post&path=/fv_emea/v1/customerAccountCardAdd)

#### Relevant request variables

| Field name               | Description                                                                                       |
|--------------------------|---------------------------------------------------------------------------------------------------|
| **customerRecordAction** | Customer record action. Set to 'A' to add a new customer                                          |
| **accountRecordAction**  | Account record action. Set to 'A' to add a new account                                            |
| **embosserRecordAction** | Card record action. Set to 'A' to add a new card                                                  |
| **msCardLogoTable**      | Table that contains logo/product for the account                                                  |
| **multiSchemeCardLogo**  | Logo/product that the account will be placed under                                                |
| **custOrg**              | Org/business unit                                                                                 |
| **ownerCoownerInd**      | Owner/co-owner indicator. Set to '1' to identify the details as being for the main customer       |
| **foreignInd**           | Foreign use indicator.Set to '0' to indicate local account                                        |
| **processType**          | Same day plastic processing indicator                                                             |
| **makerComakerTable**    | Table that contains customer information                                                          |
| **firstName**            | First name                                                                                        |
| **lastName**             | Last name                                                                                         |
| **addressLine1**         | Address line 1                                                                                    |
| **addressLine2**         | Address line 2                                                                                    |
| **addressLine3**         | Address line 3                                                                                    |
| **addressLine4**         | Address line 4                                                                                    |
| **city**                 | City                                                                                              |
| **naPostalCode**         | Post code                                                                                         |
| **countryCode**          | Country code                                                                                      |
| **emailAddr**            | Email address                                                                                     |
| **homePhoneNumber**      | Home phone number                                                                                 |
| **mobilePhone**          | Mobile phone number                                                                               |
| **dateOfBirth**          | Date of birth                                                                                     |
| **accountOrganization**  | Account organisation/business unit                                                                |
| **accountLogo**          | Account logo/product                                                                              |
| **cycle**                | Cycle/statement day                                                                               |
| **residenceId**          | Pricing Control Table (PCT) ID for the account.                                                   |
| **defaultCashPlan**      | Plan number for the cash plan. Unless otherwise stated, enter '10001' into this field.            |
| **creditLmt**            | Credit limit                                                                                      |
| **cardholderType**       | Cardholder type. Set field to '1' to indicate primary cardholder.                                 |
| **embossedName1**        | Name embossed on the plastic                                                                      |
| **sdpProcessType**       | Same Day Plastics indicator. Set this field to '0' to indicate normal processing.                 |

#### Relevant response variables

| Field name         | Description                     |
|--------------------|---------------------------------|
| **customerNumber** | Generated customer number       |
| **accountNumber**  | Generated account number        |
| **cardNumber**     | Generated card number           |
