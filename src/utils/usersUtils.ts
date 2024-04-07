import {User} from '../data/data.types';

export function getUserByEmail(users: User[], email: string): User {
  return users.filter(user => email === user.email)[0];
}
