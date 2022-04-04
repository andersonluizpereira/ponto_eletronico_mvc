import Jwt, { JwtPayload } from 'jsonwebtoken'

export const generatedToken = (email: String, senha: String): String => {
  const payload = {
    iss: email,
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60),
    senha,
    email
  }
  return Jwt.sign(payload, 'J4v@5cr1p7 J4v@5cr1p7 J4v@5cr1p7')
}

export const recoveryDataByToken = (ciphertext: string, senha: string): boolean => {
  const plaintext = Jwt.verify(ciphertext, 'J4v@5cr1p7 J4v@5cr1p7 J4v@5cr1p7') as any
  return plaintext.senha === senha
}

export default { generatedToken, recoveryDataByToken }
