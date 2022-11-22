Retrieve transaction information
================================


#### Description:

Request 1: Retrieve all the transactions that have cleared on the account since the last statement cycle.

Request 2: Retrieve transactions between two input dates.

#### API to use: [Transactions > Transaction Inquiry](https://docs.firstdata.com/org/global/docs/api#transaction-inquiry-v3)

### Relevant request variables:

###### Request 1:

| Field name     | Description                                                                                                                          |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **acct**       | Account number or card number                                                                                                        |
| **txnDetail**  | Transaction Detail flag: Parameter to define period of returned transactions. This field must be set to "C" (Current/Cycle to date). |
| **txnDateSel** | Transaction date selector. (See API message for values.)                                                                             |

###### Request 2:

| Field name      | Description                                              |
|-----------------|----------------------------------------------------------|
| **acct**        | Account number or card number                            |
| **txnDateFrom** | Transaction 'from' date (incl.).                         |
| **txnDateThru** | Transaction 'to' date (incl.).                           |
| **txnDateSel**  | Transaction date selector. (See API message for values.) |

##### Relevant response variables:

| Field name               | Description                             |
|--------------------------|-----------------------------------------|
| **nbrReturnedItems**     | Number of returned items                |
| **referenceNbr**         | Transaction reference number            |
| **txnCurrCode**          | Transaction currency code               |
| **plan**                 | Plan number                             |
| **recurTxnInd**          | Recurring transaction indicator         |
| **effDate**              | Transaction/effective date              |
| **quantity**             | Number of items in the basket           |
| **cardAcceptorId**       | Card acceptor ID                        |
| **origPmtAmt**           | Original payment amount                 |
| **storeNbr**             | Store number                            |
| **origTxnCurrDesc**      | Original currency description           |
| **origTxnCurr**          | Original currency code                  |
| **mtMerchantStore**      | Merchant store number                   |
| **origTxnAmtFormatted**  | Original transaction amount - formatted |
| **posEntryMode**         | POS entry mode                          |
| **type**                 | Transaction type                        |
| **ticketNbr**            | Ticket number                           |
| **categoryDesc**         | Merchant Category Code                  |
| **authCode**             | Authorisation code                      |
| **merchCntryCode**       | Merchant country code                   |
| **txnCode**              | Transaction code                        |
| **pts**                  | Loyalty points (frequent shopper)       |
| **postDate**             | Posting date                            |
| **interchgFee**          | Interchange fee                         |
| **merchCity**            | Merchant city name                      |
| **origTxnAmount**        | Original transaction amount             |
| **txnConvRate**          | Foreign exchange rate                   |
| **txnConvRateFormatted** | Foreign exchange rate - formatted       |
| **unitPrice**            | Unit price                              |
| **cardBlkCode**          | Card block code                         |
| **amt**                  | Transaction amount                      |
| **merchState**           | Merchant state                          |
| **pgmNbr**               | Frequent shopper program number         |
| **description**          | Transaction description                 |
| **cardNbr**              | Card number                             |
