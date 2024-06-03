var perguntasModel = require("../models/perguntasModel");

function contarNovato(req, res) {
    perguntasModel.contarNovato().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function contarPExperiente(req, res) {
    perguntasModel.contarPExperiente().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarExperiente(req, res) {
    perguntasModel.contarExperiente().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function makeBasica(req, res) {
    perguntasModel.makeBasica().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function makeGlam(req, res) {
    perguntasModel.makeGlam().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function makeHalloween(req, res) {
    perguntasModel.makeHalloween().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nivel = req.body.nivelServer;
    var preferencia = req.body.preferenciaServer;
    var experiencia = req.body.experienciaServer;

    console.log(req.body)

    // Faça as validações dos valores
    if (nivel == undefined) {
        res.status(400).send("Seu nivel está undefined!");
    } else if (preferencia == undefined) {
        res.status(400).send("Seu preferencia está undefined!");
    } else if (experiencia == undefined) {
        res.status(400).send("Sua experiencia está undefined!");
    } else  {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        perguntasModel.cadastrar(nivel, preferencia, experiencia)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    contarNovato,
    contarPExperiente,
    contarExperiente,
    makeBasica,
    makeGlam,
    makeHalloween
}