import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice//AuthSlice";
// import { apiSlice } from "./features/api/apiSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
	key: "root",
	storage,
};

const rootReducers = combineReducers({
	authReducer,
});

// Wrap the authReducer with redux-persist
const persistedAuthReducer = persistReducer(authPersistConfig, rootReducers);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		// [apiSlice.reducerPath]: apiSlice.reducer,   // Will be used in future when we will use redux tool kit query
	},
	// devTools: process.env.NODE_ENV !== "production",
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware({ serializableCheck: false }).concat([
	// 		apiSlice.middleware,
	// 	]),
});

export const persistor = persistStore(store);
