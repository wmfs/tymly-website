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


# awaitingHumanInput


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-cardscript-plugin](/reference/plugins/tymly-cardscript-plugin/)** plugin.
:::

## Purpose

Awaits the input of a human to advance the state-machine

## Usage

### Example

``` json
{
  "AwaitingHumanInput": {
    "Type": "Task",
    "Resource": "module:awaitingHumanInput",
    "ResourceConfig": {
      "uiType": "form",
      "uiName": "wmfs_patientReport",
      "dataPath": "$.formData"
    },
    "ResultPath": "$.formData",
    "Next": "Upserting"
  }
}
```


## Options

### Optional properties

#### `uiName`

Name of the UI board or form.

* **Type:** `string`

----

#### `uiType`

Type of UI, either board, form, or progress.

* **Type:** `string`

----

#### `uiRefresh`

If the uiType is progress, the suggest refresh time in seconds.

* **Type:** `integer`

----

#### `dataPath`

Path to data.

* **Type:** `string`

----

#### `defaults`

Default values.

* **Type:** `object`





## Links

* [State Resource class on GitHub]()
