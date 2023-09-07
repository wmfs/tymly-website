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


# tymly-cardscript-plugin

::: tip Description
Plugin which handles interactions to do with Cardscript
:::

## Links

* [Github repository](https://github.com/wmfs/tymly-cardscript-plugin#readme)
* [NPM package](https://www.npmjs.com/package/@wmfs/tymly-cardscript-plugin)


## State Resources
| Name | Description |
| ---- | ----------- |
| [acknowledgeNotifications](state-resources/acknowledge-notifications.html) | Acknowledges notifications for a user |
| [applySettings](state-resources/apply-settings.html) | Applies settings for a user |
| [archiveExecution](state-resources/archive-execution.html) | Archive a completed execution. It&#39;s status is prefixed with ARCHIVED-. Primarily used to removed long-running tasks from the list of completed executions. |
| [awaitingHumanInput](state-resources/awaiting-human-input.html) | Awaits the input of a human to advance the state-machine |
| [createNotification](state-resources/create-notification.html) | Creates notification |
| [createTodoEntry](state-resources/create-todo-entry.html) | Creates a new todo entry.  Note that after creating the todo, the ResultPath object will have a property called idProperties, which will have a sub-property called id - which will hold the id of the newly created todo. |
| [extractInputDateGdsTheme](state-resources/extract-input-date-gds-theme.html) | Extracts Input.Date value for GDS theme |
| [getFavouriteStartableNames](state-resources/get-favourite-startable-names.html) | Gets favourite startable names for a user |
| [getNotifications](state-resources/get-notifications.html) | Gets notifications for a user |
| [getSettings](state-resources/get-settings.html) | Gets settings for a user |
| [getTodoChanges](state-resources/get-todo-changes.html) | Get a list of todo-list entries that need adding/removing from the client store |
| [getUserDashboardData](state-resources/get-user-dashboard-data.html) | Get the necessary information to be render a personal dashboard for the user. |
| [getUserHistory](state-resources/get-user-history.html) | Get the history of state machines the user has accessed. |
| [getUserRemit](state-resources/get-user-remit.html) | Gets the user remit |
| [getWatchedBoards](state-resources/get-watched-boards.html) | Gets all watched boards for a user |
| [listLongRunningTasks](state-resources/list-long-running-tasks.html) | No description! :-( |
| [reassignTodoEntries](state-resources/reassign-todo-entries.html) | Reassign ToDo Entries |
| [removeTodoEntries](state-resources/remove-todo-entries.html) | Removes todos for a user |
| [setFavouriteStartableNames](state-resources/set-favourite-startable-names.html) | Sets favourite startable names for a user |
| [unwatchBoard](state-resources/unwatch-board.html) | Allows a user to unwatch a board |
| [watchBoard](state-resources/watch-board.html) | Allows a user to watch a board |





## Blueprint directories
| Directory | Description |
| --------- | ----------- |
| `/card-templates` | One JSON file per Card |




## Services
| Name | Description |
| ---- | ----------- |
| [cards](services/cards.html) | Exposes UI configuration |
| [tasks](services/tasks.html) | Collects information on long-running tasks |


