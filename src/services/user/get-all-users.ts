import {UserModel, User} from '../../models/user'

export async function getAllUsers(): Promise<Array<User>> {
  return UserModel.find()
}
