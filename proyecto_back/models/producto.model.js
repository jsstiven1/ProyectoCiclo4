const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductoSchema = new Schema({
  nombre_p: { type: String, required: true, max: 60 },
  descripcion: { type: String, required: false, max: 680 },
  imagen: { type: String, required: false, max: 800 },
  referencia: { type: String, required: true, max: 150 },
  genero: { type: String, required: true, max: 60 },
  lote: { type: String, required: true, max: 150 },
  precio: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model("productos", ProductoSchema);
