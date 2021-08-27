const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CadastroSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    
    sobrenome: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    
    nascimento: {
        type: Date,
        required: true
    },
    estadocivil: {
        type: String,
        required: true
    },
    
    sexo: {
        type: String,
        required: true
    },
    
    cep: {
        type: Number,
        required: true
    },
    
    endereco: {
        type: String,
        required: true
    },
    
    bairro: {
        type: String,
        required: true
    },
    
    numero: {
        type: Number,
        required: true
    },
    
    complemento: {
        type: String
    },
    
    cidade: {
        type: String,
        required: true
    },
    
    estado: {
        type: String,
        required: true
    },
    
    celular: {
        type: Number,
        required: true
    },
    
    telefone: {
        type: Number,
        required: true
    },
    
    telefonecontato: {
        type: Number,
        required: true
    },
    
    emailcontato: {
        type: String,
        required: true
    },
    
    escolaridade: {
        type: String,
        required: true
    },
    
    competencias: {
        type: String,
        required: true
    },
}, {
    timestamps:true
});

module.export = mongoose.model('Usuarios', CadastroSchema)