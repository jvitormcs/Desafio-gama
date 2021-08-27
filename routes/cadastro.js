const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Cadastro');
const Usuario = mongoose.model('Usuarios')

router.get('/cadastro', (req, res) => {
    res.render('desafio/cadastro')
});

router.get('/', (req, res) => {
    res.render('desafio/index')
});



router.post('/cadastro/registrado', (req, res) => {
    const novoCadastro = {

        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
       email: req.body.mail,
       cpf: req.body.cpf,
       nascimento: req.body.nascimento,
        estadocivil: req.body.estadocivil,
        sexo: req.body.sexo,
        bairro: req.body.bairro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        cidade: req.body.cidade,
        estado: req.body.estado,
       celular: req.body.celular,
        telefone: req.body.telefone,
        telefonecontato: req.body.telefonecontato,
        emailcontato: req.body.emailcontato,
        escolaridade: req.body.escolaridade,
        competencias: req.body.competencias
    }
        
    
});




module.exports = router;