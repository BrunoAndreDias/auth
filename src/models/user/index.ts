import {Schema, model, Document} from 'mongoose'

export type UserDocument = Document & {
  name: string
  email: string
  password: string
  role: string
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

export const User = model<UserDocument>('User', UserSchema)
