const cSchema = require('../models/user');

// Obtener todos los usuarios ordenados por puntaje
const getUsers = async (req, res) => {
  try {
    const USERS = await cSchema.find({}).sort({ score: -1 });
    res.status(200).json(USERS);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Agregar un nuevo usuario
const postUser = async (req, res) => {
  const newUser = new cSchema(req.body);

  try {
    const USER = await newUser.save();
    res.status(200).json(USER);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  getUsers,
  postUser
}
