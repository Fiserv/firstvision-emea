# Retrieve plan information (interest and balance at plan level)

## Description

Retrieve interest rate information for purchases, cash as well as promotional rates applicable to the account. In addition, this use case also returns balance information.

### API to use: [Account Management > Account Plan Inquiry](../api?type=post&path=/fv_emea/v1/accountPlanInquiry)

#### Relevant request variables

| Field name    | Description                       |
|---------------|-----------------------------------|
| **acct**      | Account number or card number     |

#### Relevant response variables

| Field name            | Description                                                                    |
|-----------------------|--------------------------------------------------------------------------------|
| **nbrPlans**          | Number of plans returned                                                       |
| **PlanCtdData**       | Table containing the below information related to each plan on the account.    |
| **planNbr**           | Plan number                                                                    |
| **planCurrMthlyRate** | Current monthly rate                                                           |
| **planCurrBal**       | Current balance                                                                |
| **planBaseRate**      | Base rate                                                                      |
| **planBegBal**        | Beginning balance                                                              |
| **planCurrAer**       | Current AER rate                                                               |
| **planGotoMthlyRate** | GoTo monthly rate                                                              |
| **planType**          | Plan type                                                                      |
| **planItoExpDte**     | Promotional rate (Interest Table Override/ITO) expiration date                 |
| **planCalcRate**      | Calculated rate                                                                |
| **planDesc**          | Plan description                                                               |
| **planGotoAer**       | GOTO AER rate                                                                  |
| **planOpenDte**       | Plan Open Date                                                                 |
