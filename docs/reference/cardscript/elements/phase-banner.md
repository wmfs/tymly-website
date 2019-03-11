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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/phase-banner.svg')" alt="Relevant Cardscript icon">PhaseBanner

::: tip Cardscript
Displays a banner highlighting a phase.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "PhaseBanner",
      "phase": "alpha"
    },
    {
      "type": "PhaseBanner",
      "phase": "beta"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `type`

Must be `"PhaseBanner"`.

* **Type:** `string`
* **Values:**
  * `PhaseBanner`

## Optional properties

### `phase`

The phase which the service is in.

* **Type:** `string`
* **Values:**
  * `alpha`
  * `beta`

----

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



<pre>
{
  "additionalProperties": true,
  "type": "PhaseBanner",
  "description": "Displays a banner highlighting a phase.",
  "version": "1.1",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"PhaseBanner\"`.",
      "enum": [
        "PhaseBanner"
      ]
    },
    "phase": {
      "type": "string",
      "description": "The phase which the service is in.",
      "enum": [
        "alpha",
        "beta"
      ]
    }
  },
  "required": [
    "type"
  ],
  "typeSafe": "phase-banner",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"PhaseBanner\"`."
    },
    {
      "name": "phase",
      "type": "string",
      "required": "Optional",
      "text": "The phase which the service is in."
    }
  ]
}
</pre>

