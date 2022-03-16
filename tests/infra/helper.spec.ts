import Helper from '@/infra/helper'
import { Response } from 'express'
import { getMockRes } from '@jest-mock/express'
import * as HttpStatus from 'http-status'

describe('Helper', () => {
  let res: Response
  beforeEach(() => {
    res = getMockRes().res
  })
  it('Testando chamada Helper para status Web', async () => {
    const data = {
      status: 200,
      data: {
        result: 'teste'
      }
    }
    await Helper.sendResponse(res, HttpStatus.OK, data)
    expect(Helper).toBeDefined()
  })
})
