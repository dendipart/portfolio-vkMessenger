import React, { useState } from "react";
import { useEffect } from "react";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import { useAppDispatch, useAppSelector } from "~/store";
import { fetchContacts, selectContactsList } from "~/store/contacts";
import axios from "axios";
import styled from "@emotion/styled";

//--------------------------------------------------------------------------------------------------------------------------------------------

export default function ContactComponent() {
  const contactList = useAppSelector(selectContactsList);
  const dispatch = useAppDispatch();

  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledBox>
      <List>
        {contactList.map((items: any, index: any) => (
          <StyledListItem
            key={index}
            onClick={() =>
              localStorage.setItem("user_id", items.conversation.peer.id)
            }
          >
            <StyledAvatar />
            <Message>
              <NickDate>
                <ListItemText>{items.conversation.peer.id}</ListItemText>
                <ListItemText>{items.last_message.date}</ListItemText>
              </NickDate>
              <MessageText>
                <Typography>{items.last_message.text.slice(0, 34)}</Typography>
              </MessageText>
            </Message>
          </StyledListItem>
        ))}
      </List>
    </StyledBox>
  );
}

const MessageText = styled.div`
  // display: flex;
`;

const NickDate = styled.div`
  position:absolute,
  width: 530px;
  display: flex;
  justufy-content: space-around;
`;
const Message = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledBox = styled(Box)`
  // background-color: #e3f6fc;
`;

const StyledListItem = styled(ListItem)`
  width: 430px;
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  border-radius: 10px;
  &:hover {
    background: #6588de;
  }
  cursor: pointer;
`;

const StyledAvatar = styled(Avatar)`
  margin: 8px;
`;

// const StyledListItemText = styled.p`
//   margin-left: 10px;
// `;
