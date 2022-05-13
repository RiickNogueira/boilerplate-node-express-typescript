import express from 'express'
import '@controllers/HelloWorldController'

const app = express()
const port = 5000

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(port)

console.log(`app running on port ${port}...`)
