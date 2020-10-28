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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/tab.svg')" alt="Relevant Cardscript icon">Tab

::: tip Cardscript
Defines a container that is part of a TabSet.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "id": "tabSet",
      "type": "TabSet",
      "spacing": "large",
      "tabs": [
        {
          "type": "Tab",
          "title": "Tab 1",
          "items": [
            {
              "type": "TextBlock",
              "text": "Tab 1 Content"
            }
          ]
        },
        {
          "type": "Tab",
          "title": "Tab 2",
          "items": [
            {
              "type": "TextBlock",
              "text": "Tab 2 Content"
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

### `type`

Must be `"Tab"`.

* **Type:** `string`
* **Values:**
  * `Tab`

----

### `items`

* **Type:** `array`

----

### `title`

The title of the `Tab`.

* **Type:** `string`

## Optional properties

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
  "type": "Tab",
  "description": "Defines a container that is part of a TabSet.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Tab\"`.",
      "enum": [
        "Tab"
      ]
    },
    "items": {
      "description": "The card elements to include in the `Tab`.",
      "$ref": "#/definitions/CardElements"
    },
    "title": {
      "type": "string",
      "description": "The title of the `Tab`."
    }
  },
  "required": [
    "items",
    "title"
  ],
  "typeSafe": "tab",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Optional",
      "text": "Must be `\"Tab\"`."
    },
    {
      "name": "items",
      "required": "Required",
      "text": "The card elements to include in the `Tab`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Required",
      "text": "The title of the `Tab`."
    }
  ]
}
```
