import Helper from '@/infra/helper'
import UsuariosService from '@/services/usuarios/usuariosService'
import { Request, Response } from 'express'
import HttpStatus from 'http-status'

class UsuariosController {
  async get (req: Request, res: Response): Promise<void> {
    try {
      const response = await UsuariosService.get()
      void Helper.sendResponse(res, HttpStatus.OK, response)
    } catch (error) {
      void Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }

  async getById (req: Request, res: Response): Promise<void> {
    try {
      const _id = req.params.id
      const response = await UsuariosService.getById(_id)
      void Helper.sendResponse(res, HttpStatus.OK, response)
    } catch (error) {
      void Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }

  async create (req: Request, res: Response): Promise<void> {
    try {
      const vm = req.body
      await UsuariosService.create(vm)
      void Helper.sendResponse(res, HttpStatus.OK, 'Usuario cadastrado com sucesso!')
    } catch (error) {
      void Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }

  async update (req: Request, res: Response): Promise<void> {
    try {
      const _id = req.params.id
      const usuario = req.body
      await UsuariosService.update(_id, usuario)
      void Helper.sendResponse(res, HttpStatus.OK, 'Usuario atualizado com sucesso!')
    } catch (error) {
      void Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }

  async delete (req: Request, res: Response): Promise<void> {
    try {
      const _id = req.params.id
      await UsuariosService.delete(_id)
      void Helper.sendResponse(res, HttpStatus.OK, 'Usuario deletado com sucesso!')
    } catch (error) {
      void Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error)
    }
  }
}

export default new UsuariosController()
