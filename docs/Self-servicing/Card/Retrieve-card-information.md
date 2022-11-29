# Retrieve card information

## Description

Retrieve details of all cards (up to a maximum of 20) linked to an account such as card number, embossed name, expiry date on the card etc.

The service will return a masked card number with the last 4 digits visible.

NOTE: If information of more than 20 cards is required please contact your API technical team.

### API to use: [Account Management > Cards List by Account](https://docs.firstdata.com/org/global/docs/api#cards-list-by-account-v1)

#### Relevant request variables

| Field Name          | Description     |
|---------------------|-----------------|
| **acctNbr**         | Account number  |

#### Relevant response variables

| Field Name            | Description                               |
|-----------------------|-------------------------------------------|
| **nbrOfOccur**        | Number of cards returned for account      |
| **cardNbr**           | Card number (masked except last 4 digits) |
| **cardHolderType**    | Type of cardholder (primary/additional)   |
| **cardEmbossedName1** | Name embossed on card                     |
| **dateExpire**        | Expiry date of the card                   |
