import Database from '@/infra/db'
import mongodb from 'mongodb'

jest.mock('mongoose', () => {
  return {
    connect: jest.fn()
  }
})

describe('DB', () => {
  it('Chamando e conectando com mongodb', async () => {
    await Database.createConnection()
    expect(Database).toBeDefined()
  })
})
