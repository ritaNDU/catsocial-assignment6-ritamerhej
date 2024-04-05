import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../data/data.types';

const initialValue: User = {
  id: '',
  name: '',
  email: '',
  passwordHash: '',
  token: '',
  friendsIds: [],
  avatar: '',
};

const signedInUserSlice = createSlice({
  name: 'signedInUser',
  initialState: {
    value: initialValue,
  },
  reducers: {
    store: (state, action: PayloadAction<User>) => {
      const user: User = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        passwordHash: action.payload.passwordHash,
        token: action.payload.token,
        friendsIds: action.payload.friendsIds,
        avatar: action.payload.avatar,
      };
      state.value = user;
    },
    signOut: state => {
      state.value = initialValue;
    },
    addFriend: (state, action: PayloadAction<string>) => {
      state.value.friendsIds.push(action.payload);
    },
    removeFriend: (state, action: PayloadAction<string>) => {
      state.value.friendsIds = state.value.friendsIds.filter(
        friendId => friendId === action.payload,
      );
    },
  },
});

export const {store, signOut, addFriend, removeFriend} =
  signedInUserSlice.actions;

export default signedInUserSlice.reducer;
