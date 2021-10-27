import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'

// Creating store and importing reducers
// Also it configures Redux DevTools (Chrome extension) so you can ispect store

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})