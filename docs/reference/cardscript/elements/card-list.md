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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/card-list.svg')" alt="Relevant Cardscript icon">CardList

::: tip Cardscript
A container which opens a modal when clicked on to show a card.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Container",
      "id": "cardList",
      "title": "CardList",
      "items": [
        {
          "type": "TextBlock",
          "text": "editable: true",
          "size": "small",
          "spacing": "medium"
        },
        {
          "id": "cardList",
          "type": "CardList",
          "editable": true,
          "instanceTitleTemplate": "You thought: '{{item.opinion}}'.",
          "addButtonLabel": "Click me!",
          "card": {
            "type": "AdaptiveCard",
            "body": [
              {
                "type": "TextBlock",
                "text": "What do you think?"
              },
              {
                "id": "opinion",
                "type": "Input.Text",
                "spacing": "large",
                "value": "Amazing!"
              }
            ]
          }
        }
      ]
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

Must be `"CardList"`.

* **Type:** `string`
* **Values:**
  * `CardList`

----

### `card`

Root element in an Adaptive Card.

* **Type:** `object`

## Optional properties

### `addButtonLabel`

Text to be displayed as label of button.

* **Type:** `string`

----

### `instanceTitleTemplate`

A handlebars-like template for conjuring a title per instance.

* **Type:** `string`

----

### `instanceSubtitleTemplate`

A handlebars-like template for conjuring a subtitle per instance.

* **Type:** `string`



<hr>

## JSON Schema

``` json
{
  "additionalProperties": true,
  "type": "CardList",
  "description": "A container which opens a modal when clicked on to show a card.",
  "properties": {
    "id": {
      "type": "string",
      "description": "A unique identifier associated with the element."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"CardList\"`.",
      "enum": [
        "CardList"
      ]
    },
    "addButtonLabel": {
      "type": "string",
      "description": "Text to be displayed as label of button."
    },
    "card": {
      "$ref": "#/definitions/AdaptiveCard"
    },
    "instanceTitleTemplate": {
      "type": "string",
      "description": "A handlebars-like template for conjuring a title per instance."
    },
    "instanceSubtitleTemplate": {
      "type": "string",
      "description": "A handlebars-like template for conjuring a subtitle per instance."
    }
  },
  "required": [
    "id",
    "type",
    "title",
    "card"
  ],
  "typeSafe": "card-list",
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
      "text": "Must be `\"CardList\"`."
    },
    {
      "name": "addButtonLabel",
      "type": "string",
      "required": "Optional",
      "text": "Text to be displayed as label of button."
    },
    {
      "name": "card",
      "required": "Required"
    },
    {
      "name": "instanceTitleTemplate",
      "type": "string",
      "required": "Optional",
      "text": "A handlebars-like template for conjuring a title per instance."
    },
    {
      "name": "instanceSubtitleTemplate",
      "type": "string",
      "required": "Optional",
      "text": "A handlebars-like template for conjuring a subtitle per instance."
    }
  ]
}
```
