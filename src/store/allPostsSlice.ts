import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment, Post} from '../data/data.types';
import {getPostById} from '../utils/postsUtils';

const initialValue: Post[] = [];

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    value: initialValue,
  },
  reducers: {
    store: (state, action: PayloadAction<Post[]>) => {
      state.value = action.payload;
    },
    add: (state, action: PayloadAction<Post[]>) => {
      state.value.push(...action.payload);
    },
    like: (state, action: PayloadAction<string>) => {
      const post = getPostById(state.value, action.payload);
      if (post) {
        post.likes += 1;
        state.value[state.value.indexOf(post)] = post;
      }
    },
    dislike: (state, action: PayloadAction<string>) => {
      const post = getPostById(state.value, action.payload);
      if (post) {
        post.likes -= 1;
        state.value[state.value.indexOf(post)] = post;
      }
    },
    addComment: (
      state,
      action: PayloadAction<{postId: string; comment: Comment}>,
    ) => {
      const post = getPostById(state.value, action.payload.postId);
      if (post) {
        post.comments.push(action.payload.comment);
        state.value[state.value.indexOf(post)] = post;
      }
    },
  },
});

export const {store, add, like, dislike, addComment} = allPostsSlice.actions;
export default allPostsSlice.reducer;
