---

#     SSSSSSSSSSSSSSS TTTTTTTTTTTTTTTTTTTTTTT     OOOOOOOOO     PPPPPPPPPPPPPPPPP    !!!  
#   SS:::::::::::::::ST:::::::::::::::::::::T   OO:::::::::OO   P::::::::::::::::P  !!:!! 
#  S:::::SSSSSS::::::ST:::::::::::::::::::::T OO:::::::::::::OO P::::::PPPPPP:::::P !:::! 
#  S:::::S     SSSSSSST:::::TT:::::::TT:::::TO:::::::OOO:::::::OPP:::::P     P:::::P!:::! 
#  S:::::S            TTTTTT  T:::::T  TTTTTTO::::::O   O::::::O  P::::P     P:::::P!:::! 
#  S:::::S                    T:::::T        O:::::O     O:::::O  P::::P     P:::::P!:::! 
#   S::::SSSS                 T:::::T        O:::::O     O:::::O  P::::PPPPPP:::::P !:::! 
#    SS::::::SSSSS            T:::::T        O:::::O     O:::::O  P:::::::::::::PP  !:::! 
#      SSS::::::::SS          T:::::T        O:::::O     O:::::O  P::::PPPPPPPPP    !:::! 
#         SSSSSS::::S         T:::::T        O:::::O     O:::::O  P::::P            !:::! 
#              S:::::S        T:::::T        O:::::O     O:::::O  P::::P            !!:!! 
#              S:::::S        T:::::T        O::::::O   O::::::O  P::::P             !!!   
#  SSSSSSS     S:::::S      TT:::::::TT      O:::::::OOO:::::::OPP::::::PP                 
#  S::::::SSSSSS:::::S      T:::::::::T       OO:::::::::::::OO P::::::::P           !!!  
#  S:::::::::::::::SS       T:::::::::T         OO:::::::::OO   P::::::::P          !!:!! 
#   SSSSSSSSSSSSSSS         TTTTTTTTTTT           OOOOOOOOO     PPPPPPPPPP           !!!  
#                                                                                          
#             T H I S   R E A D M E . M D   F I L E   I S   G E N E R A T E D !           
#                                                                                         
#     IF YOU EDIT IT DIRECTLY YOUR CHANGES WILL BE WASHED AWAY THE NEXT TIME THIS FILE  
#                                GETS GENERATED !
#                                                                                         

sidebar: auto
---


# processingXmlFiles


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-etl-plugin](/reference/plugins/tymly-etl-plugin/)** plugin.
:::

## Purpose

Takes an XML file and converts it to CSV

## Usage

### Example

``` json
{
  "ProcessingXmlFiles": {
    "Type": "Task",
    "InputPath": "$",
    "Resource": "module:processingXmlFiles",
    "ResourceConfig": {
      "rootXMLElement": "EstablishmentDetail",
      "headerMap": [
        [
          "FHRSID",
          "fhrsid",
          "integer"
        ],
        [
          "LocalAuthorityBusinessID",
          "local_authority_business_id",
          "string"
        ],
        [
          "BusinessName",
          "business_name",
          "string"
        ],
        [
          "BusinessType",
          "business_type",
          "string"
        ],
        [
          "BusinessTypeID",
          "business_type_id",
          "integer"
        ],
        [
          "AddressLine1",
          "address_line_1",
          "string"
        ],
        [
          "AddressLine2",
          "address_line_2",
          "string"
        ],
        [
          "AddressLine3",
          "address_line_3",
          "string"
        ],
        [
          "AddressLine4",
          "address_line_4",
          "string"
        ],
        [
          "PostCode",
          "postcode",
          "string"
        ],
        [
          "RatingValue",
          "rating_value",
          "string"
        ],
        [
          "RatingKey",
          "rating_key",
          "string"
        ],
        [
          "RatingDate",
          "rating_date",
          "date"
        ],
        [
          "LocalAuthorityCode",
          "local_authority_code",
          "integer"
        ],
        [
          "LocalAuthorityName",
          "local_authority_name",
          "string"
        ],
        [
          "LocalAuthorityWebSite",
          "local_authority_website",
          "string"
        ],
        [
          "LocalAuthorityEmailAddress",
          "local_authority_email_address",
          "string"
        ],
        [
          "Hygiene",
          "hygiene",
          "integer",
          "Scores"
        ],
        [
          "Structural",
          "structural",
          "integer",
          "Scores"
        ],
        [
          "ConfidenceInManagement",
          "confidence_in_management",
          "integer",
          "Scores"
        ],
        [
          "SchemeType",
          "scheme_type",
          "string"
        ],
        [
          "NewRatingPending",
          "new_rating_pending",
          "string"
        ],
        [
          "Longitude",
          "longitude",
          "integer",
          "Geocode"
        ],
        [
          "Latitude",
          "latitude",
          "integer",
          "Geocode"
        ]
      ]
    }
  }
}
```


## Options

### Optional

* `entities` *{object}*





## Links

* [State Resource class on GitHub]()
