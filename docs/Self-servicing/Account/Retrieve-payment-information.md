# Retrieve payment information

## Description

Retrieve information relevant to the payments of the account, including dates when payments are due as well as amounts.

### API to use: [Account Management > Account Detail Inquiry](../api?type=post&path=/fv_emea/v3/accountDetailInquiry)

#### Relevant request variables

| Field name  | Description                   |
|-------------|-------------------------------|
| **account** | Account number or card number |

#### Relevant response variables

| Field name       | Description                                         |
|------------------|-----------------------------------------------------|
| **pmtCurrDue**   | Amount due from the current cycle.                  |
| **pmtPastDue**   | Amount due from previous cycles.                    |
| **pmtLastAmt**   | Amount of the last payment.                         |
| **datePmtDue**   | Payment due date                                    |
| **dateLastPmt**  | Last payment date                                   |
| **pmtAmt**       | Payment amount                                      |
| **dateNextPmt**  | Date that the next payment is due for this account. |
| **dateNextStmt** | Date of the next statement.                         |
