const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cadastroController = require('../controllers/cadastroController');
require('../models/Cadastro');
const Cadastro = mongoose.model('usuarios');

router.get('/cadastro', (req, res) => {
    res.render('desafio/cadastro')
});

router.get('/', (req, res) => {
    res.render('desafio/index')
});

router.post('cadastro/resgistrado', cadastroController.registro)

router.get('/concluido', (req, res) => {
    res.render('desafio/concluido')
});


module.exports = router;