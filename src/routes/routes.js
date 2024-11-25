const express = require('express');
const { criarUsuariosController } = require('../controllers/usuarios/criarUsuariosController');
const { listarUsuariosController } = require('../controllers/usuarios/listarUsuariosController');
const { criarVideosController, criarVideosWeb } = require('../controllers/videos/criarVideosController');
const { listarVideosController } = require('../controllers/videos/listarVideosController');
const { logarUsuariosController, logarUsuariosWeb } = require('../controllers/usuarios/logarUsuariosController');
const { verificarLogin } = require('../middleware/verificarLogin');

const rotas = express();

// Web
rotas.get('/login', logarUsuariosWeb);
rotas.get('/videos', criarVideosWeb);


// Controller
rotas.post('/usuarios', criarUsuariosController);
rotas.get('/usuarios', listarUsuariosController);
rotas.post('/login', logarUsuariosController);

// rotas.use(verificarLogin);

rotas.post('/videos', criarVideosController);
rotas.get('/videos', listarVideosController);

module.exports = rotas;