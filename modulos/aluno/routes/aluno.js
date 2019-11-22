'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controller/aluno')

router.get('/listAluno', controller.read)
router.get('/listAlunoId', controller.readId)
router.post('/saveAluno', controller.insert)
router.post('/updateAluno', controller.update)
router.post('/deleteAluno', controller.delete)

module.exports = router