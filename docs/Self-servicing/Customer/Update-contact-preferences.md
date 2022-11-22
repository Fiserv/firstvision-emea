Update contact preferences
==========================

#### Description:

Update contact preferences on the Customer record.

#### API to use:[Customer Records> Customer Data Update](https://docs.firstdata.com/org/global/docs/api#customer-data-update-v2)


### Relevant request variables:

| Field Name          | Description                                                                                            |
|---------------------|--------------------------------------------------------------------------------------------------------|
| **acctNbr**         | Account number or card number                                                                          |
| **numberType**      | A value to describe what type of number is used in the acctNbr field.                                  |
| **affordDataInd**   | Update indicator, enter a value in this field to indicate whether to update the owner or co-owner data |
| **contactInd**      | Customer contact indicator                                                                             |
| **faxPhoneFlag**    | Fax indicator                                                                                          |
| **mailingList**     | mailing list indicator                                                                                 |
| **homePhoneFlag**   | Home phone contact indicator                                                                           |
| **smsFlag**         | SMS contact indicator                                                                                  |
| **emailFlag**       | Email contact indicator                                                                                |
| **mobilePhoneFlag** | mobile phone contact indicator                                                                         |

### Relevant response variables:
A successful update will return a response code 200.
