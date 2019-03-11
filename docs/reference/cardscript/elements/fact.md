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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/fact.svg')" alt="Relevant Cardscript icon">Fact

::: tip Cardscript
Describes a Fact in a FactSet as a key/value pair.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "FactSet",
      "facts": [
        {
          "title": "Hello:",
          "value": "World"
        },
        {
          "title": "HELLO:",
          "value": "WORLD"
        }
      ]
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `title`

The title of the fact.

* **Type:** `string`

----

### `value`

The value of the fact.

* **Type:** `string`

## Optional properties

### `type`

* **Type:** `string`
* **Values:**
  * `Fact`



<pre>
{
  "additionalProperties": true,
  "type": "Fact",
  "description": "Describes a Fact in a FactSet as a key/value pair.",
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "Fact"
      ]
    },
    "title": {
      "type": "string",
      "description": "The title of the fact."
    },
    "value": {
      "type": "string",
      "description": "The value of the fact."
    }
  },
  "required": [
    "title",
    "value"
  ],
  "typeSafe": "fact",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Optional"
    },
    {
      "name": "title",
      "type": "string",
      "required": "Required",
      "text": "The title of the fact."
    },
    {
      "name": "value",
      "type": "string",
      "required": "Required",
      "text": "The value of the fact."
    }
  ]
}
</pre>

