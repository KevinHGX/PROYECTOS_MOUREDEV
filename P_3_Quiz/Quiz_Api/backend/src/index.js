const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const userRoutes = require('./routes/Users');
const app = express();

// Middleware para manejar JSON
app.use(express.json());

//cors
app.use(cors());

// Usar las rutas definidas en routes/Users.js
app.use('/api', userRoutes);

function Main() {

  // Ruta base para probar que el servidor está funcionando
  app.get('/', (req, res) => {
    res.send('Welcome to my API');
  });

  // Conectar a MongoDB Atlas
  mongoose.connect(process.env.MONGODB_URI, { dbName: "Users" })
    .then(() => {
      console.log('Connected to MongoDB Atlas');
      // Iniciar el servidor después de la conexión exitosa
      app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`);
      });
    })
    .catch((error) => console.log(error));
}

Main();
