import { configureStore,combineReducers } from '@reduxjs/toolkit'

import conReducer from './contacts/con-slice'
import filterReducer from './filter/filter-slice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    contacts: conReducer,
    filter: filterReducer
})

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["contacts"]
}

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store) 