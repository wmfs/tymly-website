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

# <img class="header-prefix-icon" :src="$withBase('/cardscript-assets/icons/24dp/list.svg')" alt="Relevant Cardscript icon">List

::: tip Cardscript
Displays information in List format.
:::

## Example

``` json
"No example! :-("
```

## Required properties

### `id`

A unique identifier associated with the element.

* **Type:** `string`

----

### `type`

Must be `"List"`.

* **Type:** `string`
* **Values:**
  * `List`

----

### `arrayPath`

Points to the array of data to be displayed.

* **Type:** `string`

## Optional properties

### `title`

Title displayed for the `List`.

* **Type:** `string`

----

### `selectionType`

Whether the use can select a value.

* **Type:** `string`
* **Values:**
  * `none`
  * `single`
  * `multi`

----

### `rowKey`

Points to the object key that uniquely identifies the record.

* **Type:** `string`

----

### `templates`

Templates to render when displaying the list items.

* **Type:** `object`

----

### `showLaunches`

Whether to show launches menu for list items.

* **Type:** `boolean`

----

### `showTotal`

Whether to show the value of the total amount of items in the list.

* **Type:** `boolean`

----

### `notFoundText`

Text to display if nothing to display in the list.

* **Type:** `string`
* **Default:** `"0 results found"`

----

### `clickToLaunch`

Whether to make the item label launchable.

* **Type:** `boolean`

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
  "type": "List",
  "description": "Displays information in List format.",
  "allOf": [
    {
      "$ref": "#/definitions/CardElement"
    }
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "A unique identifier associated with the element."
    },
    "type": {
      "type": "string",
      "description": "Must be `\"List\"`.",
      "enum": [
        "List"
      ]
    },
    "title": {
      "type": "string",
      "description": "Title displayed for the `List`."
    },
    "arrayPath": {
      "type": "string",
      "description": "Points to the array of data to be displayed."
    },
    "selectionType": {
      "type": "string",
      "description": "Whether the use can select a value.",
      "enum": [
        "none",
        "single",
        "multi"
      ]
    },
    "rowKey": {
      "type": "string",
      "description": "Points to the object key that uniquely identifies the record"
    },
    "templates": {
      "type": "object",
      "description": "Templates to render when displaying the list items",
      "properties": {
        "label": {
          "type": "string",
          "description": "Template to render for the label of the list item"
        },
        "sublabel": {
          "type": "string",
          "description": "Template to render for the sublabel of the list item"
        },
        "stamp": {
          "type": "string",
          "description": "Template to render for the stamp of the list item"
        }
      }
    },
    "showLaunches": {
      "type": "boolean",
      "description": "Whether to show launches menu for list items",
      "default": false
    },
    "showTotal": {
      "type": "boolean",
      "description": "Whether to show the value of the total amount of items in the list",
      "default": false
    },
    "notFoundText": {
      "type": "string",
      "description": "Text to display if nothing to display in the list",
      "default": "0 results found"
    },
    "clickToLaunch": {
      "type": "boolean",
      "description": "Whether to make the item label launchable",
      "default": false
    }
  },
  "required": [
    "id",
    "type",
    "arrayPath"
  ],
  "typeSafe": "list",
  "example": "FIXME!",
  "propertySummary": [
    {
      "name": "id",
      "type": "string",
      "required": "Required",
      "text": "A unique identifier associated with the element."
    },
    {
      "name": "type",
      "type": "string",
      "required": "Required",
      "text": "Must be `\"List\"`."
    },
    {
      "name": "title",
      "type": "string",
      "required": "Optional",
      "text": "Title displayed for the `List`."
    },
    {
      "name": "arrayPath",
      "type": "string",
      "required": "Required",
      "text": "Points to the array of data to be displayed."
    },
    {
      "name": "selectionType",
      "type": "string",
      "required": "Optional",
      "text": "Whether the use can select a value."
    },
    {
      "name": "rowKey",
      "type": "string",
      "required": "Optional",
      "text": "Points to the object key that uniquely identifies the record"
    },
    {
      "name": "templates",
      "type": "object",
      "required": "Optional",
      "text": "Templates to render when displaying the list items"
    },
    {
      "name": "showLaunches",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether to show launches menu for list items"
    },
    {
      "name": "showTotal",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether to show the value of the total amount of items in the list"
    },
    {
      "name": "notFoundText",
      "type": "string",
      "required": "Optional",
      "text": "Text to display if nothing to display in the list"
    },
    {
      "name": "clickToLaunch",
      "type": "boolean",
      "required": "Optional",
      "text": "Whether to make the item label launchable"
    }
  ]
}
```
