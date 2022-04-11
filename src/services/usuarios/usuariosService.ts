import UsuariosRepository from '@/repository/usuarios/usuariosRepository'
import token from '@/infra/token'
class UsuariosService {
  async login (email: string, senha: string): Promise<any> {
    const usuarios = await UsuariosRepository.findOne({
      email
    })
    if (usuarios !== undefined && usuarios !== null) {
      if (!token.recoveryDataByToken(usuarios.tokenAcesso, email, senha)) {
        return null
      }
      usuarios.tokenAcesso = token.generatedToken(usuarios.email, usuarios.senha)
      return this.update(usuarios._id, usuarios)
    }
    return null
  }

  async get (): Promise<any> {
    // return await UsuariosRepository.find({}).sort({ _id: -1 }).limit(1000)
    return await UsuariosRepository.find({})
  }

  async getById (_id: string): Promise<any> {
    const result = await UsuariosRepository.findById(_id)
    return result
  }

  async create (usuarios: any): Promise<any> {
    usuarios.tokenAcesso = token.generatedToken(usuarios.email, usuarios.senha)
    const result = await UsuariosRepository.create(usuarios)
    return result
  }

  async update (_id: string, usuarios: any): Promise<any> {
    const result = await UsuariosRepository.findByIdAndUpdate(_id, usuarios)
    return result
  }

  async delete (_id: string): Promise<any> {
    const result = await UsuariosRepository.findByIdAndRemove(_id)
    return result
  }
}

export default new UsuariosService()
