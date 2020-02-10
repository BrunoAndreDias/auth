import {Router} from 'express'
import HeartBeatApi from './controllers/heart-beat'

export const initialize = (): Router => {
  const api = Router()

  api.use(HeartBeatApi)

  return api
}

export default {
  initialize,
}
