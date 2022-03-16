import UsuariosService from '@/services/usuarios/usuariosService'
import UsuariosRepository from '@/repository/usuarios/usuariosRepository'

const usuario = [{
  _id: 'any_id',
  nome: 'any_nome',
  cpf: 'any_cpf',
  dataNascimento: 'any_dataNascimento',
  telefone: 'any_telefone',
  tokenAcesso: 'any_tokenAcesso',
  estaAtivo: 'any_estaAtivo',
  email: 'any_email'
}]

jest.mock('@/repository/usuarios/usuariosRepository', () => {
  return {
    find: jest.fn()
  }
})

describe('UsuariosService', () => {
  beforeEach(() => {
    jest.spyOn(UsuariosRepository, 'find').mockReturnValue(Promise.resolve(usuario) as any)
  })
  it('Testando chamada UsuariosService', () => {
    expect(UsuariosService).toBeDefined()
  })

  it('Testando chamada UsuariosService.get', async () => {
    jest.spyOn(UsuariosService, 'get').mockReturnValueOnce(Promise.resolve(null))
    const result = await UsuariosService.get()
    expect(result).toBeNull()
  })

  it('Testando chamada UsuariosService.get com retorno objeto', async () => {
    //    jest.spyOn(UsuariosService, 'get').mockReturnValue(Promise.resolve(usuario) as any)
    // jest.spyOn(UsuariosRepository, 'find').mockReturnValue(Promise.resolve(usuario) as any)

    const result = await UsuariosService.get()
    expect(result).toBe(usuario)
  })
})
