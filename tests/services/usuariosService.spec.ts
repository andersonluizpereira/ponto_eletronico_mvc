import UsuariosService from '@/services/usuarios/usuariosService'
import UsuariosRepository from '@/repository/usuarios/usuariosRepository'
import tokenService from '@/infra/token'

const usuario = [{
  _id: '6250ad443d8d418313971e87',
  nome: 'Anderson',
  cpf: '322.821.668-33',
  rg: '11111111111',
  dataNascimento: '1985-02-22T00:00:00.000Z',
  telefone: '(51) 9612-3180',
  tokenAcesso: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIiwiaWF0Ijo0NCwiZXhwIjoxNjQ5NDU1MjQ0NDgzLCJzZW5oYSI6IjEyMzQ1Njc4IiwiZW1haWwiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIn0.BVJPP1KqrcfKK4TKN7jzMBGVrjljpfSUM9ayaCgCCso',
  estaAtivo: false,
  email: 'andy2903.alp@gmail.com',
  __v: 0
}]

jest.mock('@/repository/usuarios/usuariosRepository', () => {
  return {
    findOne: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndRemove: jest.fn()
  }
})

describe('UsuariosService', () => {
  const bodyCreated = {
    email: 'andy2903.alp@gmail.com',
    tokenAcesso: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIiwiaWF0IjoxNywiZXhwIjoxNjQ5MDg0NDE3MjI1LCJzZW5oYSI6IjEyMzQ1Njc4IiwiZW1haWwiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIn0.jzTHad9NOW-RIJMMX_vC489Lv_Sro1eJrz8hM3E0rJ4'
  }
  beforeEach(() => {
    jest.spyOn(UsuariosRepository, 'findOne').mockReturnValue(Promise.resolve(usuario[0]) as any)
    jest.spyOn(UsuariosRepository, 'find').mockReturnValue(Promise.resolve(usuario) as any)
    jest.spyOn(UsuariosRepository, 'findById').mockReturnValue(Promise.resolve(usuario) as any)
    jest.spyOn(UsuariosRepository, 'create').mockReturnValue(Promise.resolve(bodyCreated) as any)
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
    expect(await UsuariosService.create(usuario)).toBe(bodyCreated)
  })

  it('Testando chamada UsuariosService.update com retorno objeto', async () => {
    expect(await UsuariosService.update('any_id', usuario)).toBe(usuario)
  })

  it('Testando chamada UsuariosService.delete com retorno objeto', async () => {
    expect(await UsuariosService.delete('any_id')).toMatchObject([])
  })

  it('Testando chamada UsuariosService.login com retorno objeto', async () => {
    const senha = '12345678'
    const email = 'andy2903.alp@gmail.com'

    expect(await UsuariosService.login(email, senha)).toBe(usuario)
  })
  it('Testando chamada UsuariosService.login', async () => {
    jest.spyOn(UsuariosRepository, 'findOne').mockReturnValueOnce(Promise.resolve(undefined) as any)
    const senha = '12345678'
    const email = 'andy2903.alp@gmail.com'
    expect(await UsuariosService.login(email, senha)).toBeNull()
  })

  it('Testando chamada UsuariosService.login', async () => {
    jest.spyOn(tokenService, 'recoveryDataByToken').mockReturnValue(false)
    const senha = '12345678'
    const email = 'andy2903.alp@gmail.com'
    expect(await UsuariosService.login(email, senha)).toBeNull()
  })
})
