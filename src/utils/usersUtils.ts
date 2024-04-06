import {User} from '../data/data.types';

export function getUserByEmail(users: User[], email: string): User {
  console.log(email);
  return users.filter(user => email === user.email)[0];
}
