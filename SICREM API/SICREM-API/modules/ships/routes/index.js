const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.get('/qtd', auth.authorize([global.levels.administrador, global.levels.cbesUsuario]), controller.qtd)
router.put('/:id', auth.authorize([global.levels.administrador]), controller.update)
router.delete('/:id', auth.authorize([global.levels.administrador]), controller.delete)
router.delete('/inative/:id', auth.authorize([global.levels.administrador]), controller.inative)
router.get('/json/field', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.get)
router.get('/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getById)
router.get('/cbes/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getByCbesId)
router.get('/json/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getById)

module.exports = router
