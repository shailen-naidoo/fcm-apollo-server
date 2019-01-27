(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This is a super simple Apollo GraphQL bootstrap for handling your Firebase Cloud Messaging tasks using Firebase Cloud Functions")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For configuring things like "),a("code",[t._v("CORS")]),t._v(", refer to the "),a("strong",[t._v("apollo-server-cloud-functions")]),t._v(" "),a("a",{attrs:{href:"https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-cloud-functions",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),a("OutboundLink")],1)])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Refer to the Firebase Admin SDK for details on "),a("a",{attrs:{href:"https://firebase.google.com/docs/cloud-messaging/admin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firebase Cloud Messaging API"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[this._v("#")]),this._v(" Intro")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Now you don't have to setup a REST API to do this anymore")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Setup a Firebase Functions project and then you can install the "),s("code",[this._v("FCM Apollo Server")]),this._v(" library")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm i --save fcm-apollo-server\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Follow the below example to get your "),s("code",[this._v("FCM")]),this._v(" server up-and-running")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" functions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firebase-functions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FCMApolloServer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fcm-apollo-server"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" admin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"firebase-admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" serviceAccount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/serviceAccountKey.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nadmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  credential"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("credential"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serviceAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  databaseURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://<DATABASE_NAME>.firebaseio.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messaging "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("messaging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fcm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" functions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FCMApolloServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("messaging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("After deploying/serving the "),a("code",[t._v("fcm")]),t._v(" function, you get a GraphQL server that allows you to "),a("strong",[t._v("send messages")]),t._v(", "),a("strong",[t._v("subscribe to topics")]),t._v(", "),a("strong",[t._v("unsubscribe from topics")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"graphql-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphql-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" GraphQL Schema")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All the GraphQL actions are "),s("strong",[this._v("mutations")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"sending-a-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-message","aria-hidden":"true"}},[this._v("#")]),this._v(" Sending a message")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('mutation {\n  send(message: {\n    token: "<token>",\n    notification: {\n      title: "<title>",\n      body: "<body>"\n    }\n  })\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"subscribe-to-a-topic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-to-a-topic","aria-hidden":"true"}},[this._v("#")]),this._v(" Subscribe to a topic")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('mutation {\n  subscribeToTopic(tokens: ["<token>"], topic: "<your-topic>") {\n    successCount\n    failureCount\n    errors\n  }\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"unsubscribe-from-topic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribe-from-topic","aria-hidden":"true"}},[this._v("#")]),this._v(" Unsubscribe from topic")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('mutation {\n  unsubscribeFromTopic(tokens: ["<token>"], topic: "<your-topic>") {\n    successCount\n    failureCount\n    errors\n  }\n}\n')])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);