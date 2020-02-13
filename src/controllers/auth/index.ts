import {Router, Response, Request} from 'express'
import {login} from '../../services/auth/login'

function UserRouter(): Router {
  const router = Router()

  router.route('/login').post(async (req: Request, res: Response) => {
    const userLogged = await login(req.body)
    res.send(userLogged)
  })

  return router
}

export default UserRouter()
