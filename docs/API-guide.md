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

<img style="display:block;margin:0 auto;" src="https://raw.githubusercontent.com/Fiserv/firstvision-emea/develop/assets/images/menu.jpg">

Step 3 - Building the API request
---------------------------------

Each use case will guide you to the relevant API message within the API portal and introduce you to the fields that are relevant to achieve the goal of each individual Use Case.

The use cases have been created to assist you in finding the right message on the portal and what fields within that message will be relevant. If a use case you're expecting to find does not exist, or if one is lacking in information, please contact your project Business Analyst who will be able to clarify.

API Message to Use
------------------

This is the API message within the portal that you need to look for. It gives you the section name following by the API message itself. Always use the latest version if there are more than one as older version may be deprecated.

<img style="display:block;margin:0 auto;" src="https://raw.githubusercontent.com/Fiserv/firstvision-emea/develop/assets/images/api-message-to-use.jpg">

Click on the arrow in order to view the full message.

In order to view the request / response fields, click "Request / Response Schema".

<img style="display:block;margin:0 auto;" src="https://raw.githubusercontent.com/Fiserv/firstvision-emea/develop/assets/images/show-model.jpg">

The following sections of the use case will guide you to the relevant fields:

Relevant request variables
--------------------------

| This section will list any pre-requisites required to retrieve the data within the API message. These are often the mandatory fields within the request message, for this use case. You will only need to use the fields stated in the use case within your request. |

Relevant response variables
---------------------------

| This section lists all the fields within the response that are relevant to the use case. The API response itself will, by default, return all fields, so if you come across any others that you think will be useful, you are of course permitted to use them too. Please consult your Fiserv Business Analyst before doing so. |

>**Note:** Only fields with values of non-spaces are returned.
