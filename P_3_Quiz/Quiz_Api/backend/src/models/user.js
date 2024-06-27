const mongoose = require('mongoose');

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
