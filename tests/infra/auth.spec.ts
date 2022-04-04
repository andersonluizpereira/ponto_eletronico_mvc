import Auth from '@/infra/auth'

import { getMockRes, getMockReq } from '@jest-mock/express'
// import { Request, Response, NextFunction } from 'express'

jest.mock('express', () => {
  return {
    next: jest.fn()
  }
})

describe('Auth', () => {
  it('Testando chamada Auth para request by headers', async () => {
    const req = getMockReq({ headers: { 'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIiwiaWF0IjoxNywiZXhwIjoxNjQ5MDg0NDE3MjI1LCJzZW5oYSI6IjEyMzQ1Njc4IiwiZW1haWwiOiJhbmR5MjkwMy5hbHBAZ21haWwuY29tIn0.jzTHad9NOW-RIJMMX_vC489Lv_Sro1eJrz8hM3E0rJ4' } })
    const res = getMockRes()
    const next = jest.fn()
    await Auth.validate(req, res as any, next)
    expect(Auth).toBeDefined()
  })

  it('Testando chamada Auth para request by headers', async () => {
    const req = getMockReq({ headers: { 'x-api-key': '' } })
    const res = getMockRes().res
    const next = jest.fn()
    await Auth.validate(req, res as any, next)
    expect(Auth).toBeDefined()
  })

  it('Testando chamada Auth para request by headers null', async () => {
    const req = getMockReq({ headers: { } })
    const res = getMockRes().res
    const next = jest.fn()
    await Auth.validate(req, res as any, next)
    expect(Auth).toBeDefined()
  })
})
