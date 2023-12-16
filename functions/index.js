const functions = require("firebase-functions");
const { ApolloServer } = require('apollo-server-cloud-functions');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const admin = require("firebase-admin");
require('dotenv').config();

const serviceAccount = require("./fern-graphql-tester-service.js")

const config = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: process.env.PROJECT_KEY,
  projectId: process.env.PROJECT_ID,
  authDomain: process.env.PROJECT_DOMAIN,
  databaseURL: process.env.PROJECT_URL,
}
admin.initializeApp(config);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// Must call server.createHandler() inside of functions.https.onRequest() to work
exports.graphql = functions.https.onRequest(server.createHandler());