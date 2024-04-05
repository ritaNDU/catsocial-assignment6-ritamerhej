import axios from 'axios';
import {Alert} from 'react-native';
import {Post} from '../data/data.types';
import {BASE_URL, POSTS_ENDPOINT, POSTS_LIMIT} from './api.data';

export function storePostInApi(post: Post) {
  axios
    .post(BASE_URL + `${POSTS_ENDPOINT}/`, post)
    .catch(() =>
      Alert.alert("An error occured. Your post couldn't be added. Try again."),
    );
}

export async function getPostsFromApi(page: string) {
  const url = new URL(BASE_URL + 'posts');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', JSON.stringify(POSTS_LIMIT));
  const response = await axios
    .get(url.href)
    .catch(() =>
      Alert.alert(
        "Couldn't get data. Make sure you are connected to the internet and try again.",
      ),
    );
  const posts: Post[] = [];
  if (response) {
    const data = response.data;

    for (const key in data) {
      const post: Post = {
        id: data[key].id,
        userId: data[key].userId,
        text: data[key].text,
        imageUri: data[key].imageUri,
        likes: data[key].likes,
        comments: data[key].comments,
      };
      posts.push(post);
    }
  }
  return posts;
}

export async function getPostFromApi(postId: string) {
  const url = new URL(BASE_URL + POSTS_ENDPOINT);
  url.searchParams.append('id', postId);
  const response = await axios
    .get(url.href)
    .catch(() =>
      Alert.alert(
        "Couldn't get data. Make sure you are connected to the internet and try again.",
      ),
    );
  if (response) {
    const data = response.data;
    const post: Post = {
      id: data.id,
      userId: data.userId,
      text: data.text,
      imageUri: data.imageUri,
      likes: data.likes,
      comments: data.comments,
    };
    return post;
  } else {
    Alert.alert("Couldn't get post.");
  }
}

export async function modifyPostFromApi(post: Post) {
  await axios
    .put(BASE_URL + `${POSTS_ENDPOINT}/${post.id}`, post)
    .catch(() => Alert.alert("An error occured. Post couldn't be modified."));
}
