const express = require('express')
const massive = require('massive')
const controller = require('./controllers/controller')
require('dotenv').config()

const app = express()

const {CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.json())

app.get('/api/inventory', controller.getAll)
app.post('/api/product', controller.createProduct)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(dbInstance => {
  console.log('DB connected')
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`Docked at port ${SERVER_PORT}`))
})