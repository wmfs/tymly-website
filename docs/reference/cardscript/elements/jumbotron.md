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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/jumbotron.svg')" alt="Relevant Cardscript icon">Jumbotron

::: tip Cardscript Element
An element typically placed at the top of a card to describe its purpose.
:::

## Example

``` json
"FIXME!"
```

## Required properties

### `type`

Must be `"Jumbotron"`.

* **Type:** `string`
* **Values:**
  * `Jumbotron`

----

### `title`

Text to be displayed as heading.

* **Type:** `string`

## Optional properties

### `subtitle`

Text to be displayed as subheading.

* **Type:** `string`

----

### `wash`

Type of wash to have over the background.

* **Type:** `string`
* **Values:**
  * `white`
  * `black`

----

### `backgroundImage`

Relative URL to image to be displayed as background.

* **Type:** `string`



<pre>
{
  "additionalProperties": true,
  "type": "Jumbotron",
  "description": "An element typically placed at the top of a card to describe its purpose.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Jumbotron\"`.",
      "enum": [
        "Jumbotron"
      ]
    },
    "title": {
      "type": "string",
      "description": "Text to be displayed as heading."
    },
    "subtitle": {
      "type": "string",
      "description": "Text to be displayed as subheading."
    },
    "wash": {
      "type": "string",
      "enum": [
        "white",
        "black"
      ],
      "description": "Type of wash to have over the background."
    },
    "backgroundImage": {
      "type": "string",
      "description": "Relative URL to image to be displayed as background."
    }
  },
  "required": [
    "type",
    "title"
  ],
  "typeSafe": "jumbotron",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Jumbotron\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Required",
      "text": "Text to be displayed as heading."
    },
    {
      "name": "subtitle",
      "type": "string",
      "required": "Optional",
      "text": "Text to be displayed as subheading."
    },
    {
      "name": "wash",
      "type": "string",
      "required": "Optional",
      "text": "Type of wash to have over the background."
    },
    {
      "name": "backgroundImage",
      "type": "string",
      "required": "Optional",
      "text": "Relative URL to image to be displayed as background."
    }
  ]
}
</pre>

