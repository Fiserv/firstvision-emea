# Request a replacement card

## Description

Replace a damaged card. This can also be used for requesting a new plastic follow a name change.

### API to use: [Card Maintenance > Card Replacement](https://docs.firstdata.com/org/global/docs/api#card-replacement-v1)

#### Relevant request variables

| Field Name  | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **cardNbr** | Card number                                                                 |
| **action**  | Card action requested, A value of '3' in this field indicates a replacement |

#### Relevant response variables

A successful update will return a response code 200.
