import { configureStore,combineReducers } from '@reduxjs/toolkit'

import conReducer from './products/prod-slice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    products: conReducer,
})

const productsPersistConfig = {
    key: "products",
    storage,
    whitelist: ["products"]
}

const persistedReducer = persistReducer(productsPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store) 