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


# tymly-pg-plugin

::: tip Description
Replace Tymly&#39;s out-the-box memory storage with PostgreSQL
:::

## Links

* [Github repository](https://github.com/wmfs/tymly-pg-plugin#readme)
* [NPM package](https://www.npmjs.com/package/@wmfs/tymly-pg-plugin)


## State Resources
| Name | Description |
| ---- | ----------- |
| [exportingCsvDeltaFile](state-resources/exporting-csv-delta-file.html) | Outputs change-only-update CSV files (or “delta” files) that contain all the necessary actions required to re-synchronize rows in a cloned table - just a thin wrapper over [pg-delta-file](https://www.npmjs.com/package/pg-delta-file) |
| [getNextValueFromSequence](state-resources/get-next-value-from-sequence.html) | Gets next value from sequence |
| [importingCsvFiles](state-resources/importing-csv-files.html) | Takes a specifically-named directory structure of CSV files and conjures bulk insert, update and delete statements and applies them to a PostgreSQL database - just a thin wrapper over [Supercopy](https://github.com/wmfs/tymly/tree/master/supercopy) |
| [synchronizingTable](state-resources/synchronizing-table.html) | Takes the contents of one PostgreSQL table, applies a transformation function to each row and ensures a target table is kept in sync - just a thin wrapper over [pg-telepods](https://www.npmjs.com/package/pg-telepods) |





## Blueprint directories
| Directory | Description |
| --------- | ----------- |
| `/models` | One JSON file per model (contents to be a JSON schema for defining the model&#39;s data structure) |




## Services
| Name | Description |
| ---- | ----------- |
| [audit](services/audit.html) | PG Audit Service |
| [storage](services/storage.html) | Replaces the default in-memory storage solution with a Postgresql-backed alternative |


