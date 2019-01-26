# FCM Apollo Server

This is a super simple Apollo GraphQL implementation for handling your Firebase Cloud Messaging tasks using Firebase Cloud Functions

## What can you do 😎

* Send Messages
* Subscribe to Topics
* Unsubscribe to Topics

## Usage

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

After deploying/serving the `fcm` function, you get a GraphQL server that allows you to **send messages**,**subscribe to topics**, **unsubscribe from topics**

### GraphQL Schema

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