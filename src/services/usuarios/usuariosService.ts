import UsuariosRepository from '@/repository/usuarios/usuariosRepository'

class UsuariosService {
  async get (): Promise<any> {
    // return await UsuariosRepository.find({}).sort({ _id: -1 }).limit(1000)
    return await UsuariosRepository.find({})
  }

  async getById (_id: string): Promise<any> {
    const result = await UsuariosRepository.findById(_id)
    return result
  }

  async create (news: any): Promise<any> {
    const result = await UsuariosRepository.create(news)
    return result
  }

  async update (_id: string, news: any): Promise<any> {
    const result = await UsuariosRepository.findByIdAndUpdate(_id, news)
    return result
  }

  async delete (_id: string): Promise<any> {
    const result = await UsuariosRepository.findByIdAndRemove(_id)
    return result
  }
}

export default new UsuariosService()
