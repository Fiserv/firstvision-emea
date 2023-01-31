# Retrieve account balance information

## Description

Retrieve balance information for any account belonging to an existing customer.

### API to use: 

*[Account Management > Account Detail Inquiry](../api/?type=post&path=/fv_emea/v3/accountDetailInquiry)*

#### Relevant request variables

| Field name  | Description                   |
|-------------|-------------------------------|
| **account** | Account number or card number |

#### Relevant response variables

| Field name      | Description               |
|-----------------|---------------------------|
| **currBal**     | Current balance           |
| **currCashBal** | Current cash balance      |
| **lastStmtBal** | Balance on last statement |
