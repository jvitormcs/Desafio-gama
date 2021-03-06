const mongoose = require('mongoose');
const usuario = mongoose.model('usuarios');
require('../models/Cadastro');


class CandidateConcroller {
    async registro(req, res) {

        const {nome, sobrenome, email, cpf, nascimento, estadocivil,
            sexo, cep, endereco, bairro, numero, complemento, cidade,
            estado, celular, telefone, telefonecontato, emailcontato, escolaridade, competencias
            } = req.body; 

        const novoCadastro = {

        nome,
        sobrenome,
        email,
        cpf,
        nascimento,
        estadocivil,
        sexo,
        cep,
        endereco,
        bairro,
        numero,
        complemento,
        cidade,
        estado,
        celular,
        telefone,
        telefonecontato,
        emailcontato,
        escolaridade,
       competencias
        }

        await usuario.create(novoCadastro, (erro) => {
            if (erro) {
                console.log(erro);
                return res.status(400).send('CPF ou Email já estão cadastrado');
            };
            return res.status(200).redirect('/concluido')
        });
    }
};
module.exports = new CandidateConcroller();