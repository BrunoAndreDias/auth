import {User, UserDocument} from '../../models/user'

export async function createUser(
  userData: UserDocument,
): Promise<UserDocument> {
  console.log('create user', userData)
  return User.create(userData)
}
