require('dotenv').config();
const express = require('express');
const cors = require('cors');
const report = require('./src/middlewares/report');

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use(report);



app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Bienvenido a SoftJobs');
});

app.use('/', authRoutes);
app.use('/', userRoutes);

module.exports = app;