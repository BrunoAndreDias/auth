import * as jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../../config'
import {User} from '../../models/user'

export function generateToken(user: User): string {
  const today = new Date()
  const exp = new Date(today)

  //expiration date for the token
  exp.setDate(today.getDate() + 60)

  return jwt.sign(
    {
      _id: user._id,
      role: user.role,
      name: user.name,
      exp: exp.getTime() / 1000,
    },
    JWT_SECRET,
  )
}
