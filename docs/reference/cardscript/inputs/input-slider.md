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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-slider.svg')" alt="Relevant Cardscript icon">Input.Slider

::: tip Cardscript
Lets a user enter value with a slider.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Container",
      "id": "inputSlider",
      "title": "Input.Slider",
      "items": [
        {
          "type": "TextBlock",
          "text": "Input.Slider",
          "size": "large",
          "spacing": "large",
          "separator": true
        },
        {
          "id": "slider",
          "type": "Input.Slider",
          "spacing": "medium",
          "min": -20,
          "max": 20,
          "step": 4,
          "value": 3
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

Must be `"Input.Slider"`.

* **Type:** `string`
* **Values:**
  * `Input.Slider`

## Optional properties

### `min`

Minimum value of the model.

* **Type:** `number`
* **Default:** `1`

----

### `max`

Maximum value of the model.

* **Type:** `number`
* **Default:** `5`

----

### `step`

Step amount between values.

* **Type:** `number`

----

### `value`

The initial value for this field.

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
  "type": "Input.Slider",
  "description": "Lets a user enter value with a slider.",
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
      "description": "Must be `\"Input.Slider\"`.",
      "enum": [
        "Input.Slider"
      ]
    },
    "min": {
      "type": "number",
      "description": "Minimum value of the model.",
      "default": 1
    },
    "max": {
      "type": "number",
      "description": "Maximum value of the model.",
      "default": 5
    },
    "step": {
      "type": "number",
      "description": "Step amount between values."
    },
    "value": {
      "type": "string",
      "description": "The initial value for this field."
    }
  },
  "required": [
    "id",
    "type"
  ],
  "typeSafe": "input-slider",
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
      "text": "Must be `\"Input.Slider\"`."
    },
    {
      "name": "min",
      "type": "number",
      "required": "Optional",
      "text": "Minimum value of the model."
    },
    {
      "name": "max",
      "type": "number",
      "required": "Optional",
      "text": "Maximum value of the model."
    },
    {
      "name": "step",
      "type": "number",
      "required": "Optional",
      "text": "Step amount between values."
    },
    {
      "name": "value",
      "type": "string",
      "required": "Optional",
      "text": "The initial value for this field."
    }
  ]
}
```
