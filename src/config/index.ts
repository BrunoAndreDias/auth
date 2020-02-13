import dotenv from 'dotenv'
import fs from 'fs'

if (fs.existsSync('.env')) {
  dotenv.config({path: '.env'})
}

const {JWT_SECRET, PORT, MONGODB_URI} = process.env

if (!JWT_SECRET) {
  console.log('JWT_SECRET dont exist')
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

export {JWT_SECRET, PORT, MONGODB_URI}
