import * as express from 'express'
import UsuariosController from '@/controller/usuarios/usuariosController'

const usuariosRouterCreated = express.Router()

// new
// criar rota da controller search onde eu uso tem search
usuariosRouterCreated.route('/api/login').post(UsuariosController.getByLogin)

export default usuariosRouterCreated
