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

::: tip Cardscript
Displays an image.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Image",
      "url": "https://tymly.io/wp-content/uploads/2017/11/logo-tymly-main-colour.png",
      "size": "large",
      "horizontalAlignment": "left"
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
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

Controls how elements are horizontally positioned within their container.

* **Type:** `string`
* **Default:** `"left"`
* **Values:**
  * `left`
  * `center`
  * `right`

----

### `selectAction`

An Action that will be invoked when the `Image` is tapped or selected. `Action.ShowCard` is not supported.

* **Type:** `object`

----

### `size`

Controls the approximate size of the image. The physical dimensions will vary per host. Specify `"auto"` for true image dimension, or `"stretch"` to force it to fill the container.

* **Type:** `string`
* **Default:** `"auto"`
* **Values:**
  * `auto`
  * `stretch`
  * `small`
  * `medium`
  * `large`

----

### `style`

Controls how this `Image` is displayed.

* **Type:** `string`
* **Values:**
  * `default`
  * `person`

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



<hr>

## JSON Schema

``` json
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
```
