import Jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const generatedToken = async (email: string, senha: string): Promise<string> => {
  const digest = await bcrypt.hash(senha, 12)
  const payload = {
    iss: email,
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60),
    senha: digest,
    email
  }
  return Jwt.sign(payload, 'J4v@5cr1p7 J4v@5cr1p7 J4v@5cr1p7')
}

export const recoveryDataByToken = async (ciphertext: string, email: string, senha: string): Promise<boolean> => {
  const decode = Jwt.decode(ciphertext) as any
  const isValid = await bcrypt.compare(senha, decode.senha)
  const plaintext = Jwt.verify(ciphertext, 'J4v@5cr1p7 J4v@5cr1p7 J4v@5cr1p7') as any
  return isValid && plaintext.email === email
}

export default { generatedToken, recoveryDataByToken }
