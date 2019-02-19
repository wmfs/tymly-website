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

# ColumnSet

::: tip State Resource
This is a Cardscript container.
:::



<pre>
{
  "additionalProperties": true,
  "type": "ColumnSet",
  "description": "ColumnSet divides a region into Columns, allowing elements to sit side-by-side.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "columns": {
      "type": "array",
      "description": "The array of `Columns` to divide the region into.",
      "items": {
        "$ref": "#/definitions/Column"
      }
    },
    "selectAction": {
      "description": "An Action that will be invoked when the `ColumnSet` is tapped or selected. `Action.ShowCard` is not supported.",
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
    "type": {
      "type": "string",
      "description": "Must be `\"ColumnSet\"`.",
      "enum": [
        "ColumnSet"
      ]
    }
  },
  "required": [
    "type"
  ],
  "typeSafe": "column-set",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "columns",
      "type": "array",
      "required": "Optional",
      "text": "The array of `Columns` to divide the region into."
    },
    {
      "name": "selectAction",
      "type": "object",
      "required": "Optional",
      "text": "An Action that will be invoked when the `ColumnSet` is tapped or selected. `Action.ShowCard` is not supported."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"ColumnSet\"`."
    }
  ]
}
</pre>

