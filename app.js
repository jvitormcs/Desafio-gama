const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path')

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');



    app.use(express.static(path.join(__dirname + "/public")))
    

    app.use('/admin', admin)

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})