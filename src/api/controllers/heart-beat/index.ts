import {Router, Response, Request} from 'express'

function HeartBeatRouter(): Router {
  const router = Router()

  router.route('/heartbeat').get((req: Request, res: Response) => {
    res.send('It works!!')
  })

  return router
}

export default HeartBeatRouter()
