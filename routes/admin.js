const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('desafio/index')
});

router.get('/post', (req, res) => {
    res.send('Página de Pots')
});

router.get('/categorias', (req, res) => {
    res.send('Página de Categorias')
});


module.exports = router;