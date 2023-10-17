import { configureStore } from '@reduxjs/toolkit'
import counterreducer from '../Slice/counterSlice'


export const store = configureStore({
  reducer: {
    view:counterreducer
  },
    
})