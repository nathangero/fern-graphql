import { https } from "firebase-functions";
import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

// TODO? authMiddleware could be linked to firebase auth
app.use('/graphql', expressMiddleware(server, {
  // context: authMiddleware
}));

const graphql = https.onRequest(app);
module.exports = graphql;
