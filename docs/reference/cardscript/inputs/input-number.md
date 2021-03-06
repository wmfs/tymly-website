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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-number.svg')" alt="Relevant Cardscript icon">Input.Number

::: tip Cardscript
Allows a user to enter a number.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "number",
      "type": "Input.Number",
      "placeholder": "Input.Number",
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

Must be `"Input.Number"`.

* **Type:** `string`
* **Values:**
  * `Input.Number`

## Optional properties

### `max`

Hint of maximum value (may be ignored by some clients).

* **Type:** `number`

----

### `min`

Hint of minimum value (may be ignored by some clients).

* **Type:** `number`

----

### `placeholder`

Description of the input desired. Displayed when no selection has been made.

* **Type:** `string`

----

### `value`

Initial value for this field.

* **Type:** `number`

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
  "type": "Input.Number",
  "description": "Allows a user to enter a number.",
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
      "type": "number",
      "description": "Hint of maximum value (may be ignored by some clients)."
    },
    "min": {
      "type": "number",
      "description": "Hint of minimum value (may be ignored by some clients)."
    },
    "placeholder": {
      "type": "string",
      "description": "Description of the input desired. Displayed when no selection has been made."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"Input.Number\"`.",
      "enum": [
        "Input.Number"
      ]
    },
    "value": {
      "type": "number",
      "description": "Initial value for this field."
    }
  },
  "required": [
    "type",
    "id"
  ],
  "typeSafe": "input-number",
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
      "type": "number",
      "required": "Optional",
      "text": "Hint of maximum value (may be ignored by some clients)."
    },
    {
      "name": "min",
      "type": "number",
      "required": "Optional",
      "text": "Hint of minimum value (may be ignored by some clients)."
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
      "text": "Must be `\"Input.Number\"`."
    },
    {
      "name": "value",
      "type": "number",
      "required": "Optional",
      "text": "Initial value for this field."
    }
  ]
}
```
