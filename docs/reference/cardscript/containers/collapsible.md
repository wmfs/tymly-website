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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/collapsible.svg')" alt="Relevant Cardscript icon">Collapsible

::: tip Cardscript
A container which expands when clicked on to show a card.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Collapsible",
      "title": "Click me!",
      "card": {
        "type": "AdaptiveCard",
        "body": [
          {
            "type": "TextBlock",
            "text": "Hello!"
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

### `type`

Must be `"Collapsible"`.

* **Type:** `string`
* **Values:**
  * `Collapsible`

----

### `title`

Text to be displayed as label.

* **Type:** `string`

----

### `card`

* **Type:** `undefined`



<pre>
{
  "additionalProperties": true,
  "type": "Collapsible",
  "description": "A container which expands when clicked on to show a card.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Collapsible\"`.",
      "enum": [
        "Collapsible"
      ]
    },
    "title": {
      "type": "string",
      "description": "Text to be displayed as label."
    },
    "card": {
      "$ref": "#/definitions/AdaptiveCard"
    }
  },
  "required": [
    "type",
    "title",
    "card"
  ],
  "typeSafe": "collapsible",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Collapsible\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Required",
      "text": "Text to be displayed as label."
    },
    {
      "name": "card",
      "required": "Required"
    }
  ]
}
</pre>

