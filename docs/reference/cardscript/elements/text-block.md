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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/text-block.svg')" alt="Relevant Cardscript icon">TextBlock

::: tip Cardscript Element
Displays text, allowing control over font sizes, weight, and color.
:::

## Example

``` json
"FIXME!"
```

## Required properties

### `text`

Text to display.

* **Type:** `string`

----

### `type`

Must be `"TextBlock"`.

* **Type:** `string`
* **Values:**
  * `TextBlock`

## Optional properties

### `color`

Controls the color of `TextBlock` elements.

* **Type:** `string`
* **Values:**
  * `default`
  * `dark`
  * `light`
  * `accent`
  * `good`
  * `warning`
  * `attention`

----

### `horizontalAlignment`

* **Type:** `undefined`

----

### `isSubtle`

If `true`, displays text slightly toned down to appear less prominent.

* **Type:** `boolean`

----

### `maxLines`

Specifies the maximum number of lines to display.

* **Type:** `number`

----

### `size`

Controls size of text.

* **Type:** `string`
* **Values:**
  * `small`
  * `default`
  * `medium`
  * `large`
  * `extraLarge`

----

### `weight`

Controls the weight of `TextBlock` elements.

* **Type:** `string`
* **Values:**
  * `lighter`
  * `default`
  * `bolder`

----

### `wrap`

If `true`, allow text to wrap. Otherwise, text is clipped.

* **Type:** `boolean`



<pre>
{
  "additionalProperties": true,
  "type": "TextBlock",
  "description": "Displays text, allowing control over font sizes, weight, and color.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "color": {
      "type": "string",
      "description": "Controls the color of `TextBlock` elements.",
      "enum": [
        "default",
        "dark",
        "light",
        "accent",
        "good",
        "warning",
        "attention"
      ]
    },
    "horizontalAlignment": {
      "$ref": "#/definitions/HorizontalAlignment"
    },
    "isSubtle": {
      "type": "boolean",
      "description": "If `true`, displays text slightly toned down to appear less prominent.",
      "default": false
    },
    "maxLines": {
      "type": "number",
      "description": "Specifies the maximum number of lines to display."
    },
    "size": {
      "type": "string",
      "description": "Controls size of text.",
      "enum": [
        "small",
        "default",
        "medium",
        "large",
        "extraLarge"
      ]
    },
    "text": {
      "type": "string",
      "description": "Text to display."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"TextBlock\"`.",
      "enum": [
        "TextBlock"
      ]
    },
    "weight": {
      "type": "string",
      "description": "Controls the weight of `TextBlock` elements.",
      "enum": [
        "lighter",
        "default",
        "bolder"
      ]
    },
    "wrap": {
      "type": "boolean",
      "description": "If `true`, allow text to wrap. Otherwise, text is clipped.",
      "default": false
    }
  },
  "required": [
    "type",
    "text"
  ],
  "typeSafe": "text-block",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "color",
      "type": "string",
      "required": "Optional",
      "text": "Controls the color of `TextBlock` elements."
    },
    {
      "name": "horizontalAlignment",
      "required": "Optional"
    },
    {
      "name": "isSubtle",
      "type": "boolean",
      "required": "Optional",
      "text": "If `true`, displays text slightly toned down to appear less prominent."
    },
    {
      "name": "maxLines",
      "type": "number",
      "required": "Optional",
      "text": "Specifies the maximum number of lines to display."
    },
    {
      "name": "size",
      "type": "string",
      "required": "Optional",
      "text": "Controls size of text."
    },
    {
      "name": "text",
      "type": "string",
      "required": "Required",
      "text": "Text to display."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"TextBlock\"`."
    },
    {
      "name": "weight",
      "type": "string",
      "required": "Optional",
      "text": "Controls the weight of `TextBlock` elements."
    },
    {
      "name": "wrap",
      "type": "boolean",
      "required": "Optional",
      "text": "If `true`, allow text to wrap. Otherwise, text is clipped."
    }
  ]
}
</pre>

