# Request a replacement card

## Description

Replace a damaged card. This can also be used for requesting a new plastic follow a name change.

### API to use 

*[Card Maintenance > Card Replacement](../api/?type=post&path=/fv_emea/v1/cardReplacement)*

#### Relevant request variables

| Field Name  | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **cardNbr** | Card number                                                                 |
| **action**  | Card action requested, A value of '3' in this field indicates a replacement |

#### Relevant response variables

A successful update will return a response code 200.
