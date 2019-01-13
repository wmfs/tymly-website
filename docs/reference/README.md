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

# Tymly Reference

## Plugins

| Name | Description |
| ---- | ----------- |
| [tymly-auth-auth0-plugin](plugins/tymly-auth-auth0-plugin/) | Provides auth0 authentication functionality to the Tymly framework |
| [tymly-core-plugin](plugins/tymly-core-plugin/) | Provides low-level functions for Tymly |
| [tymly-crypto-plugin](plugins/tymly-crypto-plugin/) | A plugin to allow Tymly to perform encryption |
| [tymly-diaries-plugin](plugins/tymly-diaries-plugin/) | Plugin to handle bookings and appointment kind of things within Tymly framework |
| [tymly-etl-plugin](plugins/tymly-etl-plugin/) | A collection of states for helping with Extract, Transform and Load tasks. |
| [tymly-express-plugin](plugins/tymly-express-plugin/) | Exposes the Tymly framework via an Express.js web app. |
| [tymly-gov-uk-notify-plugin](plugins/tymly-gov-uk-notify-plugin/) | Allows sending notifications via sms or email using the GOV UK Notify service with Tymly framework. |
| [tymly-graphql-plugin](plugins/tymly-graphql-plugin/) | Exposes the Tymly framework via GraphQL. |
| [tymly-pg-plugin](plugins/tymly-pg-plugin/) | Replace Tymly&#39;s out-the-box memory storage with PostgreSQL |
| [tymly-rankings-plugin](plugins/tymly-rankings-plugin/) | Plugin which handles ranking of data for Tymly framework |
| [tymly-rbac-plugin](plugins/tymly-rbac-plugin/) | Plugin which provides role-based authentication |
| [tymly-rest-client-plugin](plugins/tymly-rest-client-plugin/) | A REST API client for Tymly |
| [tymly-sharepoint-plugin](plugins/tymly-sharepoint-plugin/) | A plugin for accessing sharepoint from within Tymly |
| [tymly-solr-plugin](plugins/tymly-solr-plugin/) | Plugin which handles interaction with Apache Solr for Tymly framework |
| [tymly-upload-plugin](plugins/tymly-upload-plugin/) | Plugin which handles File Uploads |
| [tymly-users-plugin](plugins/tymly-users-plugin/) | Plugin which handles interactions to do with a user for Tymly framework |


## Blueprint



### Component directories

