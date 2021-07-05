//EXPRESS
//Framework de node focado na construção de aplicações web e API'S
//Ou seja, podemos subir nosso propria api e retornar dados para outras pessoas

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/oi', (req, res) => {
    res.send('Oii')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})