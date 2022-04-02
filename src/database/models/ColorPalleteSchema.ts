const { Schema, model } = require("mongoose");

const PaletteSchema = new Schema({
  name: String,
  colors: [String],
});

const ColorPaletteModel = model(
  "ColorPalleteModel",
  PaletteSchema,
  "ColorsPalette"
);
module.exports = ColorPaletteModel;
