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

# ImageSet

::: tip State Resource
This is a Cardscript container.
:::



<pre>
{
  "additionalProperties": true,
  "type": "ImageSet",
  "description": "The ImageSet displays a collection of Images similar to a gallery.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "images": {
      "type": "array",
      "description": "The array of `Image` elements to show.",
      "items": {
        "$ref": "#/definitions/Image"
      }
    },
    "imageSize": {
      "$ref": "#/definitions/ImageSize"
    },
    "type": {
      "type": "string",
      "description": "Must be `\"ImageSet\"`.",
      "enum": [
        "ImageSet"
      ]
    }
  },
  "required": [
    "type",
    "images"
  ],
  "typeSafe": "image-set",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "images",
      "type": "array",
      "required": "Required",
      "text": "The array of `Image` elements to show."
    },
    {
      "name": "imageSize",
      "required": "Optional"
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"ImageSet\"`."
    }
  ]
}
</pre>

