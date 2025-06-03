const mongoose = require('mongoose');

const DireccionSchema = new mongoose.Schema({
  zip: String,
  street: String,
  external: String,
  internal: String,
  neighborhood: String,
  city: String,
  municipality: String,
  state: String,
  country: String
});

const ClienteSchema = new mongoose.Schema({
  legal_name: { type: String, required: true },
  rfc: { type: String, required: true },
  email: { type: String, required: true },
  address: DireccionSchema
});

module.exports = mongoose.model('Cliente', ClienteSchema);