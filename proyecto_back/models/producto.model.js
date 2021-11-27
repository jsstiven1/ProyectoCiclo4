const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductoSchema = new Schema({
  nombre: { type: String, required: true, max: 60 },
  descripcion: { type: String, required: false, max: 680 },
  imagen: { type: String, required: false, max: 900 },
  referencia: { type: String, required: true, max: 150 },
  genero: { type: String, required: true, max: 60 },
  lote: { type: String, required: true, max: 150 },
  precio: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model("productos", ProductoSchema);
