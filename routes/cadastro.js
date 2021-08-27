const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cadastroController = require('../controllers/cadastroController');
require('../models/Cadastro');

router.get('/cadastro', (req, res) => {
    res.render('desafio/cadastro')
});

router.get('/', (req, res) => {
    res.render('desafio/index')
});



router.post('/cadastro/registrado', cadastroController.registro);




module.exports = router;