const router = require('express').Router()
const auth = require('../../../_config/authentication/index')
const controller = require('../controllers')

router.post('/', auth.authorize([global.levels.administrador]), controller.create)
router.put('/:id', auth.authorize([global.levels.administrador]), controller.update)

module.exports = router
