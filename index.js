const { ApolloServer, gql } = require("apollo-server-cloud-functions");

function FCMApolloServer(messaging) {
  const Query = gql`
    type Query {
      _: Boolean
    }
  `;

  const Mutation = gql`
    type Mutation {
      _: Boolean
    }
  `;

  const Send = gql`
    extend type Mutation {
      send(message: Message!): ID
    }

    input Notification {
      title: String
      body: String
    }

    input Message {
      token: ID
      notification: Notification
    }
  `;

  const SubscribeToTopic = gql`
    extend type Mutation {
      subscribeToTopic(tokens: [String!]!,topic: String!): subscribeToTopicResponse
    }

    type subscribeToTopicResponse {
      successCount: Int
      failureCount: Int
      errors: [Int]
    }
  `
  ;
  const UnsubscribeFromTopic = gql`
    extend type Mutation {
      unsubscribeFromTopic(tokens: [String!]!,topic: String!): unsubscribeFromTopicResponse
    }

    type unsubscribeFromTopicResponse {
      successCount: Int
      failureCount: Int
      errors: [Int]
    }
  `;

  return new ApolloServer({
    playground: true,
    typeDefs: [Query,Mutation,Send,SubscribeToTopic,UnsubscribeFromTopic],
    resolvers: {
      Query: {
    
      }, 
      Mutation: {
        async send(_,{ message }) {
          return await messaging.send(message);
        },
        async subscribeToTopic(_,{ tokens, topic }) {
          return await messaging.subscribeToTopic(tokens,topic);
        },
        async unsubscribeFromTopic(_,{ tokens, topic }) {
          return await messaging.unsubscribeFromTopic(tokens,topic);
        }
      }
    }
  });
}

module.exports = { FCMApolloServer }