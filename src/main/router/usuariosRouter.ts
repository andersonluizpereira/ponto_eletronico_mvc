import * as express from 'express'
import UsuariosController from '@/controller/usuarios/usuariosController'

const usuariosRouter = express.Router()

// new
// criar rota da controller search onde eu uso tem search

usuariosRouter.route('/api/v1/usuarios').get(UsuariosController.get)
usuariosRouter.route('/api/v1/usuarios/:id').get(UsuariosController.getById)
usuariosRouter.route('/api/v1/usuarios').post(UsuariosController.create)
usuariosRouter.route('/api/v1/usuarios/:id').put(UsuariosController.update)
usuariosRouter.route('/api/v1/usuarios/:id').delete(UsuariosController.delete)

export default usuariosRouter
