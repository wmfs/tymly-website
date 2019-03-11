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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/action-open-url.svg')" alt="Relevant Cardscript icon">Action.OpenUrl

::: tip Cardscript
When invoked, show the given url either by launching it in an external web browser or showing in-situ with embedded web browser.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [],
  "actions": [
    {
      "type": "Action.OpenUrl",
      "title": "Action.OpenUrl",
      "url": "https://github.com/wmfs/cardscript"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `type`

Must be `"Action.OpenUrl"`.

* **Type:** `string`

----

### `url`

The URL to open.

* **Type:** `string`
* **Format:** [`uri`](https://json-schema.org/understanding-json-schema/reference/string.html#format)

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
  "additionalProperties": true,
  "description": "When invoked, show the given url either by launching it in an external web browser or showing in-situ with embedded web browser.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Action.OpenUrl\"`."
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL to open."
    }
  },
  "required": [
    "type",
    "url"
  ],
  "type": "Action.OpenUrl",
  "typeSafe": "action-open-url",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Action.OpenUrl\"`."
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
      "name": "url",
      "type": "string",
      "required": "Required",
      "text": "The URL to open."
    }
  ]
}
</pre>

