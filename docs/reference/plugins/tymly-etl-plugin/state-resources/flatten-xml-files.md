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


# flattenXmlFiles


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-etl-plugin](/reference/plugins/tymly-etl-plugin/)** plugin.
:::

## Purpose

Flatten XML Files

## Usage

### Example

``` json
{
  "FlattenXmlFiles": {
    "Type": "Task",
    "InputPath": "$.streets",
    "Resource": "module:flattenXmlFiles",
    "ResourceConfig": {
      "rootXMLElement": "Street",
      "pivotPath": "$..StreetDescriptiveIdentifier",
      "headerMap": [
        [
          "$.usrn",
          "usrn",
          "number"
        ],
        [
          "$.changeType",
          "changeType",
          "string"
        ],
        [
          "$.state",
          "state",
          "number"
        ],
        [
          "$.stateDate",
          "state_date",
          "date"
        ],
        [
          "@.streetDescription.en",
          "description",
          "string"
        ],
        [
          "@.locality.en",
          "locality",
          "string"
        ],
        [
          "@.townName.en",
          "town_name",
          "string"
        ],
        [
          "@.administrativeArea.en",
          "administrative_area",
          "string"
        ],
        [
          "$.streetSurface",
          "surface",
          "number"
        ],
        [
          "$.streetClassification",
          "classification",
          "number"
        ],
        [
          {
            "select": "$.streetStart.Point.pos",
            "transform": "ordnanceSurvey_eastingCoord"
          },
          "start_x",
          "number"
        ],
        [
          {
            "select": "$.streetStart.Point.pos",
            "transform": "ordnanceSurvey_northingCoord"
          },
          "start_y",
          "number"
        ],
        [
          {
            "select": "$.streetEnd.Point.pos",
            "transform": "ordnanceSurvey_eastingCoord"
          },
          "end_x",
          "number"
        ],
        [
          {
            "select": "$.streetEnd.Point.pos",
            "transform": "ordnanceSurvey_northingCoord"
          },
          "end_y",
          "number"
        ],
        [
          {
            "select": "$.streetStartLatLong.Point.pos",
            "transform": "ordnanceSurvey_latitudeCoord"
          },
          "start_latitude",
          "number"
        ],
        [
          {
            "select": "$.streetStartLatLong.Point.pos",
            "transform": "ordnanceSurvey_longitudeCoord"
          },
          "start_longitude",
          "number"
        ],
        [
          {
            "select": "$.streetEndLatLong.Point.pos",
            "transform": "ordnanceSurvey_latitudeCoord"
          },
          "end_latitude",
          "number"
        ],
        [
          {
            "select": "$.streetEndLatLong.Point.pos",
            "transform": "ordnanceSurvey_longitudeCoord"
          },
          "end_longitude",
          "number"
        ],
        [
          "$.startDate",
          "start_date",
          "date"
        ],
        [
          "$.lastUpdateDate",
          "last_update_date",
          "date"
        ],
        [
          "$.entryDate",
          "entry_date",
          "date"
        ]
      ],
      "namespace": "strip",
      "xmllang": "wrap"
    },
    "End": true
  }
}
```


## Options

### Optional

* `entities` *{object}*





## Links

* [State Resource class on GitHub]()
