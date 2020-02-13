import {Schema, model, Document} from 'mongoose'

export type User = Document & {
  name: string
  email: string
  password: string
  role: string
}

export type UserLogin = {
  email: string
  password: string
}

export type UserToken = {
  user: User
  token: string
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    password: String,
    role: {
      type: String,
      default: 'user',
    },
  },
  {timestamps: true},
)

export const UserModel = model<User>('User', UserSchema)
