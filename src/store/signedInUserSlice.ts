import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../data/data.types';

const initialValue: User = {
  id: '',
  name: '',
  email: '',
  password: '',
  token: '',
  friendsIds: [],
  likedPosts: [],
};

const signedInUserSlice = createSlice({
  name: 'signedInUser',
  initialState: {
    value: initialValue,
  },
  reducers: {
    loadUser: (state, action: PayloadAction<User>) => {
      const user: User = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token,
        friendsIds: action.payload.friendsIds,
        likedPosts: action.payload.likedPosts,
      };
      state.value = user;
    },
    removeUser: state => {
      state.value = initialValue;
    },
  },
});

export const {loadUser, removeUser} = signedInUserSlice.actions;

export default signedInUserSlice.reducer;
