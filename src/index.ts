import './config/module-alias'
import App from '@/main/app'
const port = 3050

App.app.listen(port, function () {
  console.log(`servidor executando na porta ${port}`)
})
