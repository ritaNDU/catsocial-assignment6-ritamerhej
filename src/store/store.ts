import {configureStore} from '@reduxjs/toolkit';
import allUsersReducer from './allUsersSlice';
import allPostsReducer from './allPostsSlice';
import signedInUserReducer from './signedInUserSlice';

const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    allPosts: allPostsReducer,
    signedInUser: signedInUserReducer,
  },
});
export default store;
