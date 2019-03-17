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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/fact-set.svg')" alt="Relevant Cardscript icon">FactSet

::: tip Cardscript
The FactSet element displays a series of facts (i.e. name/value pairs) in a tabular form.
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

### `facts`

The array of `Fact`s.

* **Type:** `array`

----

### `type`

Must be `"FactSet"`.

* **Type:** `string`
* **Values:**
  * `FactSet`

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
  "type": "FactSet",
  "description": "The FactSet element displays a series of facts (i.e. name/value pairs) in a tabular form.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "facts": {
      "type": "array",
      "description": "The array of `Fact`s.",
      "items": {
        "$ref": "#/definitions/Fact"
      }
    },
    "type": {
      "type": "string",
      "description": "Must be `\"FactSet\"`.",
      "enum": [
        "FactSet"
      ]
    }
  },
  "required": [
    "type",
    "facts"
  ],
  "typeSafe": "fact-set",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "facts",
      "type": "array",
      "required": "Required",
      "text": "The array of `Fact`s."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"FactSet\"`."
    }
  ]
}
```
