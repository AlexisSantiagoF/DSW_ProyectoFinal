const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  claveProducto: { type: String, required: true },
  claveUnica: { type: String, required: true }
});

module.exports = mongoose.model('Producto', ProductoSchema);