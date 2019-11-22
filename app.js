'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const aluno = require('./modulos/aluno/aluno')
//const produto = require('./modulos/produto/produto')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

aluno.init(app)
//produto.init(app)

module.exports = app