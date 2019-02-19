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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/image.svg')" alt="Relevant Cardscript icon">Image

::: tip Cardscript Element
Displays an image.
:::

## Example

``` json
"FIXME!"
```

## Required properties

### `type`

Must be `"Image"`.

* **Type:** `string`
* **Values:**
  * `Image`

----

### `url`

The URL to the image.

* **Type:** `string`
* **Format:** [`uri`](https://json-schema.org/understanding-json-schema/reference/string.html#format)

## Optional properties

### `altText`

Alternate text describing the image.

* **Type:** `string`

----

### `horizontalAlignment`

* **Type:** `undefined`

----

### `selectAction`

An Action that will be invoked when the `Image` is tapped or selected. `Action.ShowCard` is not supported.

* **Type:** `object`

----

### `size`

* **Type:** `undefined`

----

### `style`

* **Type:** `undefined`



<pre>
{
  "additionalProperties": true,
  "type": "Image",
  "description": "Displays an image.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "altText": {
      "type": "string",
      "description": "Alternate text describing the image."
    },
    "horizontalAlignment": {
      "$ref": "#/definitions/HorizontalAlignment"
    },
    "selectAction": {
      "description": "An Action that will be invoked when the `Image` is tapped or selected. `Action.ShowCard` is not supported.",
      "type": "object",
      "oneOf": [
        {
          "$ref": "#/definitions/Action.Submit"
        },
        {
          "$ref": "#/definitions/Action.OpenUrl"
        }
      ]
    },
    "size": {
      "$ref": "#/definitions/ImageSize"
    },
    "style": {
      "$ref": "#/definitions/ImageStyle"
    },
    "type": {
      "type": "string",
      "description": "Must be `\"Image\"`.",
      "enum": [
        "Image"
      ]
    },
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL to the image."
    }
  },
  "required": [
    "type",
    "url"
  ],
  "typeSafe": "image",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "altText",
      "type": "string",
      "required": "Optional",
      "text": "Alternate text describing the image."
    },
    {
      "name": "horizontalAlignment",
      "required": "Optional"
    },
    {
      "name": "selectAction",
      "type": "object",
      "required": "Optional",
      "text": "An Action that will be invoked when the `Image` is tapped or selected. `Action.ShowCard` is not supported."
    },
    {
      "name": "size",
      "required": "Optional"
    },
    {
      "name": "style",
      "required": "Optional"
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Image\"`."
    },
    {
      "name": "url",
      "type": "string",
      "required": "Required",
      "text": "The URL to the image."
    }
  ]
}
</pre>

