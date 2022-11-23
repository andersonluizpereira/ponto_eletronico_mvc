import { HttpClient } from '@/infra/http'

describe('Request API Marvel', () => {
  it('Testa chamadas API Marvel', async () => {
    const httpClient = new HttpClient()
    const response = await httpClient.get()
    expect(httpClient.get()).toBeDefined()
    expect(response.statusCode).toBe(200)
    expect(response.data.results[0].name).toBe('Hulk')
  })
})
