import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer, videoReducer } from '../features';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

// combile all reducer from slice
const rootReducer = combineReducers({
  user: userReducer,
  video: videoReducer
});

// setup reducer and redux persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

// finnaly user persistor
export const persistor = persistStore(store);
