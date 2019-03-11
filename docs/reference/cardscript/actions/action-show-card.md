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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/action-show-card.svg')" alt="Relevant Cardscript icon">Action.ShowCard

::: tip Cardscript
Defines an AdaptiveCard which is shown to the user when the button or link is clicked.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [],
  "actions": [
    {
      "type": "Action.ShowCard",
      "title": "Action.ShowCard",
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
            "default": "Amazing!"
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

Must be `"Action.ShowCard"`.

* **Type:** `string`

----

### `card`

* **Type:** `undefined`

## Optional properties

### `title`

Label for button or link that represents this action.

* **Type:** `string`

----

### `iconUrl`

Optional icon to be shown on the action in conjunction with the title.

* **Type:** `string`
* **Format:** [`uri`](https://json-schema.org/understanding-json-schema/reference/string.html#format)



<pre>
{
  "type": "Action.ShowCard",
  "additionalProperties": true,
  "description": "Defines an AdaptiveCard which is shown to the user when the button or link is clicked.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Action.ShowCard\"`."
    },
    "title": {
      "type": "string",
      "description": "Label for button or link that represents this action."
    },
    "iconUrl": {
      "type": "string",
      "format": "uri",
      "description": "Optional icon to be shown on the action in conjunction with the title",
      "version": "1.1"
    },
    "card": {
      "$ref": "#/definitions/AdaptiveCard"
    }
  },
  "required": [
    "type",
    "card"
  ],
  "typeSafe": "action-show-card",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Action.ShowCard\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Optional",
      "text": "Label for button or link that represents this action."
    },
    {
      "name": "iconUrl",
      "type": "string",
      "required": "Optional",
      "text": "Optional icon to be shown on the action in conjunction with the title"
    },
    {
      "name": "card",
      "required": "Required"
    }
  ]
}
</pre>

