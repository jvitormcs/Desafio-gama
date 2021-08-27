const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Cadastro');
const Cadastro = mongoose.model('usuarios');

router.get('/cadastro', (req, res) => {
    res.render('desafio/cadastro')
});

router.get('/', (req, res) => {
    res.render('desafio/index')
});

router.get('/concluido', (req, res) => {
    res.render('desafio/concluido')
});


module.exports = router;