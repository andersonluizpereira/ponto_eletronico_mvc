import UsuariosController from '@/controller/usuarios/usuariosController'
import UsuariosService from '@/services/usuarios/usuariosService'

import { Request, RequestHandler, Response, NextFunction } from 'express'
import { getMockReq, getMockRes } from '@jest-mock/express'

jest.mock('@/services/usuarios/usuariosService', () => {
  return {
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
})
