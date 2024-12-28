import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";  // Menggunakan localStorage sebagai penyimpanan
import userReducer from "./state";  // Gantilah dengan file state.js yang sesuai, jika perlu

// Konfigurasi untuk redux-persist
const persistConfig = {
  key: "root",  // Kunci untuk menyimpan data ke localStorage
  version: 1,   // Versi dari persist
  storage,      // Menggunakan localStorage atau sessionStorage
};

// Membuat persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);  // Ganti `userReducer` jika sesuai

export const store = configureStore({
  reducer: persistedReducer,  // Menambahkan persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],  // Mengabaikan aksi dari redux-persist
      },
    }),
});

export const persistor = persistStore(store);  // Membuat persistor untuk persisten state
