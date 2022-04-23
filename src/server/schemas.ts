import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String
    getColorPalettes(input: ColorPaletteInput): [ColorPalette]!
    getColorPalette(input: ColorPaletteInput): ColorPalette
  }

  type ColorPalette {
    id: ID!
    name: String!
    colors: [String!]
    colorTemperature: String
  }

  input ColorPaletteInput {
    colorTemperature: String
    id: String
  }
`;

export default typeDefs;
