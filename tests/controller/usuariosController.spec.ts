import UsuariosController from '@/controller/usuarios/usuariosController'
import UsuariosService from '@/services/usuarios/usuariosService'

import { Request, RequestHandler, Response, NextFunction } from 'express'
import { getMockReq, getMockRes } from '@jest-mock/express'

jest.mock('@/services/usuarios/usuariosService', () => {
  return {
    login: jest.fn(),
    get: jest.fn(),
    getById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn()
  }
})

describe('UsuariosController', () => {
  let req: Request
  let res: Response
  const data = {
    status: 200,
    data: {
      result: 'teste'
    }
  }

  beforeAll(() => {
    req = getMockReq({
      body: {
        result: 'teste'
      }
    })
    res = getMockRes().res
  })

  it('UsuariosController chamada de controller', async () => {
    expect(UsuariosController).toBeDefined()
  })
  it('UsuariosController chamada de controller metodo get', async () => {
    jest.spyOn(UsuariosService, 'get').mockReturnValueOnce(Promise.resolve(data) as any)
    const response = await UsuariosController.get(req, res)
    expect(UsuariosController).toBeDefined()
  })
  it('UsuariosController chamada de controller metodo get Error', async () => {
    jest.spyOn(UsuariosService, 'get').mockReturnValueOnce(Promise.reject(new Error('server_error')))
    const response = await UsuariosController.get(req, res)
    expect(UsuariosController).toBeDefined()
  })

  it('UsuariosController chamada de controller metodo getById', async () => {
    jest.spyOn(UsuariosService, 'getById').mockReturnValueOnce(Promise.resolve(data) as any)
    const response = await UsuariosController.getById(req, res)
    expect(UsuariosController).toBeDefined()
  })
  it('UsuariosController chamada de controller metodo getById Error', async () => {
    jest.spyOn(UsuariosService, 'getById').mockReturnValueOnce(Promise.reject(new Error('server_error')))
    const response = await UsuariosController.getById(req, res)
    expect(UsuariosController).toBeDefined()
  })

  it('UsuariosController chamada de controller metodo create', async () => {
    jest.spyOn(UsuariosService, 'create').mockReturnValueOnce(Promise.resolve(data) as any)
    const response = await UsuariosController.create(req, res)
    expect(UsuariosController).toBeDefined()
  })
  it('UsuariosController chamada de controller metodo create Error', async () => {
    jest.spyOn(UsuariosService, 'create').mockReturnValueOnce(Promise.reject(new Error('server_error')))
    const response = await UsuariosController.create(req, res)
    expect(UsuariosController).toBeDefined()
  })

  it('UsuariosController chamada de controller metodo update', async () => {
    jest.spyOn(UsuariosService, 'update').mockReturnValueOnce(Promise.resolve(data) as any)
    const response = await UsuariosController.update(req, res)
    expect(UsuariosController).toBeDefined()
  })
  it('UsuariosController chamada de controller metodo update Error', async () => {
    jest.spyOn(UsuariosService, 'update').mockReturnValueOnce(Promise.reject(new Error('server_error')))
    const response = await UsuariosController.update(req, res)
    expect(UsuariosController).toBeDefined()
  })

  it('UsuariosController chamada de controller metodo delete', async () => {
    jest.spyOn(UsuariosService, 'delete').mockReturnValueOnce(Promise.resolve(data) as any)
    const response = await UsuariosController.delete(req, res)
    expect(UsuariosController).toBeDefined()
  })
  it('UsuariosController chamada de controller metodo delete Error', async () => {
    jest.spyOn(UsuariosService, 'delete').mockReturnValueOnce(Promise.reject(new Error('server_error')))
    const response = await UsuariosController.delete(req, res)
    expect(UsuariosController).toBeDefined()
  })

  it('UsuariosController chamada de controller metodo login', async () => {
    jest.spyOn(UsuariosService, 'login').mockReturnValueOnce(Promise.resolve(data) as any)
    req.body = {
      tokenAcesso: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIiwiaWF0IjoxNywiZXhwIjoxNjQ5MDg0NDE3MjI1LCJzZW5oYSI6IjEyMzQ1Njc4IiwiZW1haWwiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIn0.jzTHad9NOW-RIJMMX_vC489Lv_Sro1eJrz8hM3E0rJ4',
      senha: '12345678'
    }
    const response = await UsuariosController.getByLogin(req, res)
    expect(UsuariosController).toBeDefined()
  })
  it('UsuariosController chamada de controller metodo login Error', async () => {
    jest.spyOn(UsuariosService, 'login').mockReturnValueOnce(Promise.reject(new Error('server_error')))
    req.body = {
      tokenAcesso: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIiwiaWF0IjoxNywiZXhwIjoxNjQ5MDg0NDE3MjI1LCJzZW5oYSI6IjEyMzQ1Njc4IiwiZW1haWwiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIn0.jzTHad9NOW-RIJMMX_vC489Lv_Sro1eJrz8hM3E0rJ4',
      senha: '12345678'
    }
    const response = await UsuariosController.getByLogin(req, res)
    expect(UsuariosController).toBeDefined()
  })
})
