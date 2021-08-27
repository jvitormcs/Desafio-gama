const Usuarios = require('../models/Cadastro');


module.exports = {
    async registro(req, res) {

        const {nome, sobrenome, email, cpf, nascimento, estadocivil,
            sexo, bairro, numero, complemento, cidade,
            estado, celular, telefone, telefonecontato, emailcontato, escolaridade, competencias
            } = req.body; 

        const novoCadastro = new Usuarios({});

        novoCadastro.nome = nome;
        novoCadastro.sobrenome = sobrenome; 
        novoCadastro.email = email;
        novoCadastro.cpf = cpf;
        novoCadastro.nascimento = nascimento;
        novoCadastro.estadocivil = estadocivil;
        novoCadastro.sexo = sexo;
        novoCadastro.bairro = bairro;
        novoCadastro.numero = numero;
        novoCadastro.complemento = complemento;
        novoCadastro.cidade = cidade;
        novoCadastro.estado = estado;
        novoCadastro.celular = celular;
        novoCadastro.telefone = telefone
        novoCadastro.telefonecontato = telefonecontato;
        novoCadastro.emailcontato = emailcontato;
        novoCadastro.escolaridade = escolaridade;
        novoCadastro.competencias = competencias;

        novoCadastro.save((erro, candidatoSalvo) => {
            if (erro) {
                console.log(erro);
                return res.status(500).send();
            };

            return res.status(200).send(candidatoSalvo)
        });
    },
};