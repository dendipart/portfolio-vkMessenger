import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../root";

interface Address {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: {
    lat?: number;
    lng?: number;
  };
}

interface Company {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

interface Contact {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
  items?: [];
}

const token = localStorage.getItem("access_token");

export const fetchContacts = createAsyncThunk<Contact[]>(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get<Contact[]>(
      // "https://api.vk.com/method/friends.get?access_token=2bd046babcf9fb9d8009997e68959c01f71f77406d8f05270c3be8c23396e876e125c2b8b43b449c4556b&v=5.131"
      // "https://jsonplaceholder.typicode.com/users"
      // "http://localhost:3500/method/friends.get?fields=nickname&access_token=b70043aa5c7f7568823709ed01735cc76214152a7888cc418f21bf250efc951671a3bb87edc86be6bd1a7&v=5.131"

      // `http://localhost:3500/method/friends.get?fields=nickname&access_token=${token}&v=5.131`
      // "http://localhost:3500/method/messages.getHistory?count=20&user_id=718915126&access_token=99176bcc16b7fccdfe5234c18cc959fb44636e565294cbd87161b5901ed25d54fc83f58bdc7105fd4f922&v=5.131"

      // `http://localhost:3500/method/messages.getHistory?count=20&user_id=718915126&access_token=${token}&v=5.131`
      // "http://localhost:3500"

      `http://localhost:3500/method/messages.getConversations?access_token=26085fd35498e4ac88e04fcfd3829c36051de6bf10650753858a899e0225386836377daa1abf654ff0568&v=5.131`
    );
    // @ts-ignore
    console.log(response.data.response.items);
    //@ts-ignore
    return response.data.response.items;
  }
);

export interface ContactsState {
  contactList: Contact[];
  chat?: {};
}

const initialState: ContactsState = {
  contactList: [],
  chat: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contactList = action.payload;
    });
  },
});

export const selectContactsList = (state: RootState) =>
  state.contacts.contactList;

export const selectChat = (state: RootState) => state.contacts.chat;

export default contactsSlice.reducer;
