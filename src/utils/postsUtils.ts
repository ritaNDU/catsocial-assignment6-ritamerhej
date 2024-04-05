import {Post} from '../data/data.types';

export function getPostById(posts: Post[], postId: string) {
  return posts.find(post => post.id === postId);
}
