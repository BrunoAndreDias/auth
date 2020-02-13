import {User, UserDocument} from '../../models/user'

export async function getAllUsers(): Promise<Array<UserDocument>> {
  return User.find()
}
