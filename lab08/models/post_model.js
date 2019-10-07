const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/blog');

const schema_post = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    created_at: { type: Date, require: true }
});

module.exports = mongoose.model('post', schema_post, 'post');