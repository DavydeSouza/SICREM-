const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.get('/', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.cliente, global.levels.marinha]), controller.getAll)
router.get('/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.cliente, global.levels.marinha]), controller.getById)

module.exports = router
