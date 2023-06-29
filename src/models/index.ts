import { model } from 'mongoose';
import { UserSchema } from './schemas/User';
import { COLLECTIONS } from './collections';

export const UserModel = model(COLLECTIONS.USERS, UserSchema);
