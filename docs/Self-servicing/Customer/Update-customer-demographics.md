# Update customer demographics

## Description

Update customer demographics, such as name, address, phone and email.

### API to use: [Customer Records > Customer Data Update](../api/?type=post&path=/fv_emea/v2/customerDataUpdate)

#### Relevant request variables

| Field Name        | Description                                                                                            |
|-------------------|--------------------------------------------------------------------------------------------------------|
| **acctNbr**       | Account number or card number                                                                          |
| **numberType**    | A value to describe what type of number is used in the acctNbr field.                                  |
| **affordDataInd** | Update indicator, enter a value in this field to indicate whether to update the owner or co-owner data |
| **title**         | Title                                                                                                  |
| **firstName**     | First name                                                                                             |
| **middleName**    | Middle name                                                                                            |
| **latName**       | Last name                                                                                              |
| **homePhoneNbr**  | Home Phone number                                                                                      |
| **mobilePhone**   | Mobile phone number                                                                                    |
| **houseNumber**   | House number                                                                                           |
| **houseName**     | House name                                                                                             |
| **roadName**      | Road name                                                                                              |
| **city**          | City                                                                                                   |
| **state**         | State                                                                                                  |
| **postalCode**    | Postal code                                                                                            |
| **countryCode**   | Country code                                                                                           |
| **taxIdTyp**      | Tax ID type is a code that indicates the type od identification number held in taxIdNbr                |
| **taxIdNbr**      | Tax ID number                                                                                          |

#### Relevant response variables

A successful update will return a response code 200.
