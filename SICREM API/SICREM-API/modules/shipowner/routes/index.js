const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.get('/client', auth.authorize([global.levels.administrador, global.levels.cbesUsuario]), controller.getByClient)
router.get('/name', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getByName)
router.put('/:id', auth.authorize([global.levels.administrador]), controller.update)
router.get('/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getById)

module.exports = router
