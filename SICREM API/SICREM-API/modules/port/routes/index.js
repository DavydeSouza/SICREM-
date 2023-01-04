const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.put('/:id', auth.authorize([global.levels.administrador]), controller.update)
router.get('/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getById)
router.get('/name/:name', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getByName)

module.exports = router
