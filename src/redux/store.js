import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

export const store = configureStore({
  //configureStore is the method to create store
  //reducer is the key to mention the reducer
  reducer: {
    //place all the reducer in the store so that it can change the value
    //reducer is comming from counterSlice which contains both reducer and action
    counter:counterSlice
  }
})