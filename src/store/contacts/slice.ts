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

// const token = localStorage.getItem("access_token");
const token =
  "vk1.a.o0zjqFWNvsZ8fvUOxMjp7ijsTHTTeNxN_B42xFAyJjpKqmb7FGh3G7Y7uKnceI_sSDIt5p8aHiirIKaStGNadNGYxkrYA0nfR_tPiCto5bvGoWCzC2yypuSvfwCjy1FGGGMRi81loZI9zuu-qcL_Jv4CoduSFBkQuW8GDQx8MybSvWQK1z481vuZE9UayjF0";
export const fetchContacts = createAsyncThunk<Contact[]>(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get<Contact[]>(
      `http://localhost:3500/method/messages.getConversations?access_token=${token}&v=5.131`
    );
    // @ts-ignore
    console.log("слайс", response.data.response.items);
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
