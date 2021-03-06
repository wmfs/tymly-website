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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-gender.svg')" alt="Relevant Cardscript icon">Input.Gender

::: tip Cardscript
Lets a user enter a gender.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "inputGender",
      "type": "Input.Gender",
      "preferNotToSay": true,
      "preferToSelfDescribe": true,
      "includeTransgender": true
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

Must be `"Input.Gender"`.

* **Type:** `string`
* **Values:**
  * `Input.Gender`

## Optional properties

### `term`

Whether the gender or sex should be asked.

* **Type:** `string`
* **Default:** `"gender"`
* **Values:**
  * `sex`
  * `gender`

----

### `preferNotToSay`

Includes Prefer not to say gender in list.

* **Type:** `boolean`

----

### `preferToSelfDescribe`

Includes Prefer not to self describe gender in list.

* **Type:** `boolean`

----

### `includeTransgender`

Includes transgender in list.

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
  "type": "Input.Gender",
  "description": "Lets a user enter a gender.",
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
      "description": "Must be `\"Input.Gender\"`.",
      "enum": [
        "Input.Gender"
      ]
    },
    "term": {
      "type": "string",
      "description": "Whether the gender or sex should be asked.",
      "enum": [
        "sex",
        "gender"
      ],
      "default": "gender"
    },
    "preferNotToSay": {
      "type": "boolean",
      "description": "Includes Prefer not to say gender in list.",
      "default": false
    },
    "preferToSelfDescribe": {
      "type": "boolean",
      "description": "Includes Prefer not to self describe gender in list.",
      "default": false
    },
    "includeTransgender": {
      "type": "boolean",
      "description": "Includes transgender in list.",
      "default": false
    }
  },
  "required": [
    "type",
    "id"
  ],
  "typeSafe": "input-gender",
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
      "text": "Must be `\"Input.Gender\"`."
    },
    {
      "name": "term",
      "type": "string",
      "required": "Optional",
      "text": "Whether the gender or sex should be asked."
    },
    {
      "name": "preferNotToSay",
      "type": "boolean",
      "required": "Optional",
      "text": "Includes Prefer not to say gender in list."
    },
    {
      "name": "preferToSelfDescribe",
      "type": "boolean",
      "required": "Optional",
      "text": "Includes Prefer not to self describe gender in list."
    },
    {
      "name": "includeTransgender",
      "type": "boolean",
      "required": "Optional",
      "text": "Includes transgender in list."
    }
  ]
}
```
