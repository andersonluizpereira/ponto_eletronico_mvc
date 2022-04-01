import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
class Auth {
  validate (req: Request, res: Response, next: NextFunction): any {
    const token = String(req.headers['x-api-key'])

    if (token !== '' || token !== undefined || token !== null) {
      jwt.verify(token, 'J4v@5cr1p7 J4v@5cr1p7 J4v@5cr1p7', function (err, decoded) {
        if (err != null) {
          return res.status(403).send({
            success: false,
            message: '403 - Token Inválido'
          })
        } else {
          next()
        }
      })
    } else {
      return res.status(401).send({
        success: false,
        message: '401 - unauthorized'
      })
    }
  }
}

export default new Auth()
