import React from "react";
import { useEffect } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

import { useAppDispatch, useAppSelector } from "~/store";
import { fetchContacts, selectContactsList } from "~/store/contacts";
import styled from "@emotion/styled";

//--------------------------------------------------------------------------------------------------------------------------------------------

export default function ContactComponent() {
  const contactList = useAppSelector(selectContactsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChat = (arg: any) => {
    console.log(arg);
  };

  return (
    <StyledBox>
      <List>
        {contactList.map((items: any, index: any) => (
          <StyledListItem
            key={index}
            onClick={() => handleChat(items.conversation.peer.id)}
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
