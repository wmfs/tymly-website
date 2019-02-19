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


# exportingCsvDeltaFile


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-pg-plugin](/reference/plugins/tymly-pg-plugin/)** plugin.
:::

## Purpose

Outputs change-only-update CSV files (or “delta” files) that contain all the necessary actions required to re-synchronize rows in a cloned table - just a thin wrapper over [pg-delta-file](https://www.npmjs.com/package/pg-delta-file)

## Usage

### Example

``` json
{
  "exportingCsvDeltaFile": {
    "options": {
      "since": "2000-07-16T20:37:26.847Z",
      "createdColumnName": "_created",
      "modifiedColumnName": "_modified",
      "actionAliases": {
        "insert": "u",
        "update": "u",
        "delete": "d"
      },
      "tables": [
        {
          "tableName": "people",
          "csvColumns": [
            "PERSON",
            "$ACTION",
            "$ROW_NUM",
            "@social_security_id",
            "@first_name",
            "@last_name",
            "@age"
          ]
        }
      ]
    }
  }
}
```


## Options

### Required properties

#### `since`

The moment-in-time (e.g. an _epoch_) that the exported CSV file should contain changes since.

* **Type:** `string`
* **Format:** [`date-time`](https://json-schema.org/understanding-json-schema/reference/string.html#format)

### Optional properties

#### `actionAliases`

Maps the necessary action (`insert`, `update` or `delete`) to a value to include in the outgoing CSV line (see the dynamic `$ACTION` column).

* **Type:** `object`

----

#### `tables`

An array of objects that contain a `table` object... which in turn define how to assemble each CSV line. Please see [pg-delta-file](https://github.com/wmfs/tymly/tree/master/pg-delta-file) for more information.

* **Type:** `array`





## Links

* [State Resource class on GitHub]()
