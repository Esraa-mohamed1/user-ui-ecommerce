const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);
