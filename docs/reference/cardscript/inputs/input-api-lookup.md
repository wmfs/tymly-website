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

## Optional properties

### `selectionType`

Whether the use can select a value.

* **Type:** `string`
* **Values:**
  * `none`
  * `single`
  * `multi`

----

### `endpoint`

The endpoint to gather results from.

* **Type:** `object`

----

### `parametersCard`

* **Type:** `undefined`

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
    "selectionType": {
      "type": "string",
      "description": "Whether the use can select a value.",
      "enum": [
        "none",
        "single",
        "multi"
      ]
    },
    "endpoint": {
      "type": "object",
      "description": "The endpoint to gather results from.",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of the endpoint"
        }
      }
    },
    "parametersCard": {
      "$ref": "#/definitions/AdaptiveCard"
    }
  },
  "required": [
    "type",
    "id"
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
      "name": "selectionType",
      "type": "string",
      "required": "Optional",
      "text": "Whether the use can select a value."
    },
    {
      "name": "endpoint",
      "type": "object",
      "required": "Optional",
      "text": "The endpoint to gather results from."
    },
    {
      "name": "parametersCard",
      "required": "Optional"
    }
  ]
}
</pre>

