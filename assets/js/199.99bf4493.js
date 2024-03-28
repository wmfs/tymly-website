(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{481:function(t,e,s){"use strict";s.r(e);var r=s(14),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"importingcsvfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#importingcsvfiles"}},[t._v("#")]),t._v(" importingCsvFiles")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("State Resource")]),t._v(" "),e("p",[t._v("This is a "),e("RouterLink",{attrs:{to:"/guide/#state-resources"}},[t._v("State Resource")]),t._v(" as provided by the "),e("strong",[e("RouterLink",{attrs:{to:"/reference/plugins/tymly-pg-plugin/"}},[t._v("tymly-pg-plugin")])],1),t._v(" plugin.")],1)]),t._v(" "),e("h2",{attrs:{id:"purpose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),e("p",[t._v("Takes a specifically-named directory structure of CSV files and conjures bulk insert, update and delete statements and applies them to a PostgreSQL database - just a thin wrapper over "),e("a",{attrs:{href:"https://github.com/wmfs/tymly/tree/master/supercopy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supercopy"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"importingCsvFiles"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headerColumnNamePkPrefix"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"topDownTableOrder"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"addressbase_holding"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("h3",{attrs:{id:"optional-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-properties"}},[t._v("#")]),t._v(" Optional properties")]),t._v(" "),e("h4",{attrs:{id:"headercolumnnamepkprefix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headercolumnnamepkprefix"}},[t._v("#")]),t._v(" "),e("code",[t._v("headerColumnNamePkPrefix")])]),t._v(" "),e("p",[t._v("Used to denote primary key columns when dealing with update/upsert files. Please see the "),e("a",{attrs:{href:"https://github.com/wmfs/tymly/tree/master/supercopy#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),e("OutboundLink")],1),t._v(" section in "),e("a",{attrs:{href:"https://github.com/wmfs/tymly/tree/master/supercopy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supercopy"),e("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("string")])])]),t._v(" "),e("hr"),t._v(" "),e("h4",{attrs:{id:"topdowntableorder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#topdowntableorder"}},[t._v("#")]),t._v(" "),e("code",[t._v("topDownTableOrder")])]),t._v(" "),e("p",[t._v("Used to resolve foreign-key constraint issues - will be deprecated in favour of something more automatic. Please see the "),e("a",{attrs:{href:"https://github.com/wmfs/tymly/tree/master/supercopy#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),e("OutboundLink")],1),t._v(" section in "),e("a",{attrs:{href:"https://github.com/wmfs/tymly/tree/master/supercopy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supercopy"),e("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("code",[t._v("array")])])]),t._v(" "),e("h2",{attrs:{id:"links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:""}},[t._v("State Resource class on GitHub")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);