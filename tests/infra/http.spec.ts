import { HttpClient } from '@/infra/http'

describe('Request API Marvel', () => {
  let httpClient: HttpClient
  beforeEach(() => {
    httpClient = new HttpClient()
  })

  it('Testa chamadas API Marvel', async () => {
    const response = await httpClient.getAllCharacters()
    expect(response.code).toBe(200)
  })
})
