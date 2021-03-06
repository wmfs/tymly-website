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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-date.svg')" alt="Relevant Cardscript icon">Input.Date

::: tip Cardscript
Lets a user choose a date.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "date",
      "type": "Input.Date",
      "placeholder": "Input.Date",
      "spacing": "medium"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `id`

Unique identifier for the value. Used to identify collected input when the Submit action is performed.

* **Type:** `string`

----

### `type`

Must be `"Input.Date"`.

* **Type:** `string`
* **Values:**
  * `Input.Date`

## Optional properties

### `max`

Hint of maximum value expressed in ISO-8601 format (may be ignored by some clients).

* **Type:** `string`

----

### `min`

Hint of minimum value expressed in ISO-8601 format (may be ignored by some clients).

* **Type:** `string`

----

### `placeholder`

Description of the input desired. Displayed when no selection has been made.

* **Type:** `string`

----

### `value`

The initial value for this field expressed in ISO-8601 format.

* **Type:** `string`

----

### `clearable`

Whether the user can clear the data.

* **Type:** `boolean`

----

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

### `separator`

When `true`, draw a separating line at the top of the element.

* **Type:** `boolean`



<hr>

## JSON Schema

``` json
{
  "additionalProperties": true,
  "type": "Input.Date",
  "description": "Lets a user choose a date.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    "max": {
      "type": "string",
      "description": "Hint of maximum value expressed in ISO-8601 format (may be ignored by some clients)."
    },
    "min": {
      "type": "string",
      "description": "Hint of minimum value expressed in ISO-8601 format (may be ignored by some clients)."
    },
    "placeholder": {
      "type": "string",
      "description": "Description of the input desired. Displayed when no selection has been made."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"Input.Date\"`.",
      "enum": [
        "Input.Date"
      ]
    },
    "value": {
      "type": "string",
      "description": "The initial value for this field expressed in ISO-8601 format."
    },
    "clearable": {
      "type": "boolean",
      "description": "Whether the user can clear the data."
    }
  },
  "required": [
    "type",
    "id"
  ],
  "typeSafe": "input-date",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    {
      "name": "max",
      "type": "string",
      "required": "Optional",
      "text": "Hint of maximum value expressed in ISO-8601 format (may be ignored by some clients)."
    },
    {
      "name": "min",
      "type": "string",
      "required": "Optional",
      "text": "Hint of minimum value expressed in ISO-8601 format (may be ignored by some clients)."
    },
    {
      "name": "placeholder",
      "type": "string",
      "required": "Optional",
      "text": "Description of the input desired. Displayed when no selection has been made."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Input.Date\"`."
    },
    {
      "name": "value",
      "type": "string",
      "required": "Optional",
      "text": "The initial value for this field expressed in ISO-8601 format."
    },
    {
      "name": "clearable",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether the user can clear the data."
    }
  ]
}
```
