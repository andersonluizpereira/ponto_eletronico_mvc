import Database from '@/infra/db'
import mongodb from 'mongodb'

jest.mock('mongoose', () => {
  return {
    connect: jest.fn()
  }
})

describe('DB', () => {
  let database: Database
  beforeEach(() => {
    database = new Database()
  })
  it('Chamando e conectando com mongodb', async () => {
    await database.createConnection()
    expect(database).toBeDefined()
  })
})
