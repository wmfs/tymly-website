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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/address-block.svg')" alt="Relevant Cardscript icon">AddressBlock

::: tip Cardscript
Displays an address.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "AddressBlock",
      "dataPath": "addressBlock"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `type`

Must be `"AddressBlock"`.

* **Type:** `string`
* **Values:**
  * `AddressBlock`

----

### `dataPath`

Points to the holding the address.

* **Type:** `string`

## Optional properties

### `title`

Title of the AddressBlock.

* **Type:** `string`
* **Default:** `"Address"`

----

### `multiline`

Wether the address in multiple lines.

* **Type:** `boolean`
* **Default:** `true`

----

### `lineDelimited`

The string of character(s) which the address is delimited by.

* **Type:** `string`
* **Default:** `","`

----

### `id`

A unique identifier associated with the element.

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
  "type": "AddressBlock",
  "description": "Displays an address.",
  "version": "1.1",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"AddressBlock\"`.",
      "enum": [
        "AddressBlock"
      ]
    },
    "title": {
      "type": "string",
      "description": "Title of the AddressBlock.",
      "default": "Address"
    },
    "dataPath": {
      "type": "string",
      "description": "Points to the holding the address."
    },
    "multiline": {
      "type": "boolean",
      "default": true,
      "description": "Wether the address in multiple lines."
    },
    "lineDelimited": {
      "type": "string",
      "default": ",",
      "description": "The string of character(s) which the address is delimited by."
    }
  },
  "required": [
    "type",
    "dataPath"
  ],
  "typeSafe": "address-block",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"AddressBlock\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Optional",
      "text": "Title of the AddressBlock."
    },
    {
      "name": "dataPath",
      "type": "string",
      "required": "Required",
      "text": "Points to the holding the address."
    },
    {
      "name": "multiline",
      "type": "boolean",
      "required": "Optional",
      "text": "Wether the address in multiple lines."
    },
    {
      "name": "lineDelimited",
      "type": "string",
      "required": "Optional",
      "text": "The string of character(s) which the address is delimited by."
    }
  ]
}
```
