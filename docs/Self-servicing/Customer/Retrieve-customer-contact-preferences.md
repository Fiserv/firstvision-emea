# Retrieve customer contact preferences

## Description

Retrieve a customer's contact preference settings.

### API to use 

*[Customer Records> Customer Demographic Inquiry](../api/?type=post&path=/fv_emea/v1/customerDemographicInquiry)*

### Relevant request variables

| Field Name          | Description                   |
|---------------------|-------------------------------|
| **custAcctCardNbr** | Account number or card number |

#### Relevant response variables

| Field Name          | Description                    |
|---------------------|--------------------------------|
| **contactInd**      | Customer contact indicator     |
| **faxPhoneFlag**    | Fax indicator                  |
| **mailingList**     | mailing list indicator         |
| **homePhoneFlag**   | Home phone contact indicator   |
| **smsFlag**         | SMS contact indicator          |
| **emailFlag**       | Email contact indicator        |
| **mobilePhoneFlag** | mobile phone contact indicator |
