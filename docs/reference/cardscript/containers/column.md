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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/column.svg')" alt="Relevant Cardscript icon">Column

::: tip Cardscript
Defines a container that is part of a ColumnSet.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "items": [
            {
              "type": "TextBlock",
              "text": "col-1"
            },
            {
              "type": "TextBlock",
              "text": "col-1"
            }
          ]
        },
        {
          "type": "Column",
          "items": [
            {
              "type": "TextBlock",
              "text": "col-2"
            }
          ]
        }
      ]
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `items`

* **Type:** `array`

----

### `type`

Must be `"Column"`.

* **Type:** `string`
* **Values:**
  * `Column`

## Optional properties

### `selectAction`

An Action that will be invoked when the `Column` is tapped or selected. `Action.ShowCard` is not supported.

* **Type:** `object`

----

### `style`

Style hint for `Column`.

* **Type:** `string`
* **Values:**
  * `default`
  * `emphasis`

----

### `width`

`"auto"`, `"stretch"`, or a number representing relative width of the column in the column group.

* **Type:** `string,number`

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
  "type": "Column",
  "description": "Defines a container that is part of a ColumnSet.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "items": {
      "description": "The card elements to include in the `Column`.",
      "$ref": "#/definitions/CardElements"
    },
    "selectAction": {
      "description": "An Action that will be invoked when the `Column` is tapped or selected. `Action.ShowCard` is not supported.",
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
      "description": "Style hint for `Column`.",
      "enum": [
        "default",
        "emphasis"
      ]
    },
    "width": {
      "type": [
        "string",
        "number"
      ],
      "description": "`\"auto\"`, `\"stretch\"`, or a number representing relative width of the column in the column group."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"Column\"`.",
      "enum": [
        "Column"
      ]
    }
  },
  "required": [
    "items"
  ],
  "typeSafe": "column",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "items",
      "required": "Required",
      "text": "The card elements to include in the `Column`."
    },
    {
      "name": "selectAction",
      "type": "object",
      "required": "Optional",
      "text": "An Action that will be invoked when the `Column` is tapped or selected. `Action.ShowCard` is not supported."
    },
    {
      "name": "style",
      "type": "string",
      "required": "Optional",
      "text": "Style hint for `Column`."
    },
    {
      "name": "width",
      "type": [
        "string",
        "number"
      ],
      "required": "Optional",
      "text": "`\"auto\"`, `\"stretch\"`, or a number representing relative width of the column in the column group."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Optional",
      "text": "Must be `\"Column\"`."
    }
  ]
}
```
