import * as mongoose from 'mongoose'
import Usuarios from '@/models/usuariosSchema'

export default mongoose.model('news', Usuarios)
