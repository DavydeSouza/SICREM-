const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.get('/:type/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getById)
router.get('/:type', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getAll)

module.exports = router
