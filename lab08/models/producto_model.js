const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

let schema_productos = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    imagen: { type: String },
    precio: String
});

module.exports = mongoose.model('productos', schema_productos, 'productos');