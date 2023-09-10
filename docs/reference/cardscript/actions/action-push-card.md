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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/action-push-card.svg')" alt="Relevant Cardscript icon">Action.PushCard

::: tip Cardscript
When invoked this will push the new card on the routing history.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [],
  "actions": [
    {
      "type": "Action.PushCard",
      "title": "Action.PushCard",
      "stateMachineName": "pizza_amendOrder_1_0"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `type`

Must be `"Action.PushCard"`.

* **Type:** `string`

----

### `stateMachineName`

The state machine to launch.

* **Type:** `string`

## Optional properties

### `title`

Label for button or link that represents this action.

* **Type:** `string`

----

### `input`

The input to launch with.

* **Type:** `object`



<hr>

## JSON Schema

``` json
{
  "additionalProperties": true,
  "description": "When invoked this will push the new card on the routing history.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Action.PushCard\"`."
    },
    "title": {
      "type": "string",
      "description": "Label for button or link that represents this action."
    },
    "stateMachineName": {
      "type": "string",
      "description": "The state machine to launch."
    },
    "input": {
      "type": "object",
      "description": "The input to launch with."
    }
  },
  "required": [
    "type",
    "stateMachineName"
  ],
  "type": "Action.PushCard",
  "typeSafe": "action-push-card",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Action.PushCard\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Optional",
      "text": "Label for button or link that represents this action."
    },
    {
      "name": "stateMachineName",
      "type": "string",
      "required": "Required",
      "text": "The state machine to launch."
    },
    {
      "name": "input",
      "type": "object",
      "required": "Optional",
      "text": "The input to launch with."
    }
  ]
}
```
