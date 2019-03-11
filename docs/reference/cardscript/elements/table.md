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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/table.svg')" alt="Relevant Cardscript icon">Table

::: tip Cardscript
Displays text, allowing control over font sizes, weight, and color.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "table",
      "type": "Table",
      "title": "This is a table",
      "arrayPath": "cardList",
      "columns": [
        {
          "title": "Title",
          "field": "field"
        }
      ],
      "resultLimit": 5
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `id`

A unique identifier associated with the element.

* **Type:** `string`

----

### `type`

Must be `"Table"`.

* **Type:** `string`
* **Values:**
  * `Table`

----

### `arrayPath`

Points to the array of data to be displayed.

* **Type:** `string`

----

### `columns`

* **Type:** `array`

## Optional properties

### `title`

Title displayed for the `Table`.

* **Type:** `string`

----

### `resultLimit`

Limit the results per page.

* **Type:** `integer`
* **Default:** `10`

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
  "type": "Table",
  "description": "Displays text, allowing control over font sizes, weight, and color.",
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
      "description": "Must be `\"Table\"`.",
      "enum": [
        "Table"
      ]
    },
    "title": {
      "type": "string",
      "description": "Title displayed for the `Table`."
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
          "field": {
            "type": "string",
            "description": "Points to the data to be displayed in the column."
          }
        },
        "required": [
          "title",
          "field"
        ]
      }
    },
    "resultLimit": {
      "type": "integer",
      "description": "Limit the results per page.",
      "default": 10
    }
  },
  "required": [
    "id",
    "type",
    "arrayPath",
    "columns"
  ],
  "typeSafe": "table",
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
      "text": "Must be `\"Table\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Optional",
      "text": "Title displayed for the `Table`."
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
      "name": "resultLimit",
      "type": "integer",
      "required": "Optional",
      "text": "Limit the results per page."
    }
  ]
}
</pre>

