import cors from 'cors'
import express from 'express'
import routes from './api'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import bodyParser from 'body-parser'
import session from 'express-session'
import mongo from 'connect-mongo'
import {MONGODB_URI, SESSION_SECRET} from './util/secrets'

const MongoStore = mongo(session)

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

app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json())
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({
      url: mongoUrl,
      autoReconnect: true,
    }),
  }),
)

app.use(cors())
app.use(routes.initialize())

export default app
