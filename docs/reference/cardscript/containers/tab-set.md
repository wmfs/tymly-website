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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/tab-set.svg')" alt="Relevant Cardscript icon">TabSet

::: tip Cardscript
TabSet allows to display content through various tabs.
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

Must be `"TabSet"`.

* **Type:** `string`
* **Values:**
  * `TabSet`

----

### `id`

A unique identifier associated with the element.

* **Type:** `string`

## Optional properties

### `tabs`

The array of `Tabs` to divide content.

* **Type:** `array`

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
  "type": "TabSet",
  "description": "TabSet allows to display content through various tabs.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"TabSet\"`.",
      "enum": [
        "TabSet"
      ]
    },
    "id": {
      "type": "string",
      "description": "A unique identifier associated with the element."
    },
    "tabs": {
      "type": "array",
      "description": "The array of `Tabs` to divide content.",
      "items": {
        "$ref": "#/definitions/Tab"
      }
    }
  },
  "required": [
    "id"
  ],
  "typeSafe": "tab-set",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Optional",
      "text": "Must be `\"TabSet\"`."
    },
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "A unique identifier associated with the element."
    },
    {
      "name": "tabs",
      "type": "array",
      "required": "Optional",
      "text": "The array of `Tabs` to divide content."
    }
  ]
}
```
