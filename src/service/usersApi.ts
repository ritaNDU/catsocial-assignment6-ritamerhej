import axios from 'axios';
import {Alert} from 'react-native';
import {User} from '../data/data.types';
import {BASE_URL, USERS_ENDPOINT, USERS_LIMIT} from './api.data';

export function storeUserInApi(user: User) {
  axios
    .post(BASE_URL + `${USERS_ENDPOINT}}/`, user)
    .catch(() =>
      Alert.alert(
        "An error occured. Your account couldn't be created properly. Try again.",
      ),
    );
}

export async function getUsersFromApi(page: string) {
  const url = new URL(BASE_URL + USERS_ENDPOINT);
  url.searchParams.append('page', page);
  url.searchParams.append('limit', JSON.stringify(USERS_LIMIT));
  const response = await axios
    .get(url.href)
    .catch(() =>
      Alert.alert(
        "Couldn't get data. Make sure you are connected to the internet and try again.",
      ),
    );
  const users: User[] = [];
  if (response) {
    const data = response.data;

    for (const key in data) {
      const user: User = {
        id: data[key].id,
        name: data[key].name,
        email: data[key].email,
        passwordHash: data[key].passwordHash,
        token: data[key].token,
        friendsIds: data[key].friendsIds,
        avatar: data[key].avatar,
      };
      users.push(user);
    }
  }
  return users;
}

export async function getUserFromApi(userId: string) {
  const url = new URL(BASE_URL + USERS_ENDPOINT);
  url.searchParams.append('id', userId);
  const response = await axios
    .get(url.href)
    .catch(() =>
      Alert.alert(
        "Couldn't get data. Make sure you are connected to the internet and try again.",
      ),
    );
  if (response) {
    const data = response.data;
    const user: User = {
      id: data.id,
      name: data.name,
      email: data.email,
      passwordHash: data.passwordHash,
      token: data.token,
      friendsIds: data.friendsIds,
      avatar: data.avatar,
    };
    return user;
  } else {
    Alert.alert("Couldn't get user.");
  }
}

export async function modifyUserFromApi(user: User) {
  await axios
    .put(BASE_URL + `${USERS_ENDPOINT}/${user.id}`, user)
    .catch(() => Alert.alert("An error occured. User couldn't be modified."));
}
