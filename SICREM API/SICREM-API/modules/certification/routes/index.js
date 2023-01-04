const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.put('/', auth.authorize([global.levels.administrador]), controller.update)
router.put('/inactive', auth.authorize([global.levels.administrador, global.levels.cbesUsuario]), controller.inactive)
router.get('/', auth.authorize([global.levels.administrador]), controller.getAll)
router.get('/:id', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getById)
router.get('/company', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getByCompanyId)

module.exports = router
