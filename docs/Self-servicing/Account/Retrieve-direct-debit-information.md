# Retrieve Direct Debit information

## Description

Retrieve information relating to the Direct Debit information of an account, including bank account details and status.

### API to use: [Account Management > Direct Debit Inquiry](../api/?type=post&path=/fv_emea/v1/directDebitInquiry)

#### Relevant request variables

| Field name  | Description                   |
|-------------|-------------------------------|
| **acctNbr** | Account number or card number |

#### Relevant response variables

| Field name          | Description                                 |
|---------------------|---------------------------------------------|
| **pmtAchDbNbr**     | Direct Debit bank account number            |
| **pmtAch**          | Direct Debit status flag                    |
| **achAmtPct**       | Direct Debit type                           |
| **achAmt**          | Direct Debit fixed amount                   |
| **nomAchPct**       | Direct Debit percentage amount              |
| **ddPmtChangeDate** | Direct Debit payment change date            |
| **ddIban**          | International Banking Account Number (IBAN) |
| **ddBic**           | Bank identifier code (BIC)                  |
| **projAchPmt**      | Projected Direct Debit amount               |
| **ddCancel**        | DD cancellation status for current month    |
