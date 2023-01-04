const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.put('/:id', auth.authorize([global.levels.administrador]), controller.update)
router.delete('/:id', auth.authorize([global.levels.administrador]), controller.delete)
router.get('/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getById)

module.exports = router
