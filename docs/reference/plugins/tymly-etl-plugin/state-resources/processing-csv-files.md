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


# processingCsvFiles


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-etl-plugin](/reference/plugins/tymly-etl-plugin/)** plugin.
:::

## Purpose

Smash CSV files into more manageable files based on column values - just a thin wrapper over [Smithereens](https://www.npmjs.com/package/smithereens)

## Usage

### Example

``` json
{
  "processingCsvFiles": {
    "options": {
      "parser": {
        "quote": "\"",
        "delimiter": ",",
        "newline": "\r\n",
        "skipFirstLine": false,
        "trimWhitespace": true
      },
      "dirSplits": [
        {
          "columnIndex": 3,
          "valueToDirMap": {
            "c": "children",
            "a": "adults"
          }
        }
      ],
      "fileSplits": {
        "columnIndex": 4,
        "valueToFileMap": {
          "u": {
            "filename": "changes",
            "outputColumns": [
              {
                "name": "person_no",
                "columnIndex": 0
              },
              {
                "name": "first_name",
                "columnIndex": 1
              },
              {
                "name": "last_name",
                "columnIndex": 2
              }
            ]
          },
          "d": {
            "filename": "deletes",
            "outputColumns": [
              {
                "name": "person_no",
                "columnIndex": 0
              }
            ]
          }
        }
      }
    },
    "events": {
      "csvFilesProcessed": {
        "to": "importingCsvFiles"
      }
    }
  }
}
```


## Options

### Optional

* `parser` *{object}*
* `dirSplits` *{array}*
* `fileSplits` *{object}*





## Links

* [State Resource class on GitHub]()
