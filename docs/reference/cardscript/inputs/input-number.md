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

# Input.Number

::: tip State Resource
This is a Cardscript input.
:::


<pre>
{
  "additionalProperties": true,
  "type": "Input.Number",
  "description": "Allows a user to enter a number.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    "max": {
      "type": "number",
      "description": "Hint of maximum value (may be ignored by some clients)."
    },
    "min": {
      "type": "number",
      "description": "Hint of minimum value (may be ignored by some clients)."
    },
    "placeholder": {
      "type": "string",
      "description": "Description of the input desired. Displayed when no selection has been made."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"Input.Number\"`.",
      "enum": [
        "Input.Number"
      ]
    },
    "value": {
      "type": "number",
      "description": "Initial value for this field."
    }
  },
  "required": [
    "type",
    "id"
  ],
  "typeSafe": "input-number",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "Unique identifier for the value. Used to identify collected input when the Submit action is performed."
    },
    {
      "name": "max",
      "type": "number",
      "required": "Optional",
      "text": "Hint of maximum value (may be ignored by some clients)."
    },
    {
      "name": "min",
      "type": "number",
      "required": "Optional",
      "text": "Hint of minimum value (may be ignored by some clients)."
    },
    {
      "name": "placeholder",
      "type": "string",
      "required": "Optional",
      "text": "Description of the input desired. Displayed when no selection has been made."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"Input.Number\"`."
    },
    {
      "name": "value",
      "type": "number",
      "required": "Optional",
      "text": "Initial value for this field."
    }
  ]
}
</pre>

