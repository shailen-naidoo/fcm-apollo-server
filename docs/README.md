# Intro

This is a super simple Apollo GraphQL bootstrap for handling your Firebase Cloud Messaging tasks using Firebase Cloud Functions

::: tip
Now you don't have to setup a REST API to do this anymore
:::

## Usage

Setup a Firebase Functions project and then you can install the `FCM Apollo Server` library

```
npm i --save fcm-apollo-server
```

Follow the below example to get your `FCM` server up-and-running

```javascript
const functions = require("firebase-functions");
const { FCMApolloServer } = require("fcm-apollo-server");
const admin = require("firebase-admin");

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

const messaging = admin.messaging();

exports.fcm = functions.https.onRequest(FCMApolloServer(messaging).createHandler());
```

After deploying/serving the `fcm` function, you get a GraphQL server that allows you to **send messages**, **subscribe to topics**, **unsubscribe from topics**

::: tip
For configuring things like `CORS`, refer to the **apollo-server-cloud-functions** [documentation](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-cloud-functions)
:::

### GraphQL Schema

All the GraphQL actions are **mutations**

#### Sending a message 

```
mutation {
  send(message: {
    token: "<token>",
    notification: {
      title: "<title>",
      body: "<body>"
    }
  })
}
```

#### Subscribe to a topic

```
mutation {
  subscribeToTopic(tokens: ["<token>"], topic: "<your-topic>") {
    successCount
    failureCount
    errors
  }
}
```

#### Unsubscribe from topic

```
mutation {
  unsubscribeFromTopic(tokens: ["<token>"], topic: "<your-topic>") {
    successCount
    failureCount
    errors
  }
}
```

::: tip 
Refer to the Firebase Admin SDK for details on [Firebase Cloud Messaging API](https://firebase.google.com/docs/cloud-messaging/admin/)
:::