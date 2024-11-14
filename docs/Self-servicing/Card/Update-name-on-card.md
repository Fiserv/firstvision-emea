# Update name on card

## Description

Update the embossed name on a card

Note: A replacement card has to be requested following the update to reflect the updated name on the actual card plastic.

### API to use 

*[Card Maintenance > Card Update](../api/?type=post&path=/fv_emea/v1/cardUpdate)*

#### Relevant request variables

| Field Name        | Description               |
|-------------------|---------------------------|
| **cardNbr**       | Card number               |
| **embossedName1** | Name embossed on the card |

#### Relevant response variables

A successful update will return a response code 200.
