import express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import Database from '@/infra/db'

class StartUp {
  public app: express.Application
  private readonly _db: Database

  constructor () {
    this.app = express()

    this._db = new Database().createConnection()
    // this._db.createConnection()

    this.middler()
    this.routes()
  }

  middler (): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  routes (): void {
    this.app.route('/').get((req, res) => {
      res.send({ versao: '0.0.1' })
    })
  }
}

export default new StartUp()
