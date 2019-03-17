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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/container.svg')" alt="Relevant Cardscript icon">Container

::: tip Cardscript
Containers group items together.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Container",
      "color": "accent",
      "spacing": "large",
      "items": [
        {
          "type": "TextBlock",
          "text": "Accent!"
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

Must be `"Container"`.

* **Type:** `string`
* **Values:**
  * `Container`

----

### `items`

* **Type:** `array`

## Optional properties

### `color`

Controls the color of the Container.

* **Type:** `string`
* **Values:**
  * `default`
  * `dark`
  * `light`
  * `accent`
  * `good`
  * `warning`
  * `attention`

----

### `selectAction`

An Action that will be invoked when the `Container` is tapped or selected. `Action.ShowCard` is not supported.

* **Type:** `object`

----

### `style`

Style hint for `Container`.

* **Type:** `string`
* **Values:**
  * `default`
  * `emphasis`

----

### `verticalContentAlignment`

Defines how the content should be aligned vertically within the container.

* **Type:** `string`
* **Default:** `"top"`

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
  "type": "Container",
  "description": "Containers group items together.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Container\"`.",
      "enum": [
        "Container"
      ]
    },
    "color": {
      "type": "string",
      "description": "Controls the color of the Container.",
      "enum": [
        "default",
        "dark",
        "light",
        "accent",
        "good",
        "warning",
        "attention"
      ]
    },
    "items": {
      "description": "The card elements to render inside the `Container`.",
      "$ref": "#/definitions/CardElements"
    },
    "selectAction": {
      "description": "An Action that will be invoked when the `Container` is tapped or selected. `Action.ShowCard` is not supported.",
      "type": "object",
      "oneOf": [
        {
          "$ref": "#/definitions/Action.Submit"
        },
        {
          "$ref": "#/definitions/Action.OpenUrl"
        }
      ]
    },
    "style": {
      "type": "string",
      "description": "Style hint for `Container`.",
      "enum": [
        "default",
        "emphasis"
      ]
    },
    "verticalContentAlignment": {
      "type": "string",
      "description": "Defines how the content should be aligned vertically within the container.",
      "default": "top",
      "enum:": [
        "top",
        "center",
        "bottom"
      ],
      "version": "1.1"
    }
  },
  "required": [
    "type",
    "items"
  ],
  "typeSafe": "container",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Container\"`."
    },
    {
      "name": "color",
      "type": "string",
      "required": "Optional",
      "text": "Controls the color of the Container."
    },
    {
      "name": "items",
      "required": "Required",
      "text": "The card elements to render inside the `Container`."
    },
    {
      "name": "selectAction",
      "type": "object",
      "required": "Optional",
      "text": "An Action that will be invoked when the `Container` is tapped or selected. `Action.ShowCard` is not supported."
    },
    {
      "name": "style",
      "type": "string",
      "required": "Optional",
      "text": "Style hint for `Container`."
    },
    {
      "name": "verticalContentAlignment",
      "type": "string",
      "required": "Optional",
      "text": "Defines how the content should be aligned vertically within the container."
    }
  ]
}
```
