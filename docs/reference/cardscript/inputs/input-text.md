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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-text.svg')" alt="Relevant Cardscript icon">Input.Text

::: tip Cardscript
Lets a user enter text.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Container",
      "id": "inputText",
      "title": "Input.Text",
      "items": [
        {
          "type": "TextBlock",
          "text": "Basic Input.Text",
          "size": "large",
          "spacing": "large",
          "separator": true
        },
        {
          "id": "text",
          "type": "Input.Text",
          "placeholder": "Input.Text",
          "spacing": "medium"
        },
        {
          "type": "TextBlock",
          "text": "Full Input.Text Editor",
          "size": "large",
          "spacing": "large",
          "separator": true
        },
        {
          "id": "textEditor",
          "type": "Input.Text",
          "placeholder": "Input.Text",
          "spacing": "medium",
          "editor": true,
          "value": "editor: true"
        }
      ]
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

Must be `"Input.Text"`.

* **Type:** `string`
* **Values:**
  * `Input.Text`

## Optional properties

### `isMultiline`

If `true`, allow multiple lines of input.

* **Type:** `boolean`

----

### `maxLength`

Hint of maximum length characters to collect (may be ignored by some clients).

* **Type:** `number`

----

### `placeholder`

Description of the input desired. Displayed when no text has been input.

* **Type:** `string`

----

### `style`

Style hint for `Input.Text`.

* **Type:** `string`
* **Default:** `"text"`
* **Values:**
  * `text`
  * `tel`
  * `url`
  * `email`

----

### `value`

The initial value for this field.

* **Type:** `string`

----

### `editor`

Whether the field should be a WYSIWYG (“what you see is what you get”) editor, if false then plain text field.

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
  "type": "Input.Text",
  "description": "Lets a user enter text.",
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
    "isMultiline": {
      "type": "boolean",
      "description": "If `true`, allow multiple lines of input.",
      "default": false
    },
    "maxLength": {
      "type": "number",
      "description": "Hint of maximum length characters to collect (may be ignored by some clients)."
    },
    "placeholder": {
      "type": "string",
      "description": "Description of the input desired. Displayed when no text has been input."
    },
    "style": {
      "$ref": "#/definitions/TextInputStyle"
    },
    "type": {
      "type": "string",
      "description": "Must be `\"Input.Text\"`.",
      "enum": [
        "Input.Text"
      ]
    },
    "value": {
      "type": "string",
      "description": "The initial value for this field."
    },
    "editor": {
      "type": "boolean",
      "default": false,
      "description": "Whether the field should be a WYSIWYG (“what you see is what you get”) editor, if false then plain text field."
    }
  },
  "required": [
    "type",
    "id"
  ],
  "typeSafe": "input-text",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    {
      "name": "isMultiline",
      "type": "boolean",
      "required": "Optional",
      "text": "If `true`, allow multiple lines of input."
    },
    {
      "name": "maxLength",
      "type": "number",
      "required": "Optional",
      "text": "Hint of maximum length characters to collect (may be ignored by some clients)."
    },
    {
      "name": "placeholder",
      "type": "string",
      "required": "Optional",
      "text": "Description of the input desired. Displayed when no text has been input."
    },
    {
      "name": "style",
      "required": "Optional"
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Input.Text\"`."
    },
    {
      "name": "value",
      "type": "string",
      "required": "Optional",
      "text": "The initial value for this field."
    },
    {
      "name": "editor",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether the field should be a WYSIWYG (“what you see is what you get”) editor, if false then plain text field."
    }
  ]
}
```
