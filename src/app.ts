import cors from 'cors'
import express from 'express'
import routes from './routes'
import {MONGODB_URI, PORT} from './config'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import bodyParser from 'body-parser'

// mongo connection
const mongoUrl = MONGODB_URI
mongoose.Promise = bluebird

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch(err => {
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running. ' + err,
    )
    process.exit()
  })

//express config
const app = express()

app.set('port', PORT || 3000)
app.use(bodyParser.json())

app.use(cors())
app.use(routes.initialize())

export default app
