import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'

import Database from '@/infra/db'
import Auth from '@/infra/auth'
import usuariosRouter from '@/main/router/usuariosRouter'
import usuariosRouterCreated from '@/main/router/usuariosRouterCreated'
import loginRouter from '@/main/router/loginRouter'
import { healthRoutes } from '@/config/router/health.routes'
class App {
  public app: express.Application
  private readonly db: Database

  constructor () {
    this.app = express()

    this.db = new Database()
    void this.db.createConnection()

    this.middler()
    this.routes()
  }

  /*
    Cross-Origin Resource Sharing ou CORS é um mecanismo que permite que recursos
    restritos em uma página da web sejam recuperados por outro domínio fora do domínio
    ao qual pertence o recurso que será recuperado.
  */
  enableCors (): void {
    const options: cors.CorsOptions = {
      methods: 'GET,OPTIONS,PUT,POST,DELETE',
      origin: '*'
    }

    this.app.use(cors(options))
  }

  middler (): void {
    this.enableCors()
    /*
    O body-parser é um módulo capaz de converter o body da requisição para vários formatos.
    Um desses formatos é json, exatamente o que queremos.
  */
    this.app.use(bodyParser.json())
    /*
    Retorna o middleware que analisa apenas os corpos {urlencoded} e apenas analisa as
    solicitações em que o cabeçalho Content-Type corresponde à opção de tipo.
    Este analisador aceita apenas a codificação UTF-8 do corpo e suporta a inflação automática de codificações gzip e deflate.
  */
    this.app.use(bodyParser.urlencoded({ extended: false }))

    /*
      Compressão em Node. js e Express diminui a quantidade de dados para download que é
      fornecida aos usuários. Através do uso dessa compactação, podemos melhorar o desempenho do nosso Node.
      js, pois nosso tamanho de carga útil é reduzido drasticamente.
    */
    this.app.use(compression())
  }

  routes (): void {
    this.app.route('/').get((req, res) => {
      res.send({ versao: '0.0.1' })
    })
    this.app.use(healthRoutes)
    this.app.use('/', loginRouter)
    this.app.use('/', usuariosRouterCreated)
    this.app.use(Auth.validate)
    this.app.use('/', usuariosRouter)
  }
}

export default new App()
