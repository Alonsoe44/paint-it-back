const { Schema, model } = require("mongoose");

const PaletteSchema = new Schema({
  name: String,
  colors: [String],
  colorTemperature: String,
});

const ColorPaletteModel = model(
  "ColorPalleteModel",
  PaletteSchema,
  "ColorsPalette"
);
export default ColorPaletteModel;
