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
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndRemove: jest.fn()
  }
})

describe('UsuariosService', () => {
  beforeEach(() => {
    jest.spyOn(UsuariosRepository, 'find').mockReturnValue(Promise.resolve(usuario) as any)
    jest.spyOn(UsuariosRepository, 'findById').mockReturnValue(Promise.resolve(usuario) as any)
    jest.spyOn(UsuariosRepository, 'create').mockReturnValue(Promise.resolve(usuario) as any)
    jest.spyOn(UsuariosRepository, 'findByIdAndUpdate').mockReturnValue(Promise.resolve(usuario) as any)
    jest.spyOn(UsuariosRepository, 'findByIdAndRemove').mockReturnValue(Promise.resolve([]) as any)
  })
  it('Testando chamada UsuariosService', () => {
    expect(UsuariosService).toBeDefined()
  })

  it('Testando chamada UsuariosService.get', async () => {
    jest.spyOn(UsuariosService, 'get').mockReturnValueOnce(Promise.resolve(null))
    expect(await UsuariosService.get()).toBeNull()
  })

  it('Testando chamada UsuariosService.get com retorno objeto', async () => {
    expect(await UsuariosService.get()).toBe(usuario)
  })

  it('Testando chamada UsuariosService.getById com retorno objeto', async () => {
    expect(await UsuariosService.getById('any_id')).toBe(usuario)
  })

  it('Testando chamada UsuariosService.create com retorno objeto', async () => {
    expect(await UsuariosService.create(usuario)).toBe(usuario)
  })

  it('Testando chamada UsuariosService.update com retorno objeto', async () => {
    expect(await UsuariosService.update('any_id', usuario)).toBe(usuario)
  })

  it('Testando chamada UsuariosService.delete com retorno objeto', async () => {
    expect(await UsuariosService.delete('any_id')).toMatchObject([])
  })
})
