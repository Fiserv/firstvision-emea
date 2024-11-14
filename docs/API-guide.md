API User Guide
==============

How to use the guide
--------------------

This user guide will provide you with the knowledge required to use our Issuing APIs in order to manage account-related information. The use cases that are referred to within the guide are our most popular journeys and will give a basis for most functions that you may perform.

Step 1 - Terminology
--------------------

In order to manage information from FirstVision accounts, it's crucial to understand the structure of the account and the terminology used within FirstVision.[The Overview of FirstVision Terminology](./?path=docs/getting-started/OverviewOfFirstVisionTerminology.md) page should be your first port of call.

Step 2 - Finding the right use case
-----------------------------------

Once you are familiar with the structure, and you know whether the Customer, the Account, or the Card is where you need to find information, go to the relevant section of the user guide. For example, if you're looking to update the credit limit on an account, you will go to the "Credit Limit" section, and find the use cases that best describes the function you are aiming to perform.

<img style="display:block;margin:0 auto;" alt="menu" src="/assets/images/menu.jpg">

Step 3 - Building the API request
---------------------------------

Each use case will guide you to the relevant API message within the API portal and introduce you to the fields that are relevant to achieve the goal of each individual Use Case.

The use cases have been created to assist you in finding the right message on the portal and what fields within that message will be relevant. If a use case you're expecting to find does not exist, or if one is lacking in information, please contact your project Business Analyst who will be able to clarify.

API Message to Use
------------------

This is the API message within the portal that you need to look for. It gives you the section name following by the API message itself. Always use the latest version if there are more than one as older version may be deprecated.

<img style="display:block;margin:0 auto;" alt="api-message-to-use" src="/assets/images/api-message-to-use.jpg">

View Schema
------------------

In order to view the request / response fields, click "Request / Response Schema".

<img style="display:block;margin:0 auto;" alt="show-model" src="/assets/images/show-model.jpg">

The following sections of the use case will guide you to the relevant fields:

Relevant request variables
--------------------------

| This section will list any pre-requisites required to retrieve the data within the API message. These are often the mandatory fields within the request message, for this use case. You will only need to use the fields stated in the use case within your request. |

Relevant response variables
---------------------------

| This section lists all the fields within the response that are relevant to the use case. The API response itself will, by default, return all fields, so if you come across any others that you think will be useful, you are of course permitted to use them too. Please consult your Fiserv Business Analyst before doing so. |

>**Note:** Only fields with values of non-spaces are returned.

General considerations
----------------------

**Please note below details for all the APIs**:

**Date fields**: All date fields (Request and Response) will be Gregorian - BasicISO (YYYYMMDD) unless mentioned otherwise.

**Amount Fields**: Unless otherwise specified all amount fields are returned in cents or pence or equivalent. </br>

**Decimal fields**: The actual decimal point needs to be calculated based on the processing parameter. Number of Decimals used is returned as part of the response. API Request and Response do not display the decimal point unless mentioned in description for field or service. However, the Response provides  "number of decimals " as an additional field. For example, "13000 " in the Request field is accepted as 130.00. In Response 130.00 will be displayed as 13000 with number of decimal=2. </br>

**JSON Considerations**: </br>
 To omit the field data from request objects, tag for the field should be omitted from the request altogether.
 In the request object, numeric fields should not contain null strings (" ").
 Date fields must conform to the format specified as part of that fields description.
 In the response objects, any field that is alphanumeric with spaces as its value, will be omitted. </br>

**General 453 Error Messages**:
 &lt;field&gt; is required
 &lt;field&gt; should be numeric
 Length of &lt;field&gt; should not exceed &lt;n&gt; byte(s)
 &lt;field&gt; should be numeric and should not exceed &lt;n&gt; byte(s)
 &lt;field&gt; should be numeric and in the format - MMYY
 &lt;field&gt; should be numeric and in the format - YYMM
 Invalid date in &lt;field&gt; Expected BasicISO Date - YYYYMMDD format"
