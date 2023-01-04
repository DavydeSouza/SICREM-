const router = require('express').Router()
const auth = require('./../../../_config/authentication')
const Controller = require('./../controllers')

router.get('/obterPorCep/:cep', auth.authorize([global.levels.administrador, global.levels.cbesUsuario]), Controller.obterPorCep)

module.exports = router
