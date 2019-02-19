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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/chip.svg')" alt="Relevant Cardscript icon">Chip

::: tip Cardscript Element
A chip to display some text.
:::

## Example

``` json
"FIXME!"
```

## Required properties

### `type`

Must be `"Chip"`.

* **Type:** `string`
* **Values:**
  * `Chip`

----

### `text`

Text to be displayed in chip.

* **Type:** `string`

## Optional properties

### `color`

Color of the chip.

* **Type:** `string`



<pre>
{
  "additionalProperties": true,
  "type": "Chip",
  "description": "A chip to display some text.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Chip\"`.",
      "enum": [
        "Chip"
      ]
    },
    "text": {
      "type": "string",
      "description": "Text to be displayed in chip."
    },
    "color": {
      "type": "string",
      "description": "Color of the chip"
    }
  },
  "required": [
    "type",
    "text"
  ],
  "typeSafe": "chip",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Chip\"`."
    },
    {
      "name": "text",
      "type": "string",
      "required": "Required",
      "text": "Text to be displayed in chip."
    },
    {
      "name": "color",
      "type": "string",
      "required": "Optional",
      "text": "Color of the chip"
    }
  ]
}
</pre>

