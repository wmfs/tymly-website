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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-toggle.svg')" alt="Relevant Cardscript icon">Input.Toggle

::: tip Cardscript
Lets a user choose between two options.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "toggle",
      "type": "Input.Toggle",
      "spacing": "medium",
      "title": "Input.Toggle"
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

### `title`

Title for the toggle.

* **Type:** `string`

----

### `type`

Input.Toggle.

* **Type:** `string`
* **Values:**
  * `Input.Toggle`

## Optional properties

### `value`

The current selected value. If the item is selected that "valueOn" will be used, otherwise "valueOff".

* **Type:** `string`
* **Default:** `"false"`

----

### `valueOff`

The value when toggle is off.

* **Type:** `string`
* **Default:** `"false"`

----

### `valueOn`

The value when toggle is on.

* **Type:** `string`
* **Default:** `"true"`

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



<pre>
{
  "additionalProperties": true,
  "type": "Input.Toggle",
  "description": "Lets a user choose between two options.",
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
    "title": {
      "type": "string",
      "description": "Title for the toggle"
    },
    "type": {
      "type": "string",
      "description": "Input.Toggle",
      "enum": [
        "Input.Toggle"
      ]
    },
    "value": {
      "type": "string",
      "description": "The current selected value. If the item is selected that \"valueOn\" will be used, otherwise \"valueOff\"",
      "default": "false"
    },
    "valueOff": {
      "type": "string",
      "description": "The value when toggle is off",
      "default": "false"
    },
    "valueOn": {
      "type": "string",
      "description": "The value when toggle is on",
      "default": "true"
    }
  },
  "required": [
    "type",
    "id",
    "title"
  ],
  "typeSafe": "input-toggle",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Required",
      "text": "Title for the toggle"
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Input.Toggle"
    },
    {
      "name": "value",
      "type": "string",
      "required": "Optional",
      "text": "The current selected value. If the item is selected that \"valueOn\" will be used, otherwise \"valueOff\""
    },
    {
      "name": "valueOff",
      "type": "string",
      "required": "Optional",
      "text": "The value when toggle is off"
    },
    {
      "name": "valueOn",
      "type": "string",
      "required": "Optional",
      "text": "The value when toggle is on"
    }
  ]
}
</pre>

