const md5 = require('md5')
const ts = new Date().getTime()
const apiKey = 'f2aef569ee6f38276c60b9264d1dec2b'
const privateKey = '0126a49f00e1063a8f441de67dfd56090cb24be6'
const axios = require('axios')
const hash = md5(ts + privateKey + apiKey)
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`

console.log(`Ver ${ts} ${apiKey} ${privateKey}`)
console.log(url)

const config = {
  method: 'get',
  url,
  headers: { }
}

axios(config)
  .then(function (response) {
    // console.log(md5('message'))
    // console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
