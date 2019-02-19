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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/adaptive-card.svg')" alt="Relevant Cardscript icon">AdaptiveCard

::: tip Cardscript Element
Root element in an Adaptive Card.
:::

## Example

``` json
"FIXME!"
```

## Required properties

### `type`

Must be `"AdaptiveCard"`.

* **Type:** `string`
* **Values:**
  * `AdaptiveCard`

## Optional properties

### `actions`

The Actions to show in the card's action bar.

* **Type:** `undefined`

----

### `body`

The card elements to show in the primary card region.

* **Type:** `undefined`

----

### `selectAction`

An Action that will be invoked when the card is tapped or selected. `Action.ShowCard` is not supported.

* **Type:** `object`



<pre>
{
  "additionalProperties": true,
  "type": "AdaptiveCard",
  "description": "Root element in an Adaptive Card.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"AdaptiveCard\"`.",
      "enum": [
        "AdaptiveCard"
      ]
    },
    "actions": {
      "description": "The Actions to show in the card's action bar.",
      "$ref": "#/definitions/Actions"
    },
    "body": {
      "description": "The card elements to show in the primary card region.",
      "$ref": "#/definitions/CardElements"
    },
    "selectAction": {
      "description": "An Action that will be invoked when the card is tapped or selected. `Action.ShowCard` is not supported.",
      "type": "object",
      "oneOf": [
        {
          "$ref": "#/definitions/Action.Submit"
        },
        {
          "$ref": "#/definitions/Action.OpenUrl"
        }
      ]
    }
  },
  "required": [
    "type"
  ],
  "typeSafe": "adaptive-card",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"AdaptiveCard\"`."
    },
    {
      "name": "actions",
      "required": "Optional",
      "text": "The Actions to show in the card's action bar."
    },
    {
      "name": "body",
      "required": "Optional",
      "text": "The card elements to show in the primary card region."
    },
    {
      "name": "selectAction",
      "type": "object",
      "required": "Optional",
      "text": "An Action that will be invoked when the card is tapped or selected. `Action.ShowCard` is not supported."
    }
  ]
}
</pre>

