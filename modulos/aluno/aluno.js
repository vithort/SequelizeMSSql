'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerAluno = require('./routes/aluno')

const models = [
    '../modulos/aluno/model/aluno'
]

exports.init = (app) => {

    app.use('/', routerAluno)

}