const express = require('express');
//const cSchema = require('../models/user');
const router = express.Router();

const { getUsers, postUser } = require('../controllers/controller');

/*
// Ruta POST para agregar un nuevo usuario
router.post('/user', (req, res) => {
  const newC = new cSchema(req.body);
  newC.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});*/

router.post('/user',postUser);

// Ruta GET para consultar todos los usuarios
/*router.get('/user', (req, res) => {
  cSchema.find({}).sort({score:-1})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});*/

router.get('/user',getUsers);


module.exports = router;








/*

// Ruta GET para consultar un usuario por ID
router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  cSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Ruta PUT para actualizar un usuario
router.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { age } = req.body; // dato a actualizar
  cSchema.updateOne({ _id: id }, { $set: { age } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Ruta DELETE para eliminar un usuario por nombre
router.delete('/user', (req, res) => {
  const { name } = req.body; // Obtener el nombre desde el cuerpo de la solicitud
  cSchema.findOneAndDelete({ name })
    .then((data) => {
      if (data) {
        res.json({ message: 'Usuario eliminado', data });
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    })
    .catch((error) => res.status(500).json({ message: error }));
});



*/


