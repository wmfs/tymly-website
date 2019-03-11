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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/media.svg')" alt="Relevant Cardscript icon">Media

::: tip Cardscript
Displays a media player for audio or video content.
:::

## Example

``` json
{
  "type": "AdaptiveCard",
  "body": [
    {
      "type": "Media",
      "poster": "https://adaptivecards.io/content/poster-video.png",
      "sources": [
        {
          "mimeType": "video/mp4",
          "url": "https://adaptivecardsblob.blob.core.windows.net/assets/AdaptiveCardsOverviewVideo.mp4"
        }
      ]
    }
  ],
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.0"
}
```

## Required properties

### `type`

Must be `"Media"`.

* **Type:** `string`
* **Values:**
  * `Media`

## Optional properties

### `sources`

Array of media sources to attempt to play.

* **Type:** `array`

----

### `poster`

URL of an image to display before playing.

* **Type:** `string`
* **Format:** [`uri`](https://json-schema.org/understanding-json-schema/reference/string.html#format)

----

### `altText`

Alternate text describing the audio or video.

* **Type:** `string`

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
  "type": "Media",
  "description": "Displays a media player for audio or video content.",
  "version": "1.1",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Media\"`.",
      "enum": [
        "Media"
      ]
    },
    "sources": {
      "type": "array",
      "description": "Array of media sources to attempt to play.",
      "items": {
        "$ref": "#/definitions/MediaSource"
      }
    },
    "poster": {
      "type": "string",
      "format": "uri",
      "description": "URL of an image to display before playing."
    },
    "altText": {
      "type": "string",
      "description": "Alternate text describing the audio or video."
    }
  },
  "required": [
    "type"
  ],
  "typeSafe": "media",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Media\"`."
    },
    {
      "name": "sources",
      "type": "array",
      "required": "Optional",
      "text": "Array of media sources to attempt to play."
    },
    {
      "name": "poster",
      "type": "string",
      "required": "Optional",
      "text": "URL of an image to display before playing."
    },
    {
      "name": "altText",
      "type": "string",
      "required": "Optional",
      "text": "Alternate text describing the audio or video."
    }
  ]
}
</pre>

