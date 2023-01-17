# Update credit limit of an account

## Description

Here is how to update the total credit limit of the account. This applies to the overall limit on the account and not individual spend limits.

### API to use: [Credit Limit > Credit Limit Update](../api/?type=post&path=/fv_emea/v1/creditLimitUpdate)

#### Relevant request variables

| Field name   | Description                   |
|--------------|-------------------------------|
| **account**  | Account number or card number |
| **crlim**    | New credit limit              |

#### Relevant response variables

| Field name   | Description          |
|--------------|----------------------|
| **account**  | Account number       |
| **crlim**    | Updated credit limit |
