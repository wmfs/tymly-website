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


# addDocs


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-solr-plugin](/reference/plugins/tymly-solr-plugin/)** plugin.
:::

## Purpose

Adds docs

## Usage

### Example

``` json
{
  "FormatDocs": {
    "Type": "Map",
    "InputPath": "$",
    "ItemsPath": "$.incidents",
    "Iterator": {
      "StartAt": "Shape",
      "States": {
        "Shape": {
          "Type": "Pass",
          "Parameters": {
            "id.$": "States.Format('incident#{}', $.id)",
            "docId.$": "$.id",
            "domain": "search",
            "docType": "incident",
            "title.$": "States.Format('Incident {}/{}', $.id, $.year)",
            "description.$": "$.label",
            "category": "iip",
            "point.$": "States.Format('{},{}', $.lat, $.lon)",
            "activeEvent": true,
            "author": "incident",
            "roles.$": "States.Array('$authenticated')",
            "language": "ENG",
            "sortString.$": "$.id",
            "launches.$": "States.JsonToString($.launches)",
            "created": "$NOW",
            "modified": "$NOW"
          },
          "OutputPath": "$.solrDoc",
          "ResultPath": "$.solrDoc",
          "End": true
        }
      }
    },
    "ResultPath": "$.incidentSolrDocs",
    "Next": "AddDocs"
  },
  "AddDocs": {
    "Type": "Task",
    "Resource": "module:addDocs",
    "InputPath": "$.incidentSolrDocs",
    "ResultPath": "$",
    "End": true
  }
}
```


## Options





## Links

* [State Resource class on GitHub]()
