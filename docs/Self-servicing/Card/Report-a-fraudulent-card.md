# Report lost/stolen or fraudulent activity on a card

## Description

Report a lost / stolen / fradulent activity on a  card and generate a new card and PIN.

### API to use: [Card Maintenance > Lost Stolen Update](https://docs.firstdata.com/org/global/docs/api#lost-stolen-update-v2)

#### Relevant request variables

| Field Name         | Description                                                                                                                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **cardNbr**        | Card number                                                                                                                                                          |
| **cardBlk**        | Block code to be set                                                                                                                                                 |
| **lossType**       | Type of loss(for options see API message)                                                                                                                            |
| **lossDate**       | Date the card was lost or stolen or had fraudulent activity. This date must be less than or equal to today's date. Date will default to today's date if not entered. |
| **countryOfLoss**  | ISO country code where the card is lost or stolen                                                                                                                    |
| **lossLocation**   | Location where the card is stolen or lost(for options see API message)                                                                                               |
| **newCard**        | Flag to indicate if a new card is required                                                                                                                           |
| **pinCompromised** | Flag to indicate if PIN was compromised                                                                                                                              |
| **processType**    | Same date plastic processing indicator                                                                                                                               |

#### Relevant response variables

A successful update will return a response code 200.
