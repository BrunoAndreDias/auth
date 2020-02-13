import {Router, Response, Request} from 'express'
import {getAllUsers} from '../../services/user/get-all-users'
import {register} from '../../services/auth/register'

function UserRouter(): Router {
  const router = Router()

  router
    .route('/user')
    .get(async (req: Request, res: Response) => {
      const users = await getAllUsers()
      res.send(users)
    })
    .post(async (req: Request, res: Response) => {
      const userToken = await register(req.body)
      res.send(userToken)
    })

  return router
}

export default UserRouter()
