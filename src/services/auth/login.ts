import * as argon2 from 'argon2'
import {UserToken, UserModel, UserLogin} from '../../models/user'
import {generateToken} from './generate-token'

export async function login(user: UserLogin): Promise<UserToken> {
  try {
    console.log('on login', user)
    const userRecord = await UserModel.findOne({email: user.email})

    if (!userRecord) {
      throw new Error('User not registered')
    }

    const validPassword = await argon2.verify(
      userRecord.password,
      user.password,
    )
    if (validPassword) {
      const token = generateToken(userRecord)

      const user = userRecord.toObject()
      delete user.password

      return {user, token}
    } else {
      throw new Error('Invalid Password')
    }
  } catch (e) {
    console.log('SignUp err:', e)
    throw e
  }
}
