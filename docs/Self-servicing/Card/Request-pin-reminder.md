# Request a PIN reminder (through batch process)

## Description

Send a PIN reminder through the batch process for an existing PIN using methods specified on the account, e.g. SMS, mail, etc.

NOTE: This process cannot be used to generate a new PIN.

### API to use:[Card Management > PIN Reminder](https://docs.firstdata.com/org/global/docs/api#pin-reminder-v1)

#### Relevant request variables

| Field Name    | Description                                              |
|---------------|----------------------------------------------------------|
| **nbrCrdRqt** | Number of cards for which the PIN reminder is requested. |
| **cardNbr**   | Card number                                              |

#### Relevant response variables

A successful update will return a response code 200.
