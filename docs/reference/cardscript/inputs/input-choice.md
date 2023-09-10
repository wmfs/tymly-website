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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/input-choice.svg')" alt="Relevant Cardscript icon">Input.Choice

::: tip Cardscript
Describes a choice for use in a ChoiceSet.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Input.ChoiceSet",
      "id": "choice",
      "spacing": "medium",
      "value": "CHOICE_1",
      "choices": [
        {
          "title": "Choice 1",
          "value": "CHOICE_1"
        },
        {
          "title": "Choice 2",
          "value": "CHOICE_2"
        },
        {
          "title": "Choice 3",
          "value": "CHOICE_3"
        }
      ],
      "style": "expanded"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `title`

Text to display.

* **Type:** `string`

----

### `value`

The raw value for the choice. **NOTE:** do not use a `,` in the value, since a `ChoiceSet` with `isMultiSelect` set to `true` returns a comma-delimited string of choice values.

* **Type:** `string`

## Optional properties

### `type`

* **Type:** `string`
* **Values:**
  * `Input.Choice`

----

### `icon`

Name of an icon to display for the choice.

* **Type:** `string`



<hr>

## JSON Schema

``` json
{
  "type": "Input.Choice",
  "description": "Describes a choice for use in a ChoiceSet.",
  "additionalProperties": true,
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "Input.Choice"
      ]
    },
    "title": {
      "type": "string",
      "description": "Text to display."
    },
    "icon": {
      "type": "string",
      "description": "Name of an icon to display for the choice."
    },
    "value": {
      "type": "string",
      "description": "The raw value for the choice. **NOTE:** do not use a `,` in the value, since a `ChoiceSet` with `isMultiSelect` set to `true` returns a comma-delimited string of choice values."
    }
  },
  "required": [
    "title",
    "value"
  ],
  "typeSafe": "input-choice",
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
      "text": "Text to display."
    },
    {
      "name": "icon",
      "type": "string",
      "required": "Optional",
      "text": "Name of an icon to display for the choice."
    },
    {
      "name": "value",
      "type": "string",
      "required": "Required",
      "text": "The raw value for the choice. **NOTE:** do not use a `,` in the value, since a `ChoiceSet` with `isMultiSelect` set to `true` returns a comma-delimited string of choice values."
    }
  ]
}
```
