const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Cadastro');

const CandidadeController = require('../controllers/cadastroController')

router.get('/cadastro', (req, res) => {
    res.render('desafio/cadastro')
});

router.get('/', (req, res) => {
    res.render('desafio/index')
});

router.get('/concluido', (req, res) => {
    res.render('desafio/concluido')
})



router.post('/cadastro/registrado', CandidadeController.registro)




module.exports = router;