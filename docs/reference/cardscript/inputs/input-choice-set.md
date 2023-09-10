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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-choice-set.svg')" alt="Relevant Cardscript icon">Input.ChoiceSet

::: tip Cardscript
Allows a user to input a Choice.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Input.ChoiceSet",
      "id": "choice",
      "spacing": "medium",
      "value": "CHOICE_1",
      "choices": [
        {
          "title": "Choice 1",
          "value": "CHOICE_1"
        },
        {
          "title": "Choice 2",
          "value": "CHOICE_2"
        },
        {
          "title": "Choice 3",
          "value": "CHOICE_3"
        }
      ],
      "style": "expanded"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `choices`

`Choice` options.

* **Type:** `array`

----

### `id`

Unique identifier for the value. Used to identify collected input when the Submit action is performed.

* **Type:** `string`

----

### `type`

Must be `"Input.ChoiceInput"`.

* **Type:** `string`
* **Values:**
  * `Input.ChoiceSet`

## Optional properties

### `isMultiSelect`

Allow multiple choices to be selected.

* **Type:** `boolean`

----

### `style`

Style hint for `Input.ChoiceSet`.

* **Type:** `string`
* **Default:** `"compact"`
* **Values:**
  * `compact`
  * `expanded`

----

### `value`

The initial choice (or set of choices) that should be selected. For multi-select, specify a comma-separated string of values.

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

----

### `icon`

Name of an icon to display alongside this element.

* **Type:** `string`

----

### `title`

Strong text to clearly identify the intent of the element.

* **Type:** `string`



<hr>

## JSON Schema

``` json
{
  "additionalProperties": true,
  "type": "Input.ChoiceSet",
  "description": "Allows a user to input a Choice.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    },
    {
      "$ref": "#/definitions/CardscriptField"
    }
  ],
  "properties": {
    "choices": {
      "type": "array",
      "description": "`Choice` options.",
      "items": {
        "$ref": "#/definitions/Input.Choice"
      }
    },
    "id": {
      "type": "string",
      "description": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    "isMultiSelect": {
      "type": "boolean",
      "description": "Allow multiple choices to be selected.",
      "default": false
    },
    "style": {
      "$ref": "#/definitions/ChoiceInputStyle"
    },
    "type": {
      "description": "Must be `\"Input.ChoiceInput\"`.",
      "enum": [
        "Input.ChoiceSet"
      ],
      "type": "string"
    },
    "value": {
      "type": "string",
      "description": "The initial choice (or set of choices) that should be selected. For multi-select, specify a comma-separated string of values."
    }
  },
  "required": [
    "type",
    "id",
    "choices"
  ],
  "typeSafe": "input-choice-set",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "choices",
      "type": "array",
      "required": "Required",
      "text": "`Choice` options."
    },
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    {
      "name": "isMultiSelect",
      "type": "boolean",
      "required": "Optional",
      "text": "Allow multiple choices to be selected."
    },
    {
      "name": "style",
      "required": "Optional"
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Input.ChoiceInput\"`."
    },
    {
      "name": "value",
      "type": "string",
      "required": "Optional",
      "text": "The initial choice (or set of choices) that should be selected. For multi-select, specify a comma-separated string of values."
    }
  ]
}
```
