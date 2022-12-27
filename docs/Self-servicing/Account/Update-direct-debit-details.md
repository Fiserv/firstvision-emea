# Update Direct Debit details

## Description

Update information relating to the Direct Debit information of an account, including bank account details.

It is possible to use either the account number or the card number in the request, however all the information is stored at the account level.

In the request, enter the account number being updated and any of the optional fields.

### API to use:[Account Management > Direct Debit Update](../api?type=post&path=/fv_emea/v2/directDebitUpdate)

#### Relevant request variables

| Field name          | Description                                 |
|---------------------|---------------------------------------------|
| **acctNbr**         | Account number or card number - mandatory   |
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

#### Relevant response variables

As above - a successful response will return Direct Debit information.
