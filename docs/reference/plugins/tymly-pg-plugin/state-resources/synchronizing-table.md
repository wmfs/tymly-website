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


# synchronizingTable


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-pg-plugin](/reference/plugins/tymly-pg-plugin/)** plugin.
:::

## Purpose

Takes the contents of one PostgreSQL table, applies a transformation function to each row and ensures a target table is kept in sync - just a thin wrapper over [pg-telepods](https://www.npmjs.com/package/pg-telepods)

## Usage

### Example

``` json
{
  "synchronizingTable": {
    "options": {
      "transformerFunctionName": "someBlueprintFunction",
      "source": {
        "tableName": "someNamespace.some_table_name",
        "hashSumColumnName": "hash_sum"
      },
      "target": {
        "tableName": "someNamespace.another_table_name",
        "hashSumColumnName": "origin_hash_sum"
      },
      "join": {
        "source_pk_column": "target_pk_column"
      }
    }
  }
}
```


## Options

### Optional properties

#### `transformerFunctionName`

Identifies which blueprint function should be used to undertake transformation duties. See [pg-telepods](https://github.com/wmfs/tymly/tree/master/pg-telepods) for more information.

* **Type:** `string`

----

#### `source`

Used to define a source table along with any other attributes (such as a hash sum column) for where data is to be sourced from. See [pg-telepods](https://github.com/wmfs/tymly/tree/master/pg-telepods) for more information.

* **Type:** `object`

----

#### `target`

Likewise, defines a target table with similar attributes explaining where data is to sent to. See [pg-telepods](https://github.com/wmfs/tymly/tree/master/pg-telepods) for more information.

* **Type:** `object`

----

#### `join`

A simple object denoting how primary keys on both tables are related - where `key` values are the name of a column on the source table and its `value` is a column on the target table.

* **Type:** `object`





## Links

* [State Resource class on GitHub]()
