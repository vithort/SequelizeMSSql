'use strict'

const model = require('../../../utils/modelLoader')

exports.read = (req, res) => {
    model.Aluno.findAll({}).then((data) => {
        res.send(data)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    });
};

exports.readId = (req, res) => {
    model.Aluno.findAll({
        where: {
            id: req.body.id
        }
    }).then((data) => {
        res.send(data)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    });
};

exports.insert = (req, res) => {
    const dados = req.body
    model.Aluno
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
}

exports.update = (req, res) => {
    const dados = req.body
    model.Aluno
        .update(dados, {
            where: {
                id: req.query.id
            }
        })
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
}

exports.delete = (req, res) => {
    const dados = req.body
    model.Aluno
        .destroy({
            where: {
                id: dados.params.id
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}