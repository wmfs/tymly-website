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


# sendingMessageViaService


::: tip State Resource
This is a [State Resource](/guide/#state-resources) as provided by the **[tymly-gov-uk-notify-plugin](/reference/plugins/tymly-gov-uk-notify-plugin/)** plugin.
:::

## Purpose

Sending Mail or SMS via GOV UK Notify Service

## Usage

### Example

``` json
{
  "SendingMailViaService": {
    "Type": "Task",
    "Resource": "module:sendingMessageViaService",
    "ResourceConfig": {
      "templateId": "49bd6ec4-cd8c-4859-b817-80b2385d071e",
      "messageType": "mail"
    }
  }
}
```

``` json
{
  "type": "object",
  "properties": {
    "templateId": {
      "type": "string",
      "description": "The ID of the template for the message"
    },
    "messageType": {
      "type": "string",
      "description": "The type of message to be sent (sms or mail)"
    }
  },
  "required": [
    "messageType",
    "templateId"
  ]
}
```

## Links

* [State Resource class on GitHub]()

``` json
{
  "name": "tymly-gov-uk-notify-plugin",
  "nameCamel": "tymlyGovUkNotifyPlugin",
  "packageJson": {
    "name": "@wmfs/tymly-gov-uk-notify-plugin",
    "version": "0.0.0-semantically-rleased",
    "description": "Allows sending notifications via sms or email using the GOV UK Notify service with Tymly framework.",
    "homepage": "https://github.com/wmfs/tymly-gov-uk-notify-plugin#readme",
    "author": "West Midlands Fire Service",
    "keywords": [
      "tymly",
      "plugin",
      "notifications",
      "alerting",
      "alerts",
      "notify",
      "GOV UK"
    ],
    "license": "MIT",
    "repository": {
      "type": "git",
      "url": "https://github.com/wmfs/tymly-gov-uk-notify-plugin.git"
    },
    "bugs": {
      "url": "https://github.com/wmfs/tymly-gov-uk-notify-plugin/issues"
    },
    "main": "./lib/index.js",
    "dependencies": {
      "notifications-node-client": "4.5.2"
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
      "@wmfs/tymly": "1.75.0"
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
  "version": "0.0.0-semantically-rleased",
  "services": [],
  "stateResources": [
    {
      "name": "get-message-status-via-service",
      "nameCamel": "getMessageStatusViaService",
      "pluginName": "tymly-gov-uk-notify-plugin",
      "docs": {
        "description": "Get the status of a message sent via GOV UK Notify Service",
        "example": {
          "GetMessageStatus": {
            "Type": "Task",
            "Resource": "module:getMessageStatusViaService"
          }
        }
      },
      "schema": {
        "type": "object",
        "properties": {},
        "required": []
      },
      "apiDocs": "<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n"
    },
    {
      "name": "sending-message-via-service",
      "nameCamel": "sendingMessageViaService",
      "pluginName": "tymly-gov-uk-notify-plugin",
      "docs": {
        "description": "Sending Mail or SMS via GOV UK Notify Service",
        "example": {
          "SendingMailViaService": {
            "Type": "Task",
            "Resource": "module:sendingMessageViaService",
            "ResourceConfig": {
              "templateId": "49bd6ec4-cd8c-4859-b817-80b2385d071e",
              "messageType": "mail"
            }
          }
        }
      },
      "schema": {
        "type": "object",
        "properties": {
          "templateId": {
            "type": "string",
            "description": "The ID of the template for the message"
          },
          "messageType": {
            "type": "string",
            "description": "The type of message to be sent (sms or mail)"
          }
        },
        "required": [
          "messageType",
          "templateId"
        ]
      },
      "apiDocs": "<!-- Generated by documentation.js. Update this documentation by updating the source code. -->\n"
    }
  ]
}
```

