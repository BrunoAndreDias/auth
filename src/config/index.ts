import dotenv from 'dotenv'
import fs from 'fs'

if (fs.existsSync('.env')) {
  dotenv.config({path: '.env'})
}

const {SESSION_SECRET, PORT, MONGODB_URI} = process.env

if (!SESSION_SECRET) {
  console.log('SESSION_SECRET dont exist')
  process.exit(1)
}

if (!PORT) {
  console.log('PORT dont exist')
  process.exit(1)
}

if (!MONGODB_URI) {
  console.log('MONGODB_URI dont exist')
  process.exit(1)
}

export {SESSION_SECRET, PORT, MONGODB_URI}
