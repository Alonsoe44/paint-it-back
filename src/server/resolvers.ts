import ColorPaletteModel from "../database/models/ColorPalleteSchema";
import ColorPaletteInterface from "../interfaces/database/ColorpaletteInterface";

const resolver = {
  Query: {
    hello: () => "Hellow wold",
    getColorPalettes: async (
      _: any,
      { input }: any,
      ___: any,
      ctx: any
    ): Promise<ColorPaletteInterface[]> => {
      console.log(input.colorTemperature);
      return ColorPaletteModel.find();
    },
    getColorPalette: async (): Promise<ColorPaletteInterface> => {
      return {
        colorTemperature: "cold",
        colors: [],
        id: "3",
        name: "icosaedro",
      };
    },
  },

  //Mutation: {
  //createColorPalette: async (
  //thing: any,
  //i: any,
  //dont: any,
  //know: any
  //): Promise<ColorPaletteInterface> => {
  //console.log([thing, i, dont, know]);
  //return;
  //},
  //},
};

module.exports = resolver;
