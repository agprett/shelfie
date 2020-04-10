const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()

const {CONNECTION_STRING, SERVER_PORT} = process.env

const controller = require('./controllers/controller')

app.use(express.json())

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