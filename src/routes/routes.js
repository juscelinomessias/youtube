const express = require('express');
const { criarUsuariosController } = require('../controllers/usuarios/criarUsuariosController');
const { listarUsuariosController } = require('../controllers/usuarios/listarUsuariosController');
const { criarVideosController } = require('../controllers/videos/criarVideosController');
const { listarVideosController } = require('../controllers/videos/listarVideosController');
const { logarUsuariosController } = require('../controllers/usuarios/logarUsuariosController');
const { verificarLogin } = require('../middleware/verificarLogin');

const rotas = express();

rotas.post('/usuarios', criarUsuariosController);
rotas.get('/usuarios', listarUsuariosController);
rotas.post('/logar', logarUsuariosController);

rotas.use(verificarLogin);

rotas.post('/videos', criarVideosController);
rotas.get('/videos', listarVideosController);

module.exports = rotas;