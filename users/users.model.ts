import * as mongoose from 'mongoose';

export interface UserI extends mongoose.Document {
  name: string,
  email: string,
  password: string
}

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    select: false
  }
});

export const User = mongoose.model<UserI>('User', userSchema);
