import {Router, Response, Request} from 'express'
import {getAllUsers, createUser} from '../../services/user'

function UserRouter(): Router {
  const router = Router()

  router
    .route('/user')
    .get(async (req: Request, res: Response) => {
      const users = await getAllUsers()
      res.send(users)
    })
    .post(async (req: Request, res: Response) => {
      const user = await createUser(req.body)
      res.send(user)
    })

  return router
}

export default UserRouter()
