import * as argon2 from 'argon2'
import {generateToken} from './generate-token'
import {UserToken, UserModel, User} from '../../models/user'

export async function register(user: User): Promise<UserToken> {
  try {
    const passwordHashed = await argon2.hash(user.password)

    const userRecord = await UserModel.create({
      password: passwordHashed,
      email: user.email,
      name: user.name,
    })

    const token = generateToken(userRecord)
    delete userRecord.password

    return {
      user: userRecord,
      token,
    }
  } catch (e) {
    console.log('SignUp err: ', e)
    throw e
  }
}
