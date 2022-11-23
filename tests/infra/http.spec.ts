import { HttpClient } from '@/infra/http'

import axios from 'axios'

jest.mock('axios')

describe('Request API Marvel', () => {
  let httpClient: HttpClient
  let fakeAxios: jest.Mocked<typeof axios>

  beforeAll(() => {
    fakeAxios = axios as jest.Mocked<typeof axios>
    fakeAxios.get.mockResolvedValue({
      data: {
        code: 200
      }
    })
  })

  beforeEach(() => {
    httpClient = new HttpClient()
  })

  it('Testa chamadas API Marvel', async () => {
    expect.hasAssertions()
    expect.assertions(3)

    const response = await httpClient.getAllCharacters()

    expect(response.code).toBe(200)
    expect(response).toHaveProperty('code')
    expect(fakeAxios.get).toHaveBeenCalledTimes(1)
  })

  it('Testa chamadas API Marvel with error', async () => {
    fakeAxios.get.mockResolvedValueOnce({
      data: {
        code: 409
      }
    })
    expect.hasAssertions()
    expect.assertions(3)

    const response = await httpClient.getAllCharacters()

    expect(response.code).toBe(409)
    expect(response).toHaveProperty('code')
    expect(fakeAxios.get).toHaveBeenCalledTimes(1)
  })
})
