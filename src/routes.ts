import {Router} from 'express'
import UserApi from './controllers/user'
import AuthApi from './controllers/auth'

export const initialize = (): Router => {
  const api = Router()

  api.use(AuthApi)
  api.use(UserApi)

  return api
}

export default {
  initialize,
}
