import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../data/data.types';

const initialValue: User[] = [];

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: {
    value: initialValue,
  },
  reducers: {
    store: (state, action: PayloadAction<User[]>) => {
      state.value = action.payload;
    },
    add: (state, action: PayloadAction<User>) => {
      state.value.push(action.payload);
    },
  },
});

export const {store, add} = allUsersSlice.actions;
export default allUsersSlice.reducer;
