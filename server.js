const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb+srv://dba:dba@cluster0-bf6me.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

//Importa model usando lib require-dir
requireDir('./src/models/');

//Rotas
app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3001);