import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../root";

export interface UserState {
  login?: string;
  number?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}

const initialState: UserState = {
  login: "",
  number: "",
  firstName: "",
  lastName: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.login = action.payload.login;
      state.number = action.payload.number;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    getToken: (state, action: PayloadAction<UserState>) => {
      console.log(action);
      state.token = action.payload.token;
    },
  },
});

export const { setUser, getToken } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

// redux:

// Store {
//   asdfasd: 234344
// }

// Dispatch(Action);

// Reducer();

// Action {
//   type: "UPDATE_USER",
//   payload: {
//     firstName: "John"
//   }
// }

// API
// QJReugBvK44deL3C2BHLx7BMZ

// API SECRET
// 0Tf73nEvTiimQp5oWQLLVIcf7EMONw4PLroilRg1pPvcs0YiBF

// Bearer
// AAAAAAAAAAAAAAAAAAAAAImfZwEAAAAANVoESpER8pJLpEVmNLVVB7Q1j6Q%3D4NVpDLnCNc9Q1lUm3q6R4o2rvnekOnpVNnt2iqgS6YkTs00wGh

// componentDidMount и причем тут useEffect

// ДЗ:

/*
  Отправить запрос на jsonplaceholder, получить 10 юзеров (axios, useEffect)
  Создать ContactsListSlice.ts
  Сохранить ответ в Store (slice, action, dispatch)
  Вывести в списке в sidebar (react-component, react-select (см, 42 строка))
*/
