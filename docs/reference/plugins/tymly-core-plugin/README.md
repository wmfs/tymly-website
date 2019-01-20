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


# tymly-core-plugin

::: tip Description
Provides low-level functions for Tymly
:::

## Links

* [Github repository](https://github.com/wmfs/tymly-core/tree/master/lib/plugin)
* [NPM package](https://www.npmjs.com/package/tymly-core-plugin)


## State Resources
| Name | Description |
| ---- | ----------- |
| [availableResources](state-resources/available-resources.html) | Returns a list of currently available resources |
| [availableStateMachines](state-resources/available-state-machines.html) | Returns a list of currently available state machines |
| [clearConfiguredRegistryKey](state-resources/clear-configured-registry-key.html) | Clears a registry specific value |
| [clearRegistryKey](state-resources/clear-registry-key.html) | Clears a registry key value |
| [deletingById](state-resources/deleting-by-id.html) | Deletes document by ID |
| [finding](state-resources/finding.html) | Finds documents with where clause from storage |
| [findingById](state-resources/finding-by-id.html) | Fetches a single document by its primary key values from storage and adds to a Tymly context |
| [findingOne](state-resources/finding-one.html) | Finds one document from storage |
| [generateUuid](state-resources/generate-uuid.html) | Generate UUID (Long or short!) |
| [getConfiguredRegistryKey](state-resources/get-configured-registry-key.html) | Gets a specific registry key value |
| [getRegistryKey](state-resources/get-registry-key.html) | Gets a registry key value |
| [logging](state-resources/logging.html) | Logs to the console via a template |
| [runFunction](state-resources/run-function.html) | Run function from a blueprint |
| [runStateMachine](state-resources/run-state-machine.html) | Run another state machine |
| [setConfiguredRegistryKey](state-resources/set-configured-registry-key.html) | Sets a registry specific value |
| [setContextData](state-resources/set-context-data.html) | Sets the context data |
| [setRegistryKey](state-resources/set-registry-key.html) | Sets an arbitrary registry key value |
| [timestamp](state-resources/timestamp.html) | Generates a timestamp |
| [upserting](state-resources/upserting.html) | Perists a document to storage |





## Blueprint directories
| Directory | Description |
| --------- | ----------- |
| `/functions` | Blueprints are predominantly declarative - preferring JSON definitions over hand-coded functions. But for those times when only code will do, blueprints can supply supplemental Javascript functions too. |
| `/models` | This sub-directory deals with the `M` portion of `MVC` - each JSON file in here defines a data model that can be subsequently used by a State Machine. Nested documents are supported along with a couple of extensions to help describe database indexes and primary keys. Tymly uses the JSON Schema standard for describing data models. |
| `/registry-keys` | Consider a blueprint that defines a simple workflow that sends a Tweet - what Twitter username/password should be used? This is where _Registry Keys_ come in useful... a simple key/value store inside Tymly, where keys are declared inside this sub-directory. To help conjure administrative screens and help validation, the required value content is described using JSON Schema. |
| `/state-machines` | Each JSON file inside this sub-directory will be used to conjure a State Machine for orchestrating a workflow. Tymly uses the open [Amazon State Language](https://states-language.net/spec.html) to describe State Machines. |
| `/tags` | JSON files providing &#39;tags&#39; which are used throughout Tymly to help categorise things and aid discovery |




## Services
| Name | Description |
| ---- | ----------- |
| [blueprintDocs](services/blueprint-docs.html) | Allows tracking of documents created via blueprints, so they don&#39;t get reverted when Tymly restarts |
| [caches](services/caches.html) | Adds [lru-cache](https://www.npmjs.com/package/lru-cache)-based caching to Tymly. Note defaults will be used if no `caches` configuration is provided. |
| [categories](services/categories.html) | Provides a generic mechanism to help tag/classify search results, tasks, forms etc. |
| [functions](services/functions.html) | Adds ability to run custom logic as defined in a blueprint |
| [inventory](services/inventory.html) | Collates component information by scanning plugins. The results can then be used by tooling and documentation-generators |
| [registry](services/registry.html) | Provides a mechanism for states to refer to site-specific values |
| [statebox](services/statebox.html) | Runs state machines defined in Amazon States Language |
| [storage](services/storage.html) | This is the default in-memory storage service that ships with Tymly. Useful for testing and not much else. |
| [temp](services/temp.html) | Helps configure and manage a temporary folder for Tymly to use |
| [timestamp](services/timestamp.html) | Tymly Time Service! |
| [tymly](services/tymly.html) | Tymly Service |


