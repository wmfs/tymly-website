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
| [tymly-cardscript-plugin](plugins/tymly-cardscript-plugin/) | Plugin which handles interactions to do with Cardscript |
| [tymly-cloudstorage-plugin](plugins/tymly-cloudstorage-plugin/) | Defines the cloudstorage service interface and provides state-resources around the service. Specific cloudstorage implementations provided by additional Tymly plugins. |
| [tymly-core-plugin](plugins/tymly-core-plugin/) | Provides low-level functions for Tymly |
| [tymly-crypto-plugin](plugins/tymly-crypto-plugin/) | A plugin to allow Tymly to perform encryption |
| [tymly-diaries-plugin](plugins/tymly-diaries-plugin/) | Plugin to handle bookings and appointment kind of things within Tymly framework |
| [tymly-enf-reg-plugin](plugins/tymly-enf-reg-plugin/) | Provides enf reg upload functionality to the Tymly framework |
| [tymly-etl-plugin](plugins/tymly-etl-plugin/) | A collection of states for helping with Extract, Transform and Load tasks. |
| [tymly-fastify-plugin](plugins/tymly-fastify-plugin/) | Exposes the Tymly framework via a Fastify web app. |
| [tymly-feature-flag-plugin](plugins/tymly-feature-flag-plugin/) | Feature flag support |
| [tymly-gov-uk-notify-plugin](plugins/tymly-gov-uk-notify-plugin/) | Allows sending notifications via sms or email using the GOV UK Notify service with Tymly framework. |
| [tymly-localfilestorage-plugin](plugins/tymly-localfilestorage-plugin/) | Implements a local filestorage provider for Tymly&#39;s cloudstorage plugin. |
| [tymly-notes-plugin](plugins/tymly-notes-plugin/) | Plugin to handle notes, which can be attached to arbitrary objects |
| [tymly-os-places-plugin](plugins/tymly-os-places-plugin/) | Provides OS Places API to the Tymly framework |
| [tymly-pg-plugin](plugins/tymly-pg-plugin/) | Replace Tymly&#39;s out-the-box memory storage with PostgreSQL |
| [tymly-rankings-plugin](plugins/tymly-rankings-plugin/) | Plugin which handles ranking of data for Tymly framework |
| [tymly-rbac-plugin](plugins/tymly-rbac-plugin/) | Plugin which provides role-based authentication |
| [tymly-relay-plugin](plugins/tymly-relay-plugin/) | Exposes the routes connecting to the data warehouse via the Tymly server. |
| [tymly-rest-client-plugin](plugins/tymly-rest-client-plugin/) | A REST API client for Tymly |
| [tymly-schedule-plugin](plugins/tymly-schedule-plugin/) | Provides state machine scheduling for the Tymly framework |
| [tymly-sharepoint-plugin](plugins/tymly-sharepoint-plugin/) | A plugin for accessing sharepoint from within Tymly |
| [tymly-shortcut-api-plugin](plugins/tymly-shortcut-api-plugin/) | Interactions with the Shortcut API |
| [tymly-solr-plugin](plugins/tymly-solr-plugin/) | Plugin which handles interaction with Apache Solr for Tymly framework |
| [tymly-wmfs-plugin](plugins/tymly-wmfs-plugin/) | Provides WMFS functions to the Tymly framework |


## Blueprint



### Component directories

