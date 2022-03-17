import * as mongoose from 'mongoose'
import Usuarios from '@/models/usuarios/usuariosSchema'

export default mongoose.model('usuarios', Usuarios)
