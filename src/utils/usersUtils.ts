import {User} from '../data/data.types';

export function getUserByEmail(users: User[], email: string): User {
  // The [0] is added to only get the first registered user with the same email. This is done because checking the
  // for duplicate users using the api is not possible
  return users.filter(
    user => email.toLocaleLowerCase() === user.email.toLocaleLowerCase(),
  )[0];
}
