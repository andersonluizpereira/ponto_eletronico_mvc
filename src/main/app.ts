import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'

import Database from '@/infra/db'
import usuariosRouter from '@/main/router/usuariosRouter'
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

  enableCors (): void {
    const options: cors.CorsOptions = {
      methods: 'GET,OPTIONS,PUT,POST,DELETE',
      origin: '*'
    }

    this.app.use(cors(options))
  }

  middler (): void {
    this.enableCors()
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(compression())
  }

  routes (): void {
    this.app.route('/').get((req, res) => {
      res.send({ versao: '0.0.1' })
    })
    this.app.use('/', usuariosRouter)
  }
}

export default new App()
