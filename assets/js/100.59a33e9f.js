(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{379:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"watchboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watchboard"}},[t._v("#")]),t._v(" watchBoard")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("State Resource")]),t._v(" "),a("p",[t._v("This is a "),a("RouterLink",{attrs:{to:"/guide/#state-resources"}},[t._v("State Resource")]),t._v(" as provided by the "),a("strong",[a("RouterLink",{attrs:{to:"/reference/plugins/tymly-cardscript-plugin/"}},[t._v("tymly-cardscript-plugin")])],1),t._v(" plugin.")],1)]),t._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),a("p",[t._v("Allows a user to watch a board")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WatchBoard"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Task"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Resource"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module:watchBoard"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"InputPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Next"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DeltaReindex"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"optional-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-properties"}},[t._v("#")]),t._v(" Optional properties")]),t._v(" "),a("h4",{attrs:{id:"statemachinename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statemachinename"}},[t._v("#")]),t._v(" "),a("code",[t._v("stateMachineName")])]),t._v(" "),a("p",[t._v("The name of the state-machine which conjured the currently rendered board.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("string")])])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" "),a("code",[t._v("title")])]),t._v(" "),a("p",[t._v("The title identifying this board-instance - would be available on any rendered board.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("string")])])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" "),a("code",[t._v("description")])]),t._v(" "),a("p",[t._v("Some summary content - most likely available on the rendered board or search result etc. Could even be user-editable to help better recognise the reason the board was watched in the first place.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("string")])])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" "),a("code",[t._v("key")])]),t._v(" "),a("p",[t._v("A key/value pair object describing the primary key of the currently displayed board - perhaps derived from the launches object which caused the board to be rendered.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("object")])])]),t._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("State Resource class on GitHub")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);