const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.put('/', auth.authorize([global.levels.administrador]), controller.update)
router.get('/name', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getByName)
router.get('/client', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getByClinetId)
router.get('/', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getClient)

module.exports = router
