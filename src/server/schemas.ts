import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String
    getColorPalettes: [ColorPalette!]
  }
  type ColorPalette {
    id: ID!
    name: String!
    colors: [String!]
  }
`;

export default typeDefs;
