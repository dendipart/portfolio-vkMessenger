import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users/slice";
import contactsReducer from "./contacts/slice";

export const rootStore = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
