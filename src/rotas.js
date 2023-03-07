const express = require('express');
const contas = require('./controladores/contas')

const rotas = express();

rotas.get('/contas', contas.listarContas);
rotas.post('/contas', contas.criarConta);

module.exports = rotas;