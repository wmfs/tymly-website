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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-api-lookup.svg')" alt="Relevant Cardscript icon">Input.ApiLookup

::: tip Cardscript
Lets a user look up a value via an API.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "inputApiLookup",
      "type": "Input.ApiLookup",
      "selectionType": "none",
      "endpoint": {
        "name": "tymly_search_1_0"
      },
      "parametersCard": {
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
          {
            "id": "searchQuery",
            "type": "Input.Text"
          },
          {
            "id": "sortBy",
            "type": "Input.ChoiceSet",
            "value": "MOST_RECENT",
            "choices": [
              {
                "value": "MOST_RECENT",
                "title": "Most recent"
              },
              {
                "value": "LEAST_RECENT",
                "title": "Least recent"
              }
            ]
          }
        ]
      }
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

Must be `"Input.ApiLookup"`.

* **Type:** `string`
* **Values:**
  * `Input.ApiLookup`

----

### `endpoint`

The endpoint to gather results from.

* **Type:** `object`

----

### `ctxPaths`

Specify paths to data.

* **Type:** `object`

## Optional properties

### `showPagination`

Whether or not to show pagination for the results.

* **Type:** `boolean`

----

### `resultsPerPage`

Amount of results to show per page.

* **Type:** `integer`
* **Default:** `15`

----

### `buttonText`

Text to display for the button to launch the api lookup.

* **Type:** `string`
* **Default:** `"Go"`

----

### `parametersCard`

Root element in an Adaptive Card.

* **Type:** `object`

----

### `resultsCard`

Root element in an Adaptive Card.

* **Type:** `object`

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
  "type": "Input.ApiLookup",
  "description": "Lets a user look up a value via an API.",
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
      "description": "Must be `\"Input.ApiLookup\"`.",
      "enum": [
        "Input.ApiLookup"
      ]
    },
    "showPagination": {
      "type": "boolean",
      "description": "Whether or not to show pagination for the results",
      "default": false
    },
    "resultsPerPage": {
      "type": "integer",
      "description": "Amount of results to show per page",
      "default": 15
    },
    "buttonText": {
      "type": "string",
      "description": "Text to display for the button to launch the api lookup",
      "default": "Go"
    },
    "endpoint": {
      "type": "object",
      "description": "The endpoint to gather results from.",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of the endpoint"
        }
      },
      "required": [
        "name"
      ]
    },
    "ctxPaths": {
      "type": "object",
      "description": "Specify paths to data",
      "properties": {
        "results": {
          "type": "string",
          "description": "Path to the results of the api lookup"
        },
        "totalHits": {
          "type": "string",
          "description": "Path to the value of the total hits from the results of the api lookup"
        }
      },
      "required": [
        "results",
        "totalHits"
      ]
    },
    "parametersCard": {
      "$ref": "#/definitions/AdaptiveCard"
    },
    "resultsCard": {
      "$ref": "#/definitions/AdaptiveCard"
    }
  },
  "required": [
    "type",
    "id",
    "endpoint",
    "ctxPaths"
  ],
  "typeSafe": "input-api-lookup",
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
      "text": "Must be `\"Input.ApiLookup\"`."
    },
    {
      "name": "showPagination",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether or not to show pagination for the results"
    },
    {
      "name": "resultsPerPage",
      "type": "integer",
      "required": "Optional",
      "text": "Amount of results to show per page"
    },
    {
      "name": "buttonText",
      "type": "string",
      "required": "Optional",
      "text": "Text to display for the button to launch the api lookup"
    },
    {
      "name": "endpoint",
      "type": "object",
      "required": "Required",
      "text": "The endpoint to gather results from."
    },
    {
      "name": "ctxPaths",
      "type": "object",
      "required": "Required",
      "text": "Specify paths to data"
    },
    {
      "name": "parametersCard",
      "required": "Optional"
    },
    {
      "name": "resultsCard",
      "required": "Optional"
    }
  ]
}
```
