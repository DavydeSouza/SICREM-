const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.put('/', auth.authorize([global.levels.administrador]), controller.update)
router.get('/certification', auth.authorize([global.levels.administrador, global.levels.cbesUsuario, global.levels.marinha]), controller.getByCertificationId)

module.exports = router
