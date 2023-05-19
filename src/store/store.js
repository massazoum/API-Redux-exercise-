// store.js
import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../Redux/userSlice';

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
export default store;
