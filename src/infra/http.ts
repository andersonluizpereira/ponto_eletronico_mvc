import axios from 'axios'
import md5 from 'md5'

export class HttpClient {
  async getAllCharacters (): Promise<any> {
    const timestamp = new Date().getTime()

    const privateKey = '0126a49f00e1063a8f441de67dfd56090cb24be6'
    const apiKey = 'f2aef569ee6f38276c60b9264d1dec2b'

    const hash = md5(timestamp + privateKey + apiKey)

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`

    const result = await axios.get(url)
    return result.data
  }
}
export default { HttpClient }
