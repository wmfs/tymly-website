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


# Action.Cancel


::: tip State Resource
This is a Cardscript Action.
:::


<pre>
{
  "type": "Action.Cancel",
  "additionalProperties": true,
  "description": "Allows to cancel out of a form.",
  "properties": {
    "type": {
      "type": "string",
      "description": "Must be `\"Action.Cancel\"`."
    },
    "title": {
      "type": "string",
      "description": "Label for button or link that represents this action."
    },
    "iconUrl": {
      "type": "string",
      "format": "uri",
      "description": "Optional icon to be shown on the action in conjunction with the title",
      "version": "1.1"
    }
  },
  "required": [
    "type"
  ],
  "typeSafe": "action-cancel",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Action.Cancel\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Optional",
      "text": "Label for button or link that represents this action."
    },
    {
      "name": "iconUrl",
      "type": "string",
      "required": "Optional",
      "text": "Optional icon to be shown on the action in conjunction with the title"
    }
  ]
}
</pre>

