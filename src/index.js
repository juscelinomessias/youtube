const express = require('express');
const app = express();
const rotas = require('../src/routes/routes');

app.use(express.json());

app.use(rotas);

app.listen(3000, () => {
    console.log('Servidor: http://localhost:3000');
})