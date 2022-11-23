import axios from 'axios'

export class HttpClient {
  async get (): Promise<any> {
    return {
      statusCode: 200,
      data: { results: [{ name: 'Hulk' }] }
    }
  }
}
export default { HttpClient }
