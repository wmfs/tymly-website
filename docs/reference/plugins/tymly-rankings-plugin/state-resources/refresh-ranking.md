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


# refreshRanking


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-rankings-plugin](/reference/plugins/tymly-rankings-plugin/)** plugin.
:::

## Purpose

Regenerates a database view of ranked data

## Usage

### Example

``` json
{
  "RefreshRanking": {
    "Type": "Task",
    "Resource": "module:refreshRanking",
    "ResourceConfig": {
      "schema": "test",
      "category": "factory"
    }
  }
}
```

``` json
{
  "type": "object",
  "properties": {
    "schema": {
      "type": "string",
      "description": "The schema to refresh the ranking within"
    },
    "category": {
      "type": "string",
      "description": "Identifies the property type to refresh e.g. factory, hospital etc."
    }
  }
}
```

## Links

* [State Resource class on GitHub]()

``` json
{
  "name": "tymly-rankings-plugin",
  "nameCamel": "tymlyRankingsPlugin",
  "packageJson": {
    "name": "@wmfs/tymly-rankings-plugin",
    "version": "0.0.0-semantically-released",
    "description": "Plugin which handles ranking of data for Tymly framework",
    "homepage": "https://github.com/wmfs/tymly-rankings-plugin#readme",
    "author": "West Midlands Fire Service",
    "keywords": [
      "tymly",
      "plugin",
      "ranking"
    ],
    "license": "MIT",
    "repository": {
      "type": "git",
      "url": "https://github.com/wmfs/tymly-rankings-plugin.git"
    },
    "bugs": {
      "url": "https://github.com/wmfs/tymly-rankings-plugin/issues"
    },
    "main": "./lib/index.js",
    "dependencies": {
      "boom": "7.2.2",
      "debug": "4.1.0",
      "distributions": "1.1.0",
      "lodash": "4.17.11",
      "moment": "2.22.2",
      "process": "0.11.10",
      "request": "2.88.0",
      "stats-lite": "2.2.0"
    },
    "devDependencies": {
      "chai": "4.2.0",
      "codecov": "3.1.0",
      "conventional-changelog-metahub": "2.0.2",
      "cz-conventional-changelog": "2.1.0",
      "mocha": "5.2.0",
      "nyc": "13.1.0",
      "semantic-release": "15.13.1",
      "standard": "12.0.1",
      "@semantic-release/changelog": "3.0.1",
      "@semantic-release/git": "7.0.6",
      "@wmfs/hl-pg-client": "1.10.0",
      "@wmfs/tymly": "1.75.0",
      "@wmfs/tymly-pg-plugin": "1.113.0"
    },
    "scripts": {
      "lint": "standard",
      "test": "nyc mocha && standard",
      "coverage": "nyc report --reporter=text-lcov > coverage.lcov && codecov",
      "semantic-release": "semantic-release"
    },
    "config": {
      "commitizen": {
        "path": "cz-conventional-changelog"
      }
    },
    "publishConfig": {
      "access": "public"
    }
  },
  "version": "0.0.0-semantically-released",
  "services": [
    {
      "name": "rankings",
      "nameCamel": "rankings",
      "pluginName": "tymly-rankings-plugin",
      "docs": {
        "description": "Adds a ranking engine",
        "blueprintDirs": {
          "rankings": "Each JSON file here will help configure everything required to rank a set of documents by a score derived from a variety of sources"
        }
      },
      "apiDocs": "<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n",
      "schema": "Service Schema not found",
      "bootBefore": "Boot before property not found",
      "bootAfter": [
        "registry",
        "storage"
      ],
      "refProperties": "Ref properties not found"
    }
  ],
  "stateResources": [
    {
      "name": "refresh-all",
      "nameCamel": "refreshAll",
      "pluginName": "tymly-rankings-plugin",
      "docs": {
        "description": "No description! :-("
      },
      "schema": {
        "type": "object",
        "properties": {}
      },
      "apiDocs": "<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n"
    },
    {
      "name": "refresh-ranking",
      "nameCamel": "refreshRanking",
      "pluginName": "tymly-rankings-plugin",
      "docs": {
        "description": "Regenerates a database view of ranked data",
        "example": {
          "RefreshRanking": {
            "Type": "Task",
            "Resource": "module:refreshRanking",
            "ResourceConfig": {
              "schema": "test",
              "category": "factory"
            }
          }
        }
      },
      "schema": {
        "type": "object",
        "properties": {
          "schema": {
            "type": "string",
            "description": "The schema to refresh the ranking within"
          },
          "category": {
            "type": "string",
            "description": "Identifies the property type to refresh e.g. factory, hospital etc."
          }
        }
      },
      "apiDocs": "<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n"
    },
    {
      "name": "refresh-risk-score",
      "nameCamel": "refreshRiskScore",
      "pluginName": "tymly-rankings-plugin",
      "docs": {
        "description": "Regenerates a risk score usin growth curve",
        "example": {
          "RefreshRiskScore": {
            "Type": "Task",
            "Resource": "module:refreshRiskScore",
            "ResourceConfig": {
              "schema": "test",
              "category": "factory"
            }
          }
        }
      },
      "schema": {
        "type": "object",
        "properties": {
          "schema": {
            "type": "string",
            "description": "The schema to refresh the ranking within"
          },
          "category": {
            "type": "string",
            "description": "Identifies the property type to refresh e.g. factory, hospital etc."
          }
        }
      },
      "apiDocs": "<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n"
    }
  ]
}
```

