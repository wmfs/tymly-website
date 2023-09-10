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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-signature.svg')" alt="Relevant Cardscript icon">Input.Signature

::: tip Cardscript
Lets a user enter a signature.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "inputSignature",
      "type": "Input.Signature",
      "agreement": "I agree that...",
      "saveText": "Send",
      "guidance": "Please enter your signature below..."
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

Must be `"Input.Signature"`.

* **Type:** `string`
* **Values:**
  * `Input.Signature`

## Optional properties

### `agreement`

Agreement text to be displayed above the signature pad.

* **Type:** `string`

----

### `saveText`

Customise the text of the save button.

* **Type:** `string`

----

### `guidance`

Guidance text to be displayed with the signature button.

* **Type:** `string`

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
  "type": "Input.Signature",
  "description": "Lets a user enter a signature.",
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
    "type": {
      "type": "string",
      "description": "Must be `\"Input.Signature\"`.",
      "enum": [
        "Input.Signature"
      ]
    },
    "agreement": {
      "type": "string",
      "description": "Agreement text to be displayed above the signature pad."
    },
    "saveText": {
      "type": "string",
      "description": "Customise the text of the save button."
    },
    "guidance": {
      "type": "string",
      "description": "Guidance text to be displayed with the signature button."
    }
  },
  "required": [
    "type",
    "id"
  ],
  "typeSafe": "input-signature",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Input.Signature\"`."
    },
    {
      "name": "agreement",
      "type": "string",
      "required": "Optional",
      "text": "Agreement text to be displayed above the signature pad."
    },
    {
      "name": "saveText",
      "type": "string",
      "required": "Optional",
      "text": "Customise the text of the save button."
    },
    {
      "name": "guidance",
      "type": "string",
      "required": "Optional",
      "text": "Guidance text to be displayed with the signature button."
    }
  ]
}
```