| Directory | Description | Plugin |
| --------- | ----------- | ------ |
| `/boards` | One JSON file per Boards | [tymly-users-plugin](plugins/tymly-users-plugin/)|
| `/cardTemplates` | One JSON file per Card | [tymly-users-plugin](plugins/tymly-users-plugin/)|
| `/forms` | One JSON file per Form (currently need to be in [Schemaform](http://schemaform.io/) format) | [tymly-users-plugin](plugins/tymly-users-plugin/)|
| `/functions` | Blueprints are predominantly declarative - preferring JSON definitions over hand-coded functions. But for those times when only code will do, blueprints can supply supplemental Javascript functions too. | [tymly-core-plugin](plugins/tymly-core-plugin/)|
| `/images` | A place to put images that can be served-up in Forms and similar | [tymly-express-plugin](plugins/tymly-express-plugin/)|
| `/models` | One JSON file per model (contents to be a JSON schema for defining the model&#39;s data structure) | [tymly-pg-plugin](plugins/tymly-pg-plugin/)|
| `/models` | This sub-directory deals with the `M` portion of `MVC` - each JSON file in here defines a data model that can be subsequently used by a State Machine. Nested documents are supported along with a couple of extensions to help describe database indexes and primary keys. Tymly uses the JSON Schema standard for describing data models. | [tymly-core-plugin](plugins/tymly-core-plugin/)|
| `/rankings` | Each JSON file here will help configure everything required to rank a set of documents by a score derived from a variety of sources | [tymly-rankings-plugin](plugins/tymly-rankings-plugin/)|
| `/registry-keys` | Consider a blueprint that defines a simple workflow that sends a Tweet - what Twitter username/password should be used? This is where _Registry Keys_ come in useful... a simple key/value store inside Tymly, where keys are declared inside this sub-directory. To help conjure administrative screens and help validation, the required value content is described using JSON Schema. | [tymly-core-plugin](plugins/tymly-core-plugin/)|
| `/search-docs` | Each JSON file is used to translates a model document into standard properties for searching. | [tymly-solr-plugin](plugins/tymly-solr-plugin/)|
| `/state-machines` | Each JSON file inside this sub-directory will be used to conjure a State Machine for orchestrating a workflow. Tymly uses the open [Amazon State Language](https://states-language.net/spec.html) to describe State Machines. | [tymly-core-plugin](plugins/tymly-core-plugin/)|
| `/tags` | JSON files providing &#39;tags&#39; which are used throughout Tymly to help categorise things and aid discovery | [tymly-core-plugin](plugins/tymly-core-plugin/)|




### blueprint.json

## State Resources

| Directory | Description |
| --------- | ----------- |
| [acknowledgeNotifications](plugins/tymly-users-plugin/state-resources/acknowledge-notifications.html) | Acknowledges notifications for a user |
| [addAuth0Mapping](plugins/tymly-auth-auth0-plugin/state-resources/add-auth0-mapping.html) | No description! :-( |
| [addCryptoEntry](plugins/tymly-crypto-plugin/state-resources/add-crypto-entry.html) | Add a crypto value |
| [addDocs](plugins/tymly-solr-plugin/state-resources/add-docs.html) | Adds docs |
| [applySettings](plugins/tymly-users-plugin/state-resources/apply-settings.html) | Applies settings for a user |
| [availableResources](plugins/tymly-core-plugin/state-resources/available-resources.html) | No description! :-( |
| [availableStateMachines](plugins/tymly-core-plugin/state-resources/available-state-machines.html) | No description! :-( |
| [awaitingHumanInput](plugins/tymly-users-plugin/state-resources/awaiting-human-input.html) | Awaits the input of a human to advance the state-machine |
| [cancelDiaryEntry](plugins/tymly-diaries-plugin/state-resources/cancel-diary-entry.html) | Cancel Diary Entry |
| [clearConfiguredRegistryKey](plugins/tymly-core-plugin/state-resources/clear-configured-registry-key.html) | Clears a registry specific value |
| [clearRegistryKey](plugins/tymly-core-plugin/state-resources/clear-registry-key.html) | Clears a registry key value |
| [createDiaryEntry](plugins/tymly-diaries-plugin/state-resources/create-diary-entry.html) | Create Diary Entry |
| [createNotification](plugins/tymly-users-plugin/state-resources/create-notification.html) | Creates notification |
| [createRole](plugins/tymly-rbac-plugin/state-resources/create-role.html) | No description! :-( |
| [createTodoEntry](plugins/tymly-users-plugin/state-resources/create-todo-entry.html) | Creates ToDo Entry |
| [deletingById](plugins/tymly-core-plugin/state-resources/deleting-by-id.html) | Deletes document by ID |
| [deltaReindex](plugins/tymly-solr-plugin/state-resources/delta-reindex.html) | Performs a delta reindex |
| [ensureCloudStorageFolder](plugins/tymly-sharepoint-plugin/state-resources/ensure-cloud-storage-folder.html) | No description! :-( |
| [exportingCsvDeltaFile](plugins/tymly-pg-plugin/state-resources/exporting-csv-delta-file.html) | Outputs change-only-update CSV files (or “delta” files) that contain all the necessary actions required to re-synchronize rows in a cloned table - just a thin wrapper over [pg-delta-file](https://www.npmjs.com/package/pg-delta-file) |
| [finding](plugins/tymly-core-plugin/state-resources/finding.html) | Finds documents with where clause from storage |
| [findingById](plugins/tymly-core-plugin/state-resources/finding-by-id.html) | Fetches a single document by its primary key values from storage and adds to a Tymly context |
| [findingOne](plugins/tymly-core-plugin/state-resources/finding-one.html) | Finds one document from storage |
| [flattenXmlFiles](plugins/tymly-etl-plugin/state-resources/flatten-xml-files.html) | Flatten XML Files |
| [fullReindex](plugins/tymly-solr-plugin/state-resources/full-reindex.html) | Performs a full reindex |
| [generateUuid](plugins/tymly-core-plugin/state-resources/generate-uuid.html) | Generate UUID (Long or short!) |
| [getAvailableDiarySlots](plugins/tymly-diaries-plugin/state-resources/get-available-diary-slots.html) | Get Available Diary Entry Slots |
| [getBoardData](plugins/tymly-users-plugin/state-resources/get-board-data.html) | Get Board Data |
| [getCloudStorageContents](plugins/tymly-sharepoint-plugin/state-resources/get-cloud-storage-contents.html) | No description! :-( |
| [getConfiguredRegistryKey](plugins/tymly-core-plugin/state-resources/get-configured-registry-key.html) | Gets a specific registry key value |
| [getCryptoEntry](plugins/tymly-crypto-plugin/state-resources/get-crypto-entry.html) | Get a crypto value |
| [getDataFromRestApi](plugins/tymly-rest-client-plugin/state-resources/get-data-from-rest-api.html) | Gets data from a rest API |
| [getFavouriteStartableNames](plugins/tymly-users-plugin/state-resources/get-favourite-startable-names.html) | Gets favourite startable names for a user |
| [getMessageStatusViaService](plugins/tymly-gov-uk-notify-plugin/state-resources/get-message-status-via-service.html) | Get the status of a message sent via GOV UK Notify Service |
| [getNextValueFromSequence](plugins/tymly-pg-plugin/state-resources/get-next-value-from-sequence.html) | Gets next value from sequence |
| [getNotifications](plugins/tymly-users-plugin/state-resources/get-notifications.html) | Gets notifications for a user |
| [getRegistryKey](plugins/tymly-core-plugin/state-resources/get-registry-key.html) | Gets a registry key value |
| [getSettings](plugins/tymly-users-plugin/state-resources/get-settings.html) | Gets settings for a user |
| [getTodoChanges](plugins/tymly-users-plugin/state-resources/get-todo-changes.html) | Get a list of todo-list entries that need adding/removing from the client store |
| [getUserDashboardData](plugins/tymly-users-plugin/state-resources/get-user-dashboard-data.html) | Get the necessary information to be render a personal dashboard for the user. |
| [getUserHistory](plugins/tymly-users-plugin/state-resources/get-user-history.html) | Get the history of state machines the user has accessed. |
| [getUserRemit](plugins/tymly-users-plugin/state-resources/get-user-remit.html) | Gets the user remit |
| [getWatchedBoards](plugins/tymly-users-plugin/state-resources/get-watched-boards.html) | Gets all watched boards for a user |
| [grantPermission](plugins/tymly-rbac-plugin/state-resources/grant-permission.html) | No description! :-( |
| [importingCsvFiles](plugins/tymly-pg-plugin/state-resources/importing-csv-files.html) | Takes a specifically-named directory structure of CSV files and conjures bulk insert, update and delete statements and applies them to a PostgreSQL database - just a thin wrapper over [Supercopy](https://github.com/wmfs/tymly/tree/master/supercopy) |
| [listAuth0Mappings](plugins/tymly-auth-auth0-plugin/state-resources/list-auth0-mappings.html) | No description! :-( |
| [listRoles](plugins/tymly-rbac-plugin/state-resources/list-roles.html) | No description! :-( |
| [logging](plugins/tymly-core-plugin/state-resources/logging.html) | Logs to the console via a template |
| [permissionsTree](plugins/tymly-rbac-plugin/state-resources/permissions-tree.html) | No description! :-( |
| [processingCsvFiles](plugins/tymly-etl-plugin/state-resources/processing-csv-files.html) | Smash CSV files into more manageable files based on column values - just a thin wrapper over [Smithereens](https://www.npmjs.com/package/smithereens) |
| [processingXmlFiles](plugins/tymly-etl-plugin/state-resources/processing-xml-files.html) | Takes an XML file and converts it to CSV |
| [refreshAll](plugins/tymly-rankings-plugin/state-resources/refresh-all.html) | No description! :-( |
| [refreshPermissions](plugins/tymly-rbac-plugin/state-resources/refresh-permissions.html) | No description! :-( |
| [refreshRanking](plugins/tymly-rankings-plugin/state-resources/refresh-ranking.html) | Regenerates a database view of ranked data |
| [refreshRiskScore](plugins/tymly-rankings-plugin/state-resources/refresh-risk-score.html) | Regenerates a risk score usin growth curve |
| [removeAuth0Mapping](plugins/tymly-auth-auth0-plugin/state-resources/remove-auth0-mapping.html) | No description! :-( |
| [removeDocs](plugins/tymly-solr-plugin/state-resources/remove-docs.html) | Remove SOLR Docs |
| [removeTodoEntries](plugins/tymly-users-plugin/state-resources/remove-todo-entries.html) | Removes todos for a user |
| [runFunction](plugins/tymly-core-plugin/state-resources/run-function.html) | Run function from a blueprint |
| [runStateMachine](plugins/tymly-core-plugin/state-resources/run-state-machine.html) | Run another state machine |
| [search](plugins/tymly-solr-plugin/state-resources/search.html) | Performs a search |
| [sendingMessageViaService](plugins/tymly-gov-uk-notify-plugin/state-resources/sending-message-via-service.html) | Sending Mail or SMS via GOV UK Notify Service |
| [setConfiguredRegistryKey](plugins/tymly-core-plugin/state-resources/set-configured-registry-key.html) | Sets a registry specific value |
| [setContextData](plugins/tymly-core-plugin/state-resources/set-context-data.html) | Sets the context data |
| [setFavouriteStartableNames](plugins/tymly-users-plugin/state-resources/set-favourite-startable-names.html) | Sets favourite startable names for a user |
| [setRegistryKey](plugins/tymly-core-plugin/state-resources/set-registry-key.html) | Sets an arbitrary registry key value |
| [synchronizingTable](plugins/tymly-pg-plugin/state-resources/synchronizing-table.html) | Takes the contents of one PostgreSQL table, applies a transformation function to each row and ensures a target table is kept in sync - just a thin wrapper over [pg-telepods](https://www.npmjs.com/package/pg-telepods) |
| [timestamp](plugins/tymly-core-plugin/state-resources/timestamp.html) | Generates a timestamp |
| [unwatchBoard](plugins/tymly-users-plugin/state-resources/unwatch-board.html) | Allows a user to unwatch a board |
| [uploadFile](plugins/tymly-upload-plugin/state-resources/upload-file.html) | Uploads File for a user |
| [upserting](plugins/tymly-core-plugin/state-resources/upserting.html) | Perists a document to storage |
| [watchBoard](plugins/tymly-users-plugin/state-resources/watch-board.html) | Allows a user to watch a board |


## Services

| Directory | Description |
| --------- | ----------- |
| [audit](plugins/tymly-pg-plugin/services/audit.html) | PG Audit Service |
| [auth0GroupMapping](plugins/tymly-auth-auth0-plugin/services/auth0-group-mapping.html) | No description! :-( |
| [blueprintDocs](plugins/tymly-core-plugin/services/blueprint-docs.html) | Allows tracking of documents created via blueprints, so they don&#39;t get reverted when Tymly restarts |
| [boards](plugins/tymly-users-plugin/services/boards.html) | Exposes UI configuration |
| [caches](plugins/tymly-core-plugin/services/caches.html) | Adds [lru-cache](https://www.npmjs.com/package/lru-cache)-based caching to Tymly. Note defaults will be used if no `caches` configuration is provided. |
| [cards](plugins/tymly-users-plugin/services/cards.html) | Exposes UI configuration |
| [categories](plugins/tymly-core-plugin/services/categories.html) | Provides a generic mechanism to help tag/classify search results, tasks, forms etc. |
| [crypto](plugins/tymly-crypto-plugin/services/crypto.html) | Crypto Service |
| [diaries](plugins/tymly-diaries-plugin/services/diaries.html) | Diary Service |
| [forms](plugins/tymly-users-plugin/services/forms.html) | Exposes UI configuration (as supplied via blueprints in [Schema Form](http://schemaform.io/) format) |
| [functions](plugins/tymly-core-plugin/services/functions.html) | Adds ability to run custom logic as defined in a blueprint |
| [inventory](plugins/tymly-core-plugin/services/inventory.html) | Collates component information by scanning plugins. The results can then be used by tooling and documentation-generators |
| [jwtAuth](plugins/tymly-express-plugin/services/jwt-auth.html) | Provides JWT-based authentication capabilities |
| [jwtAuth](plugins/tymly-graphql-plugin/services/jwt-auth.html) | No description! :-( |
| [rankings](plugins/tymly-rankings-plugin/services/rankings.html) | Adds a ranking engine |
| [rbac](plugins/tymly-rbac-plugin/services/rbac.html) | Provides Rbac-based authorization capabilities |
| [registry](plugins/tymly-core-plugin/services/registry.html) | Provides a mechanism for states to refer to site-specific values |
| [server](plugins/tymly-express-plugin/services/server.html) | Provides a CORS-enabled Express.js server. Includes serving of static assets as supplied via Blueprints |
| [server](plugins/tymly-graphql-plugin/services/server.html) | No description! :-( |
| [sharepoint](plugins/tymly-sharepoint-plugin/services/sharepoint.html) | Adds Sharepoint support |
| [solr](plugins/tymly-solr-plugin/services/solr.html) | Adds Solr support |
| [statebox](plugins/tymly-core-plugin/services/statebox.html) | Runs state machines defined in Amazon States Language |
| [stateboxApi](plugins/tymly-express-plugin/services/statebox-api.html) | Exposes the core Tymly abilities (start, get, update and cancel) over a JWT-secured REST API |
| [storage](plugins/tymly-pg-plugin/services/storage.html) | Replaces the default in-memory storage solution with a Postgresql-backed alternative |
| [storage](plugins/tymly-core-plugin/services/storage.html) | This is the default in-memory storage service that ships with Tymly. Useful for testing and not much else. |
| [temp](plugins/tymly-core-plugin/services/temp.html) | Helps configure and manage a temporary folder for Tymly to use |
| [timestamp](plugins/tymly-core-plugin/services/timestamp.html) | Tymly Time Service! |
| [tymly](plugins/tymly-core-plugin/services/tymly.html) | Tymly Service |
| [userInfo](plugins/tymly-auth-auth0-plugin/services/user-info.html) | Auth0 Service |



## Cardscript

### Containers
### Elements
### Inputs
### Actions
