# 2023 Mini 4 Release Notes

## Date: *28/04/2023*

### General Changes

N/A

#### New API

##### *v1/balanceTransferInquiry*

This service is used to inquire the information about Card and Account Balance.

##### *v1/pddBankValidationService*

This service is used to Validate the Card Details received via payments.

#### Updated API

| S.No | API Name                | Change                        | Fields                                                                  |
|------|-------------------------|-------------------------------|-------------------------------------------------------------------------|
| 1    | v3/accountDetailInquiry | New response fields are added | -dmpOptOutFlag<br/> -acctPmtMinAmt<br/> -acctPrinAmtPct<br/> -dmpPmtInd |
| 2    | v4/transactionInquiry   | New response field is added   | -promoPlanExpDt                                                         |

#### Deprecated API

N/A

#### Deleted API

N/A