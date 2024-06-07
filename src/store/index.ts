import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

const store = configureStore({
  reducers: {
    carrinho: carrinhoReducer
  }
})
