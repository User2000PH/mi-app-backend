require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 5000;

conectarDB();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando y conectada a MongoDB' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
