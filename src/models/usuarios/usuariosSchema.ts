import * as mongoose from 'mongoose'

const UsuariosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  rg: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  telefone: { type: String },
  tokenAcesso: { type: String },
  estaAtivo: { type: Boolean, default: false },
  email: { type: String, required: true }
})

export default UsuariosSchema
