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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/media-source.svg')" alt="Relevant Cardscript icon">MediaSource

::: tip Cardscript Element
Defines a source for a Media element
:::

## Example

``` json
"FIXME!"
```

## Required properties

### `mimeType`

Mime type of associated media (e.g. `"video/mp4"`).

* **Type:** `string`

----

### `url`

URL to media.

* **Type:** `string`
* **Format:** [`uri`](https://json-schema.org/understanding-json-schema/reference/string.html#format)



<pre>
{
  "additionalProperties": true,
  "type": "MediaSource",
  "description": "Defines a source for a Media element",
  "version": "1.1",
  "properties": {
    "mimeType": {
      "type": "string",
      "description": "Mime type of associated media (e.g. `\"video/mp4\"`)."
    },
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to media."
    }
  },
  "required": [
    "mimeType",
    "url"
  ],
  "typeSafe": "media-source",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "mimeType",
      "type": "string",
      "required": "Required",
      "text": "Mime type of associated media (e.g. `\"video/mp4\"`)."
    },
    {
      "name": "url",
      "type": "string",
      "required": "Required",
      "text": "URL to media."
    }
  ]
}
</pre>

