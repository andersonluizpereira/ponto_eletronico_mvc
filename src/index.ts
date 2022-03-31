import './config/module-alias'
import App from '@/main/app'
const port = 3000

App.app.listen(port, function () {
  console.log(`servidor executando na porta ${port}`)
})
