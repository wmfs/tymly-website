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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/action-set.svg')" alt="Relevant Cardscript icon">ActionSet

::: tip Cardscript
ActionSet allows actions to be displayed within a card.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "ActionSet",
      "spacing": "large",
      "actions": [
        {
          "type": "Action.OpenUrl",
          "title": "Action.OpenUrl",
          "url": "https://github.com/wmfs/cardscript"
        },
        {
          "type": "Action.Submit",
          "title": "Action.Submit",
          "data": {
            "x": "y"
          }
        }
      ]
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `type`

Must be `"ActionSet"`.

* **Type:** `string`
* **Values:**
  * `ActionSet`

----

### `actions`

* **Type:** `array`

## Optional properties

### `spacing`

Controls the amount of spacing between this element and the preceding element.

* **Type:** `string`
* **Values:**
  * `none`
  * `small`
  * `default`
  * `medium`
  * `large`
  * `extraLarge`
  * `padding`

----

### `actionStyle`

How to display the action set.

* **Type:** `string`
* **Default:** `"list"`
* **Values:**
  * `list`
  * `dropdown`

----

### `label`

Text displayed as label if ActionSet is in dropdown style.

* **Type:** `string`

----

### `id`

A unique identifier associated with the element.

* **Type:** `string`

----

### `separator`

When `true`, draw a separating line at the top of the element.

* **Type:** `boolean`



<hr>

## JSON Schema

``` json
{
  "additionalProperties": true,
  "type": "ActionSet",
  "description": "ActionSet allows actions to be displayed within a card.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"ActionSet\"`.",
      "enum": [
        "ActionSet"
      ]
    },
    "actions": {
      "description": "The Actions to show in the card's action bar.",
      "$ref": "#/definitions/Actions"
    },
    "spacing": {
      "$ref": "#/definitions/SpacingStyle"
    },
    "actionStyle": {
      "type": "string",
      "description": "How to display the action set.",
      "enum": [
        "list",
        "dropdown"
      ],
      "default": "list"
    },
    "label": {
      "type": "string",
      "description": "Text displayed as label if ActionSet is in dropdown style."
    }
  },
  "required": [
    "type",
    "actions"
  ],
  "typeSafe": "action-set",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"ActionSet\"`."
    },
    {
      "name": "actions",
      "required": "Required",
      "text": "The Actions to show in the card's action bar."
    },
    {
      "name": "spacing",
      "required": "Optional"
    },
    {
      "name": "actionStyle",
      "type": "string",
      "required": "Optional",
      "text": "How to display the action set."
    },
    {
      "name": "label",
      "type": "string",
      "required": "Optional",
      "text": "Text displayed as label if ActionSet is in dropdown style."
    }
  ]
}
```
