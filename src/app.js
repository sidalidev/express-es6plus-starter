import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import products from './routes/products'

const { PORT, DB_URI } = process.env

mongoose.connect(
    DB_URI,
    { useNewUrlParser: true },
)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on(
    'error',
    console.error.bind(console, '\nMongoDB connexion error ❌ : '), // eslint-disable-line no-console
)

const app = express()

// Configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/products', products)

app.listen(PORT, () => {
    console.log(`\nApp is listening👂 on port ${PORT} ✅`) // eslint-disable-line no-console
})
