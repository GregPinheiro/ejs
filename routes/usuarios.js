const { Router } = require('express')
const router = Router()
const controller = require('../controllers/usuarios')

router.get('/usuarios', controller.getUsuarios)

module.exports = router;