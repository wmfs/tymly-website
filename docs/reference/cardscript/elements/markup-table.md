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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/markup-table.svg')" alt="Relevant Cardscript icon">MarkupTable

::: tip Cardscript
Displays information in table format.
:::

## Example

``` json
"No example! :-("
```

## Required properties

### `id`

A unique identifier associated with the element.

* **Type:** `string`

----

### `type`

Must be `"MarkupTable"`.

* **Type:** `string`
* **Values:**
  * `MarkupTable`

----

### `arrayPath`

Points to the array of data to be displayed.

* **Type:** `string`

----

### `columns`

* **Type:** `array`

## Optional properties

### `title`

Title displayed for the `MarkupTable`.

* **Type:** `string`

----

### `showLaunches`

Whether or not to show a menu of actions.

* **Type:** `boolean`

----

### `orientation`

The orientation of the table layout (headers to go across or down).

* **Type:** `string`
* **Default:** `"horizontal"`
* **Values:**
  * `horizontal`
  * `vertical`

----

### `separator`

How the rows should be separated with borders.

* **Type:** `string`
* **Default:** `"horizontal"`
* **Values:**
  * `horizontal`
  * `vertical`
  * `cell`
  * `none`

----

### `fixedHeader`

Whether the header is fixed when scrolling.

* **Type:** `boolean`

----

### `selectionType`

Whether the use can select a value.

* **Type:** `string`
* **Default:** `"none"`
* **Values:**
  * `none`
  * `single`
  * `multi`

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



<hr>

## JSON Schema

``` json
{
  "additionalProperties": true,
  "type": "MarkupTable",
  "description": "Displays information in table format.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A unique identifier associated with the element."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"MarkupTable\"`.",
      "enum": [
        "MarkupTable"
      ]
    },
    "title": {
      "type": "string",
      "description": "Title displayed for the `MarkupTable`."
    },
    "arrayPath": {
      "type": "string",
      "description": "Points to the array of data to be displayed."
    },
    "columns": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "description": "Title displayed for the column."
          },
          "value": {
            "type": "string",
            "description": "Points to the data to be displayed in the column."
          }
        },
        "required": [
          "title",
          "value"
        ]
      }
    },
    "showLaunches": {
      "type": "boolean",
      "description": "Whether or not to show a menu of actions.",
      "default": false
    },
    "orientation": {
      "type": "string",
      "description": "The orientation of the table layout (headers to go across or down).",
      "enum": [
        "horizontal",
        "vertical"
      ],
      "default": "horizontal"
    },
    "separator": {
      "type": "string",
      "description": "How the rows should be separated with borders",
      "enum": [
        "horizontal",
        "vertical",
        "cell",
        "none"
      ],
      "default": "horizontal"
    },
    "fixedHeader": {
      "type": "boolean",
      "description": "Whether the header is fixed when scrolling",
      "default": false
    },
    "selectionType": {
      "type": "string",
      "description": "Whether the use can select a value.",
      "enum": [
        "none",
        "single",
        "multi"
      ],
      "default": "none"
    }
  },
  "required": [
    "id",
    "type",
    "arrayPath",
    "columns"
  ],
  "typeSafe": "markup-table",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "A unique identifier associated with the element."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"MarkupTable\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Optional",
      "text": "Title displayed for the `MarkupTable`."
    },
    {
      "name": "arrayPath",
      "type": "string",
      "required": "Required",
      "text": "Points to the array of data to be displayed."
    },
    {
      "name": "columns",
      "type": "array",
      "required": "Required"
    },
    {
      "name": "showLaunches",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether or not to show a menu of actions."
    },
    {
      "name": "orientation",
      "type": "string",
      "required": "Optional",
      "text": "The orientation of the table layout (headers to go across or down)."
    },
    {
      "name": "separator",
      "type": "string",
      "required": "Optional",
      "text": "How the rows should be separated with borders"
    },
    {
      "name": "fixedHeader",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether the header is fixed when scrolling"
    },
    {
      "name": "selectionType",
      "type": "string",
      "required": "Optional",
      "text": "Whether the use can select a value."
    }
  ]
}
```
