import { ApolloServerBase } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schemas";
const resolvers = require("./resolvers");

const apolloServer: ApolloServerBase = new ApolloServer({
  typeDefs,
  resolvers,
});

export default apolloServer;
