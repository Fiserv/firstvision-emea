# 23-Mini-7 Release Notes

## Date: *18/08/2023*

### General Changes

N/A

#### New API

##### *v1/notifyCardOperation*

This service is used to enable the Thales digital ID (Token Reference ID) to be sent to update account file to support ongoing Life-Cycle Management on the tokens.

##### *v1/tokenLifeCycleManagement*

This service is used to enable the LCM updates sent from Thales to AMOL to be applied on FirstVision. System will reduce the number of tokens at account level by 1 when the digital ID status is deleted or deactivated.

#### Updated API

| S.No | API Name                           | Change                      | Fields                  |
|------|------------------------------------|-----------------------------|-------------------------|
| 1    | v3/accountDetailInquiry            | New request field is added  | -panEncryption          |
| 2    | v1/cardInquiry                     | New request field is added  | -panEncryption          |                                                                                                       |
| 3    | v2/outstandingAuthorisationInquiry | New response field is added | -digitalCardIndicator   |

#### Deprecated API

N/A

#### Deleted API

N/A