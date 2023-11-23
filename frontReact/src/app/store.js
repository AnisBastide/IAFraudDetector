import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/essentials/modules/_usersStorage.js'

export default configureStore({
    reducer: {
      counter: counterReducer,
    },
})