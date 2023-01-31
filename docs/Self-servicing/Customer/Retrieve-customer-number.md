# Retrieve customer number

## Description

Use the account number or the card number to retrieve the customer number and alternate customer number, if applicable.

### API to use: 

*[Account Management > Account Detail Inquiry](../api/?type=post&path=/fv_emea/v3/accountDetailInquiry)*

#### Relevant request variables

| Field Name  | Description                   |
|-------------|-------------------------------|
| **account** | Account number or card number |

#### Relevant response variables

| Field Name         | Description               |
|--------------------|---------------------------|
| **customerNumber** | Customer number           |
| **altCustNbr**     | Alternate customer number |
