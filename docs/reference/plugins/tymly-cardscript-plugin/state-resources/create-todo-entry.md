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


# createTodoEntry


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-cardscript-plugin](/reference/plugins/tymly-cardscript-plugin/)** plugin.
:::

## Purpose

Creates a new todo entry.  Note that after creating the todo, the ResultPath object will have a property called idProperties, which will have a sub-property called id - which will hold the id of the newly created todo.

## Usage

### Example

``` json
{
  "CreateTodoEntry": {
    "Type": "Task",
    "Resource": "module:createTodoEntry",
    "Parameters": {
      "todoTitle": "Book Dance Classes",
      "description": "Book a Dance Class for an individual",
      "stateMachineTitle": "Book Dance Classes",
      "stateMachineCategory": "dance",
      "launches": [
        {
          "title": "Book",
          "stateMachineName": "dance_bookClass_1_0",
          "input": {
            "id.$": "$.id"
          }
        }
      ]
    },
    "ResultPath": "$.todo",
    "Next": "NextState"
  }
}
```


## Options

### Required properties

#### `todoTitle`

The text of the clickable link on the todo.

* **Type:** `string`

----

#### `description`

The text displayed under the clickable link on the todo.

* **Type:** `string`

----

#### `stateMachineTitle`

This will be stored in the database to identify an execution - this will typically be the same as todoTitle.

* **Type:** `string`

----

#### `stateMachineCategory`

The blueprint namespace (see the namespace property in your blueprint.json file).

* **Type:** `string`

### Optional properties

#### `id`

An optional property allowing you to specify the id of the todo.  Note that this property wouldn't typically be specified and would be set automatically.

* **Type:** `uuid`





## Links

* [State Resource class on GitHub]()