| Directory | Description | Plugin |
| --------- | ----------- | ------ |
| `/card-templates` | One JSON file per Card | [tymly-cardscript-plugin](plugins/tymly-cardscript-plugin/)|
| `/functions` | Blueprints are predominantly declarative - preferring JSON definitions over hand-coded functions. But for those times when only code will do, blueprints can supply supplemental Javascript functions too. | [tymly-core-plugin](plugins/tymly-core-plugin/)|
| `/images` | A place to put images that can be served-up in Forms and similar | [tymly-fastify-plugin](plugins/tymly-fastify-plugin/)|
| `/message-templates` | One JSON file per message template | [tymly-gov-uk-notify-plugin](plugins/tymly-gov-uk-notify-plugin/)|
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
| [acknowledgeNotifications](plugins/tymly-cardscript-plugin/state-resources/acknowledge-notifications.html) | Acknowledges notifications for a user |
| [addAuth0Mapping](plugins/tymly-auth-auth0-plugin/state-resources/add-auth0-mapping.html) | Allows addition of an Auth0 Mapping |
| [addCryptoEntry](plugins/tymly-crypto-plugin/state-resources/add-crypto-entry.html) | Add a crypto value |
| [addDocs](plugins/tymly-solr-plugin/state-resources/add-docs.html) | Adds docs |
| [addNote](plugins/tymly-notes-plugin/state-resources/add-note.html) | No description! :-( |
| [applySettings](plugins/tymly-cardscript-plugin/state-resources/apply-settings.html) | Applies settings for a user |
| [archiveExecution](plugins/tymly-cardscript-plugin/state-resources/archive-execution.html) | Archive a completed execution. It&#39;s status is prefixed with ARCHIVED-. Primarily used to removed long-running tasks from the list of completed executions. |
| [auditTrail](plugins/tymly-pg-plugin/state-resources/audit-trail.html) | No description! :-( |
| [availableResources](plugins/tymly-core-plugin/state-resources/available-resources.html) | Returns a list of currently available resources |
| [availableStateMachines](plugins/tymly-core-plugin/state-resources/available-state-machines.html) | Returns a list of currently available state machines |
| [awaitingExternalInput](plugins/tymly-core-plugin/state-resources/awaiting-external-input.html) | Awaits for an external input to advance the state-machine |
| [awaitingHumanInput](plugins/tymly-cardscript-plugin/state-resources/awaiting-human-input.html) | Awaits the input of a human to advance the state-machine |
| [calculateMessageRates](plugins/tymly-gov-uk-notify-plugin/state-resources/calculate-message-rates.html) | No description! :-( |
| [cancelDiaryEntry](plugins/tymly-diaries-plugin/state-resources/cancel-diary-entry.html) | Cancel Diary Entry |
| [clearConfiguredRegistryKey](plugins/tymly-core-plugin/state-resources/clear-configured-registry-key.html) | Clears a registry specific value |
| [clearRegistryKey](plugins/tymly-core-plugin/state-resources/clear-registry-key.html) | Clears a registry key value |
| [configSetting](plugins/tymly-core-plugin/state-resources/config-setting.html) | Reads a config setting |
| [copyFileToLocalFolder](plugins/tymly-cloudstorage-plugin/state-resources/copy-file-to-local-folder.html) | Copies a remote file into a folder on the local file system |
| [copyFileToRemoteFolder](plugins/tymly-cloudstorage-plugin/state-resources/copy-file-to-remote-folder.html) | Copies a local file into a folder in remote storage |
| [createCustomMessageTemplate](plugins/tymly-gov-uk-notify-plugin/state-resources/create-custom-message-template.html) | No description! :-( |
| [createDiaryEntry](plugins/tymly-diaries-plugin/state-resources/create-diary-entry.html) | Create Diary Entry |
| [createNotification](plugins/tymly-cardscript-plugin/state-resources/create-notification.html) | Creates notification |
| [createRole](plugins/tymly-rbac-plugin/state-resources/create-role.html) | Creates an RBAC role |
| [createScheduledTask](plugins/tymly-schedule-plugin/state-resources/create-scheduled-task.html) | Create task |
| [createTodoEntry](plugins/tymly-cardscript-plugin/state-resources/create-todo-entry.html) | Creates a new todo entry.  Note that after creating the todo, the ResultPath object will have a property called idProperties, which will have a sub-property called id - which will hold the id of the newly created todo. |
| [decodeMaskingNumber](plugins/tymly-wmfs-plugin/state-resources/decode-masking-number.html) | No description! :-( |
| [deleteCacheItem](plugins/tymly-core-plugin/state-resources/delete-cache-item.html) | Delete item from cache within Tymly |
| [deleteCustomMessageTemplate](plugins/tymly-gov-uk-notify-plugin/state-resources/delete-custom-message-template.html) | No description! :-( |
| [deletingById](plugins/tymly-core-plugin/state-resources/deleting-by-id.html) | Deletes document by ID |
| [deletingCloudStorageFile](plugins/tymly-cloudstorage-plugin/state-resources/deleting-cloud-storage-file.html) | Deletes a cloud storage file |
| [deltaReindex](plugins/tymly-solr-plugin/state-resources/delta-reindex.html) | Performs a delta reindex |
| [editCustomMessageTemplate](plugins/tymly-gov-uk-notify-plugin/state-resources/edit-custom-message-template.html) | No description! :-( |
| [emitNotifyEvents](plugins/tymly-gov-uk-notify-plugin/state-resources/emit-notify-events.html) | Handle events via GOV UK Notify Service |
| [encodeUprn](plugins/tymly-wmfs-plugin/state-resources/encode-uprn.html) | No description! :-( |
| [ensureCloudStorageFolder](plugins/tymly-cloudstorage-plugin/state-resources/ensure-cloud-storage-folder.html) | Ensures the existence of a cloud storage folder |
| [exportingCsvDeltaFile](plugins/tymly-pg-plugin/state-resources/exporting-csv-delta-file.html) | Outputs change-only-update CSV files (or “delta” files) that contain all the necessary actions required to re-synchronize rows in a cloned table - just a thin wrapper over [pg-delta-file](https://www.npmjs.com/package/pg-delta-file) |
| [extractInputDateGdsTheme](plugins/tymly-cardscript-plugin/state-resources/extract-input-date-gds-theme.html) | Extracts Input.Date value for GDS theme |
| [fileDownloading](plugins/tymly-fastify-plugin/state-resources/file-downloading.html) | No description! :-( |
| [findCustomMessageTemplate](plugins/tymly-gov-uk-notify-plugin/state-resources/find-custom-message-template.html) | No description! :-( |
| [findScheduledExecutions](plugins/tymly-schedule-plugin/state-resources/find-scheduled-executions.html) | Find scheduled executions |
| [finding](plugins/tymly-core-plugin/state-resources/finding.html) | Finds documents with where clause from storage |
| [findingById](plugins/tymly-core-plugin/state-resources/finding-by-id.html) | Fetches a single document by its primary key values from storage and adds to a Tymly context |
| [findingCount](plugins/tymly-core-plugin/state-resources/finding-count.html) | Counts documents with where clause from storage |
| [findingOne](plugins/tymly-core-plugin/state-resources/finding-one.html) | Finds one document from storage |
| [flattenXmlFiles](plugins/tymly-etl-plugin/state-resources/flatten-xml-files.html) | Flatten XML Files |
| [fullReindex](plugins/tymly-solr-plugin/state-resources/full-reindex.html) | Performs a full reindex |
| [generateUuid](plugins/tymly-core-plugin/state-resources/generate-uuid.html) | Generate UUID (Long or short!) |
| [getActivityAssistantData](plugins/tymly-relay-plugin/state-resources/get-activity-assistant-data.html) | No description! :-( |
| [getAllAuth0UserById](plugins/tymly-auth-auth0-plugin/state-resources/get-all-auth0-user-by-id.html) | Gets all user data from auth0 by provided user id |
| [getAvailableDiarySlots](plugins/tymly-diaries-plugin/state-resources/get-available-diary-slots.html) | Get Available Diary Entry Slots |
| [getCacheItem](plugins/tymly-core-plugin/state-resources/get-cache-item.html) | Get item from cache within Tymly |
| [getCloudStorageContents](plugins/tymly-cloudstorage-plugin/state-resources/get-cloud-storage-contents.html) | Returns the contents of a cloud storage folder |
| [getConfiguredRegistryKey](plugins/tymly-core-plugin/state-resources/get-configured-registry-key.html) | Gets a specific registry key value |
| [getCryptoEntry](plugins/tymly-crypto-plugin/state-resources/get-crypto-entry.html) | Get a crypto value |
| [getCurrentValueFromSequence](plugins/tymly-pg-plugin/state-resources/get-current-value-from-sequence.html) | Gets current value from sequence |
| [getDataFromRestApi](plugins/tymly-rest-client-plugin/state-resources/get-data-from-rest-api.html) | Gets data from a rest API |
| [getEcrewData](plugins/tymly-relay-plugin/state-resources/get-ecrew-data.html) | No description! :-( |
| [getEmployeeByNumber](plugins/tymly-relay-plugin/state-resources/get-employee-by-number.html) | No description! :-( |
| [getEmployeeData](plugins/tymly-relay-plugin/state-resources/get-employee-data.html) | No description! :-( |
| [getEmployeeNameByNumber](plugins/tymly-relay-plugin/state-resources/get-employee-name-by-number.html) | No description! :-( |
| [getEmployeeNumberByEmail](plugins/tymly-relay-plugin/state-resources/get-employee-number-by-email.html) | No description! :-( |
| [getFavouriteStartableNames](plugins/tymly-cardscript-plugin/state-resources/get-favourite-startable-names.html) | Gets favourite startable names for a user |
| [getIncidentData](plugins/tymly-relay-plugin/state-resources/get-incident-data.html) | No description! :-( |
| [getMessageStatusViaService](plugins/tymly-gov-uk-notify-plugin/state-resources/get-message-status-via-service.html) | Get the status of a message sent via GOV UK Notify Service |
| [getNearestStation](plugins/tymly-wmfs-plugin/state-resources/get-nearest-station.html) | Gets nearest station for an x/y point |
| [getNextValueFromSequence](plugins/tymly-pg-plugin/state-resources/get-next-value-from-sequence.html) | Gets next value from sequence |
| [getNotifications](plugins/tymly-cardscript-plugin/state-resources/get-notifications.html) | Gets notifications for a user |
| [getRegistryKey](plugins/tymly-core-plugin/state-resources/get-registry-key.html) | Gets a registry key value |
| [getSettings](plugins/tymly-cardscript-plugin/state-resources/get-settings.html) | Gets settings for a user |
| [getTodoChanges](plugins/tymly-cardscript-plugin/state-resources/get-todo-changes.html) | Get a list of todo-list entries that need adding/removing from the client store |
| [getUserDashboardData](plugins/tymly-cardscript-plugin/state-resources/get-user-dashboard-data.html) | Get the necessary information to be render a personal dashboard for the user. |
| [getUserHistory](plugins/tymly-cardscript-plugin/state-resources/get-user-history.html) | Get the history of state machines the user has accessed. |
| [getUserRemit](plugins/tymly-cardscript-plugin/state-resources/get-user-remit.html) | Gets the user remit |
| [getWatchChoicesByStation](plugins/tymly-wmfs-plugin/state-resources/get-watch-choices-by-station.html) | No description! :-( |
| [getWatchedBoards](plugins/tymly-cardscript-plugin/state-resources/get-watched-boards.html) | Gets all watched boards for a user |
| [grantPermission](plugins/tymly-rbac-plugin/state-resources/grant-permission.html) | Grants permission to a user |
| [grantRoleMembership](plugins/tymly-rbac-plugin/state-resources/grant-role-membership.html) | Grants role membership |
| [importingCsvFiles](plugins/tymly-pg-plugin/state-resources/importing-csv-files.html) | Takes a specifically-named directory structure of CSV files and conjures bulk insert, update and delete statements and applies them to a PostgreSQL database - just a thin wrapper over [Supercopy](https://github.com/wmfs/tymly/tree/master/supercopy) |
| [launchStateMachine](plugins/tymly-core-plugin/state-resources/launch-state-machine.html) | Launches another state machine, but does not wait for it to complete. The output of this state-resource is the execution description of the launched state machine. The description of the parent state machine is given as input to the launched state machine so it can, for example, send heart beats back. |
| [listAuth0Mappings](plugins/tymly-auth-auth0-plugin/state-resources/list-auth0-mappings.html) | Allows listing of Auth0 Mappings |
| [listCustomTemplateRecipients](plugins/tymly-gov-uk-notify-plugin/state-resources/list-custom-template-recipients.html) | No description! :-( |
| [listLongRunningTasks](plugins/tymly-cardscript-plugin/state-resources/list-long-running-tasks.html) | No description! :-( |
| [listMessageTemplates](plugins/tymly-gov-uk-notify-plugin/state-resources/list-message-templates.html) | No description! :-( |
| [listRoles](plugins/tymly-rbac-plugin/state-resources/list-roles.html) | Lists roles |
| [logging](plugins/tymly-core-plugin/state-resources/logging.html) | Logs to the console via a template |
| [notesList](plugins/tymly-notes-plugin/state-resources/notes-list.html) | No description! :-( |
| [osAddressLookup](plugins/tymly-os-places-plugin/state-resources/os-address-lookup.html) | No description! :-( |
| [permissionsTree](plugins/tymly-rbac-plugin/state-resources/permissions-tree.html) | Returns a permission tree |
| [postDataToRestApi](plugins/tymly-rest-client-plugin/state-resources/post-data-to-rest-api.html) | Posts data to a rest API |
| [processingCsvFiles](plugins/tymly-etl-plugin/state-resources/processing-csv-files.html) | Smash CSV files into more manageable files based on column values - just a thin wrapper over [Smithereens](https://www.npmjs.com/package/smithereens) |
| [processingXmlFiles](plugins/tymly-etl-plugin/state-resources/processing-xml-files.html) | Takes an XML file and converts it to CSV |
| [reassignTodoEntries](plugins/tymly-cardscript-plugin/state-resources/reassign-todo-entries.html) | Reassign ToDo Entries |
| [refreshAll](plugins/tymly-rankings-plugin/state-resources/refresh-all.html) | Refreshes all associated databases |
| [refreshPermissions](plugins/tymly-rbac-plugin/state-resources/refresh-permissions.html) | Refreshes a users permissions |
| [refreshRanking](plugins/tymly-rankings-plugin/state-resources/refresh-ranking.html) | Regenerates a database view of ranked data |
| [refreshRiskScore](plugins/tymly-rankings-plugin/state-resources/refresh-risk-score.html) | Regenerates a risk score usin growth curve |
| [removeAuth0Mapping](plugins/tymly-auth-auth0-plugin/state-resources/remove-auth0-mapping.html) | Allows deletion of an Auth0 Mapping |
| [removeDocsByDocId](plugins/tymly-solr-plugin/state-resources/remove-docs-by-doc-id.html) | Remove SOLR Docs |
| [removeDocsByQuery](plugins/tymly-solr-plugin/state-resources/remove-docs-by-query.html) | Remove SOLR Docs |
| [removeRoleMembership](plugins/tymly-rbac-plugin/state-resources/remove-role-membership.html) | Removes role membership |
| [removeTodoEntries](plugins/tymly-cardscript-plugin/state-resources/remove-todo-entries.html) | Removes todos for a user |
| [resetCache](plugins/tymly-core-plugin/state-resources/reset-cache.html) | Reset cache within Tymly |
| [runFunction](plugins/tymly-core-plugin/state-resources/run-function.html) | Run function from a blueprint |
| [runStateMachine](plugins/tymly-core-plugin/state-resources/run-state-machine.html) | Run another state machine and wait for it to complete. The output of this state-resource is the output from the spawned state machine. |
| [search](plugins/tymly-solr-plugin/state-resources/search.html) | Performs a search |
| [sendTaskHeartbeat](plugins/tymly-core-plugin/state-resources/send-task-heartbeat.html) | Sends Task Heartbeat to another execution. |
| [sendTaskSuccess](plugins/tymly-core-plugin/state-resources/send-task-success.html) | Sends Task Success to another execution. |
| [sendingCustomMessageViaService](plugins/tymly-gov-uk-notify-plugin/state-resources/sending-custom-message-via-service.html) | No description! :-( |
| [sendingMessageViaService](plugins/tymly-gov-uk-notify-plugin/state-resources/sending-message-via-service.html) | Sending Mail or SMS via GOV UK Notify Service |
| [setClientMetaData](plugins/tymly-core-plugin/state-resources/set-client-meta-data.html) | No description! :-( |
| [setConfiguredRegistryKey](plugins/tymly-core-plugin/state-resources/set-configured-registry-key.html) | Sets a registry specific value |
| [setContextData](plugins/tymly-core-plugin/state-resources/set-context-data.html) | Sets the context data |
| [setFavouriteStartableNames](plugins/tymly-cardscript-plugin/state-resources/set-favourite-startable-names.html) | Sets favourite startable names for a user |
| [setRegistryKey](plugins/tymly-core-plugin/state-resources/set-registry-key.html) | Sets an arbitrary registry key value |
| [startScheduledTask](plugins/tymly-schedule-plugin/state-resources/start-scheduled-task.html) | Start task |
| [stopScheduledTask](plugins/tymly-schedule-plugin/state-resources/stop-scheduled-task.html) | Stop task |
| [storageSearch](plugins/tymly-core-plugin/state-resources/storage-search.html) | Paginated search across documents from storage |
| [synchronizingTable](plugins/tymly-pg-plugin/state-resources/synchronizing-table.html) | Takes the contents of one PostgreSQL table, applies a transformation function to each row and ensures a target table is kept in sync - just a thin wrapper over [pg-telepods](https://www.npmjs.com/package/pg-telepods) |
| [timestamp](plugins/tymly-core-plugin/state-resources/timestamp.html) | Generates a timestamp |
| [toggleFeatureFlag](plugins/tymly-feature-flag-plugin/state-resources/toggle-feature-flag.html) | No description! :-( |
| [unwatchBoard](plugins/tymly-cardscript-plugin/state-resources/unwatch-board.html) | Allows a user to unwatch a board |
| [updateDocsBySearchDoc](plugins/tymly-solr-plugin/state-resources/update-docs-by-search-doc.html) | Update SOLR Docs |
| [updateScheduledStateMachineConfig](plugins/tymly-schedule-plugin/state-resources/update-scheduled-state-machine-config.html) | Update state machine config |
| [updateScheduledTask](plugins/tymly-schedule-plugin/state-resources/update-scheduled-task.html) | Update task |
| [upserting](plugins/tymly-core-plugin/state-resources/upserting.html) | Perists a document to storage |
| [userIdFromEmail](plugins/tymly-auth-auth0-plugin/state-resources/user-id-from-email.html) | Converts email to Auth0 user ID |
| [watchBoard](plugins/tymly-cardscript-plugin/state-resources/watch-board.html) | Allows a user to watch a board |


## Cardscript

### Containers

| Icon | Type | Description |
| ---- | ---- | ----------- |
| <a href="cardscript/containers/action-set.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-set.svg')" alt="Relevant Cardscript icon"></a> | [ActionSet](cardscript/containers/action-set.html) | ActionSet allows actions to be displayed within a card. |
| <a href="cardscript/containers/collapsible.html"><img :src="$withBase('/cardscript-assets/icons/24dp/collapsible.svg')" alt="Relevant Cardscript icon"></a> | [Collapsible](cardscript/containers/collapsible.html) | A container which expands when clicked on to show a card. |
| <a href="cardscript/containers/column.html"><img :src="$withBase('/cardscript-assets/icons/24dp/column.svg')" alt="Relevant Cardscript icon"></a> | [Column](cardscript/containers/column.html) | Defines a container that is part of a ColumnSet. |
| <a href="cardscript/containers/column-set.html"><img :src="$withBase('/cardscript-assets/icons/24dp/column-set.svg')" alt="Relevant Cardscript icon"></a> | [ColumnSet](cardscript/containers/column-set.html) | ColumnSet divides a region into Columns, allowing elements to sit side-by-side. |
| <a href="cardscript/containers/container.html"><img :src="$withBase('/cardscript-assets/icons/24dp/container.svg')" alt="Relevant Cardscript icon"></a> | [Container](cardscript/containers/container.html) | Containers group items together. |
| <a href="cardscript/containers/image-set.html"><img :src="$withBase('/cardscript-assets/icons/24dp/image-set.svg')" alt="Relevant Cardscript icon"></a> | [ImageSet](cardscript/containers/image-set.html) | The ImageSet displays a collection of Images similar to a gallery. |
| <a href="cardscript/containers/tab.html"><img :src="$withBase('/cardscript-assets/icons/24dp/tab.svg')" alt="Relevant Cardscript icon"></a> | [Tab](cardscript/containers/tab.html) | Defines a container that is part of a TabSet. |
| <a href="cardscript/containers/tab-set.html"><img :src="$withBase('/cardscript-assets/icons/24dp/tab-set.svg')" alt="Relevant Cardscript icon"></a> | [TabSet](cardscript/containers/tab-set.html) | TabSet allows to display content through various tabs. |


### Elements
| Icon | Type | Description |
| ---- | ---- | ----------- |
| <a href="cardscript/elements/adaptive-card.html"><img :src="$withBase('/cardscript-assets/icons/24dp/adaptive-card.svg')" alt="Relevant Cardscript icon"></a> | [AdaptiveCard](cardscript/elements/adaptive-card.html) | Root element in an Adaptive Card. |
| <a href="cardscript/elements/address-block.html"><img :src="$withBase('/cardscript-assets/icons/24dp/address-block.svg')" alt="Relevant Cardscript icon"></a> | [AddressBlock](cardscript/elements/address-block.html) | Displays an address. |
| <a href="cardscript/elements/card-list.html"><img :src="$withBase('/cardscript-assets/icons/24dp/card-list.svg')" alt="Relevant Cardscript icon"></a> | [CardList](cardscript/elements/card-list.html) | A container which opens a modal when clicked on to show a card. |
| <a href="cardscript/elements/chip.html"><img :src="$withBase('/cardscript-assets/icons/24dp/chip.svg')" alt="Relevant Cardscript icon"></a> | [Chip](cardscript/elements/chip.html) | A chip to display some text. |
| <a href="cardscript/elements/fact.html"><img :src="$withBase('/cardscript-assets/icons/24dp/fact.svg')" alt="Relevant Cardscript icon"></a> | [Fact](cardscript/elements/fact.html) | Describes a Fact in a FactSet as a key/value pair. |
| <a href="cardscript/elements/fact-set.html"><img :src="$withBase('/cardscript-assets/icons/24dp/fact-set.svg')" alt="Relevant Cardscript icon"></a> | [FactSet](cardscript/elements/fact-set.html) | The FactSet element displays a series of facts (i.e. name/value pairs) in a tabular form. |
| <a href="cardscript/elements/graph.html"><img :src="$withBase('/cardscript-assets/icons/24dp/graph.svg')" alt="Relevant Cardscript icon"></a> | [Graph](cardscript/elements/graph.html) | Displays a graph. |
| <a href="cardscript/elements/image.html"><img :src="$withBase('/cardscript-assets/icons/24dp/image.svg')" alt="Relevant Cardscript icon"></a> | [Image](cardscript/elements/image.html) | Displays an image. |
| <a href="cardscript/elements/jumbotron.html"><img :src="$withBase('/cardscript-assets/icons/24dp/jumbotron.svg')" alt="Relevant Cardscript icon"></a> | [Jumbotron](cardscript/elements/jumbotron.html) | An element typically placed at the top of a card to describe its purpose. |
| <a href="cardscript/elements/list.html"><img :src="$withBase('/cardscript-assets/icons/24dp/list.svg')" alt="Relevant Cardscript icon"></a> | [List](cardscript/elements/list.html) | Displays information in List format. |
| <a href="cardscript/elements/map.html"><img :src="$withBase('/cardscript-assets/icons/24dp/map.svg')" alt="Relevant Cardscript icon"></a> | [Map](cardscript/elements/map.html) | Displays a map. |
| <a href="cardscript/elements/markup-table.html"><img :src="$withBase('/cardscript-assets/icons/24dp/markup-table.svg')" alt="Relevant Cardscript icon"></a> | [MarkupTable](cardscript/elements/markup-table.html) | Displays information in table format. |
| <a href="cardscript/elements/media.html"><img :src="$withBase('/cardscript-assets/icons/24dp/media.svg')" alt="Relevant Cardscript icon"></a> | [Media](cardscript/elements/media.html) | Displays a media player for audio or video content. |
| <a href="cardscript/elements/media-source.html"><img :src="$withBase('/cardscript-assets/icons/24dp/media-source.svg')" alt="Relevant Cardscript icon"></a> | [MediaSource](cardscript/elements/media-source.html) | Defines a source for a Media element |
| <a href="cardscript/elements/phase-banner.html"><img :src="$withBase('/cardscript-assets/icons/24dp/phase-banner.svg')" alt="Relevant Cardscript icon"></a> | [PhaseBanner](cardscript/elements/phase-banner.html) | Displays a banner highlighting a phase. |
| <a href="cardscript/elements/separator.html"><img :src="$withBase('/cardscript-assets/icons/24dp/separator.svg')" alt="Relevant Cardscript icon"></a> | [Separator](cardscript/elements/separator.html) | Displays a horizontal line. |
| <a href="cardscript/elements/table.html"><img :src="$withBase('/cardscript-assets/icons/24dp/table.svg')" alt="Relevant Cardscript icon"></a> | [Table](cardscript/elements/table.html) | Displays information in table format. |
| <a href="cardscript/elements/text-block.html"><img :src="$withBase('/cardscript-assets/icons/24dp/text-block.svg')" alt="Relevant Cardscript icon"></a> | [TextBlock](cardscript/elements/text-block.html) | Displays text, allowing control over font sizes, weight, and color. |
| <a href="cardscript/elements/tree.html"><img :src="$withBase('/cardscript-assets/icons/24dp/tree.svg')" alt="Relevant Cardscript icon"></a> | [Tree](cardscript/elements/tree.html) | Displays some information in a tree format. |
| <a href="cardscript/elements/tree-item.html"><img :src="$withBase('/cardscript-assets/icons/24dp/tree-item.svg')" alt="Relevant Cardscript icon"></a> | [TreeItem](cardscript/elements/tree-item.html) | Nodes belonging to a tree structure |



### Inputs
| Icon | Type | Description |
| ---- | ---- | ----------- |
| <a href="cardscript/inputs/input-address.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-address.svg')" alt="Relevant Cardscript icon"></a> | [Input.Address](cardscript/inputs/input-address.html) | Lets a user enter an address. |
| <a href="cardscript/inputs/input-api-lookup.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-api-lookup.svg')" alt="Relevant Cardscript icon"></a> | [Input.ApiLookup](cardscript/inputs/input-api-lookup.html) | Lets a user look up a value via an API. |
| <a href="cardscript/inputs/input-choice.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-choice.svg')" alt="Relevant Cardscript icon"></a> | [Input.Choice](cardscript/inputs/input-choice.html) | Describes a choice for use in a ChoiceSet. |
| <a href="cardscript/inputs/input-choice-set.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-choice-set.svg')" alt="Relevant Cardscript icon"></a> | [Input.ChoiceSet](cardscript/inputs/input-choice-set.html) | Allows a user to input a Choice. |
| <a href="cardscript/inputs/input-currency.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-currency.svg')" alt="Relevant Cardscript icon"></a> | [Input.Currency](cardscript/inputs/input-currency.html) | Lets a user enter a currency value. |
| <a href="cardscript/inputs/input-date.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-date.svg')" alt="Relevant Cardscript icon"></a> | [Input.Date](cardscript/inputs/input-date.html) | Lets a user choose a date. |
| <a href="cardscript/inputs/input-date-time.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-date-time.svg')" alt="Relevant Cardscript icon"></a> | [Input.DateTime](cardscript/inputs/input-date-time.html) | Lets a user enter a telephone number. |
| <a href="cardscript/inputs/input-email.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-email.svg')" alt="Relevant Cardscript icon"></a> | [Input.Email](cardscript/inputs/input-email.html) | Lets a user enter an email. |
| <a href="cardscript/inputs/input-file-upload.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-file-upload.svg')" alt="Relevant Cardscript icon"></a> | [Input.FileUpload](cardscript/inputs/input-file-upload.html) | Lets a user upload a file. |
| <a href="cardscript/inputs/input-gender.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-gender.svg')" alt="Relevant Cardscript icon"></a> | [Input.Gender](cardscript/inputs/input-gender.html) | Lets a user enter a gender. |
| <a href="cardscript/inputs/input-name.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-name.svg')" alt="Relevant Cardscript icon"></a> | [Input.Name](cardscript/inputs/input-name.html) | Lets a user enter a name. |
| <a href="cardscript/inputs/input-number.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-number.svg')" alt="Relevant Cardscript icon"></a> | [Input.Number](cardscript/inputs/input-number.html) | Allows a user to enter a number. |
| <a href="cardscript/inputs/input-signature.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-signature.svg')" alt="Relevant Cardscript icon"></a> | [Input.Signature](cardscript/inputs/input-signature.html) | Lets a user enter a signature. |
| <a href="cardscript/inputs/input-slider.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-slider.svg')" alt="Relevant Cardscript icon"></a> | [Input.Slider](cardscript/inputs/input-slider.html) | Lets a user enter value with a slider. |
| <a href="cardscript/inputs/input-telephone-number.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-telephone-number.svg')" alt="Relevant Cardscript icon"></a> | [Input.TelephoneNumber](cardscript/inputs/input-telephone-number.html) | Lets a user enter a telephone number. |
| <a href="cardscript/inputs/input-text.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-text.svg')" alt="Relevant Cardscript icon"></a> | [Input.Text](cardscript/inputs/input-text.html) | Lets a user enter text. |
| <a href="cardscript/inputs/input-time.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-time.svg')" alt="Relevant Cardscript icon"></a> | [Input.Time](cardscript/inputs/input-time.html) | Lets a user select a time. |
| <a href="cardscript/inputs/input-toggle.html"><img :src="$withBase('/cardscript-assets/icons/24dp/input-toggle.svg')" alt="Relevant Cardscript icon"></a> | [Input.Toggle](cardscript/inputs/input-toggle.html) | Lets a user choose between two options. |



### Actions
| Icon | Type | Description |
| ---- | ---- | ----------- |
| <a href="cardscript/actions/action-cancel.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-cancel.svg')" alt="Relevant Cardscript icon"></a> | [Action.Cancel](cardscript/actions/action-cancel.html) | Allows to cancel out of a form. |
| <a href="cardscript/actions/action-open-url.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-open-url.svg')" alt="Relevant Cardscript icon"></a> | [Action.OpenUrl](cardscript/actions/action-open-url.html) | When invoked, show the given url either by launching it in an external web browser or showing in-situ with embedded web browser. |
| <a href="cardscript/actions/action-push-card.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-push-card.svg')" alt="Relevant Cardscript icon"></a> | [Action.PushCard](cardscript/actions/action-push-card.html) | When invoked this will push the new card on the routing history. |
| <a href="cardscript/actions/action-refresh-remit.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-refresh-remit.svg')" alt="Relevant Cardscript icon"></a> | [Action.RefreshRemit](cardscript/actions/action-refresh-remit.html) | When invoked this will refresh the app's remit. |
| <a href="cardscript/actions/action-refresh-tasks.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-refresh-tasks.svg')" alt="Relevant Cardscript icon"></a> | [Action.RefreshTasks](cardscript/actions/action-refresh-tasks.html) | When invoked this will refresh the users tasks. |
| <a href="cardscript/actions/action-refresh-watching.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-refresh-watching.svg')" alt="Relevant Cardscript icon"></a> | [Action.RefreshWatching](cardscript/actions/action-refresh-watching.html) | When invoked this will refresh the users watched cards. |
| <a href="cardscript/actions/action-replace-card.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-replace-card.svg')" alt="Relevant Cardscript icon"></a> | [Action.ReplaceCard](cardscript/actions/action-replace-card.html) | When invoked this will replace the current entry in the history with the new route. |
| <a href="cardscript/actions/action-save.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-save.svg')" alt="Relevant Cardscript icon"></a> | [Action.Save](cardscript/actions/action-save.html) | Allows to save a form to continue later. |
| <a href="cardscript/actions/action-show-card.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-show-card.svg')" alt="Relevant Cardscript icon"></a> | [Action.ShowCard](cardscript/actions/action-show-card.html) | Defines an AdaptiveCard which is shown to the user when the button or link is clicked. |
| <a href="cardscript/actions/action-submit.html"><img :src="$withBase('/cardscript-assets/icons/24dp/action-submit.svg')" alt="Relevant Cardscript icon"></a> | [Action.Submit](cardscript/actions/action-submit.html) | Gathers input fields, merges with optional data field, and sends an event to the client. It is up to the client to determine how this data is processed. For example: With BotFramework bots, the client would send an activity through the messaging medium to the bot. |


## Services

| Directory | Description |
| --------- | ----------- |
| [audit](plugins/tymly-pg-plugin/services/audit.html) | PG Audit Service |
| [auth0GroupMapping](plugins/tymly-auth-auth0-plugin/services/auth0-group-mapping.html) | No description! :-( |
| [blueprintDocs](plugins/tymly-core-plugin/services/blueprint-docs.html) | Allows tracking of documents created via blueprints, so they don&#39;t get reverted when Tymly restarts |
| [caches](plugins/tymly-core-plugin/services/caches.html) | Adds [lru-cache](https://www.npmjs.com/package/lru-cache)-based caching to Tymly. Note defaults will be used if no `caches` configuration is provided. |
| [cards](plugins/tymly-cardscript-plugin/services/cards.html) | Exposes UI configuration |
| [categories](plugins/tymly-core-plugin/services/categories.html) | Provides a generic mechanism to help tag/classify search results, tasks, forms etc. |
| [cloudstorage](plugins/tymly-cloudstorage-plugin/services/cloudstorage.html) | Defines the cloudstorage service interface and provides state-resources around the service. Specific cloudstorage implementations provided by additional Tymly plugins. |
| [crypto](plugins/tymly-crypto-plugin/services/crypto.html) | Crypto Service |
| [dataWarehouseStorage](plugins/tymly-relay-plugin/services/data-warehouse-storage.html) | No description! :-( |
| [diaries](plugins/tymly-diaries-plugin/services/diaries.html) | Diary Service |
| [enfRegUpload](plugins/tymly-enf-reg-plugin/services/enf-reg-upload.html) | No description! :-( |
| [eventsApi](plugins/tymly-relay-plugin/services/events-api.html) | No description! :-( |
| [featureFlag](plugins/tymly-feature-flag-plugin/services/feature-flag.html) | No description! :-( |
| [fileDownloading](plugins/tymly-fastify-plugin/services/file-downloading.html) | No description! :-( |
| [fileUploading](plugins/tymly-fastify-plugin/services/file-uploading.html) | No description! :-( |
| [functions](plugins/tymly-core-plugin/services/functions.html) | Adds ability to run custom logic as defined in a blueprint |
| [incidentsApi](plugins/tymly-relay-plugin/services/incidents-api.html) | No description! :-( |
| [inventory](plugins/tymly-core-plugin/services/inventory.html) | Collates component information by scanning plugins. The results can then be used by tooling and documentation-generators |
| [jwtAuth](plugins/tymly-fastify-plugin/services/jwt-auth.html) | Provides JWT-based authentication capabilities |
| [localfilestorage](plugins/tymly-localfilestorage-plugin/services/localfilestorage.html) | Implements a local filestorage provider for the cloudstorage plugin. |
| [logger](plugins/tymly-core-plugin/services/logger.html) | Tymly Logger Service |
| [notify](plugins/tymly-gov-uk-notify-plugin/services/notify.html) | Provides functions for interacting with Gov UK Notify service |
| [osPlaces](plugins/tymly-os-places-plugin/services/os-places.html) | No description! :-( |
| [rankings](plugins/tymly-rankings-plugin/services/rankings.html) | Adds a ranking engine |
| [rbac](plugins/tymly-rbac-plugin/services/rbac.html) | Provides Rbac-based authorization capabilities |
| [registry](plugins/tymly-core-plugin/services/registry.html) | Provides a mechanism for states to refer to site-specific values |
| [schedule](plugins/tymly-schedule-plugin/services/schedule.html) | Tymly Schedule Service |
| [server](plugins/tymly-fastify-plugin/services/server.html) | Provides a CORS-enabled Fastify server. Includes serving of static assets as supplied via Blueprints |
| [sharepoint](plugins/tymly-sharepoint-plugin/services/sharepoint.html) | Adds Sharepoint support |
| [shortcutApi](plugins/tymly-shortcut-api-plugin/services/shortcut-api.html) | No description! :-( |
| [solr](plugins/tymly-solr-plugin/services/solr.html) | Adds Solr support |
| [statebox](plugins/tymly-core-plugin/services/statebox.html) | Runs state machines defined in Amazon States Language |
| [stateboxApi](plugins/tymly-fastify-plugin/services/statebox-api.html) | Exposes the core Tymly abilities (start, get, update and cancel) over a JWT-secured REST API |
| [storage](plugins/tymly-pg-plugin/services/storage.html) | Replaces the default in-memory storage solution with a Postgresql-backed alternative |
| [storage](plugins/tymly-core-plugin/services/storage.html) | This is the default in-memory storage service that ships with Tymly. Useful for testing and not much else. |
| [tasks](plugins/tymly-cardscript-plugin/services/tasks.html) | Collects information on long-running tasks |
| [temp](plugins/tymly-core-plugin/services/temp.html) | Helps configure and manage a temporary folder for Tymly to use |
| [timestamp](plugins/tymly-core-plugin/services/timestamp.html) | Tymly Time Service! |
| [tymly](plugins/tymly-core-plugin/services/tymly.html) | Tymly Service |
| [userInfo](plugins/tymly-auth-auth0-plugin/services/user-info.html) | Auth0 Service |
| [wmfs](plugins/tymly-wmfs-plugin/services/wmfs.html) | Service provides functions to get WMFS information from the database |


