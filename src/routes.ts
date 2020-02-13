import { Router } from 'express'
import UserApi from './controllers/user'

export const initialize = (): Router => {
  const api = Router()

  api.use(UserApi)

  return api
}

export default {
  initialize,
}
