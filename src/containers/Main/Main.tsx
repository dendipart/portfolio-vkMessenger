import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AppBar from "@mui/material/AppBar";
import ContactComponent from "~/containers/Main/ContactList/ContactComponent";
import SearchAppBar from "~/components/SearchAppBar/SearchAppBar";
import axios from "axios";
import {
  Avatar,
  Button,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";

const drawerWidth = 440;

interface Props {
  window?: () => Window;
}

export default function Main(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const tokenskiy =
    "26085fd35498e4ac88e04fcfd3829c36051de6bf10650753858a899e0225386836377daa1abf654ff0568"; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [chat, setChat] = useState([]);

  const handleChat = () => {
    // useEffect(() => {
    const chats = async () => {
      const response = await axios(
        `http://localhost:3500/method/messages.getHistory?count=20&user_id=${user_id}&access_token=${tokenskiy}&v=5.131`
      );
      setChat(response.data.response.items);
      console.log("chats", chat);
      // .then((response) => setChat(response.data.response.items));
      // .then((response) => console.log(response.data.response.items));
    };
    chats();
    // }, []);
  };

  // setTimeout(handleChat, 2500);

  const [userName, setUserName] = useState([]);

  const user_id: any = localStorage.getItem("user_id");

  useEffect(() => {
    console.log("friends");
    axios
      .get(
        `http://localhost:3500/method/friends.get?fields=nickname&access_token=${tokenskiy}&v=5.131`
      )
      .then((response) => setUserName(response.data.response.items));
    // .then((response) => console.log(response.data.response.items));
  }, []);

  function handleSend() {
    axios.post(
      `http://localhost:3500/method/messages.send?user_id=718915126&random_id=0&peer_id=711836067&message=${message}&access_token=${tokenskiy}&v=5.131`
    );
  }

  const [message, setMessage] = useState([]);

  const postInput = (event: any) => {
    // console.log(message);
    setMessage(event.target.value);
    event.preventDefault();
  };

  const drawer = (
    <div>
      <SearchAppBar />
    </div>
  );

  const container =
    //@ts-ignore
    window !== undefined ? () => document.body : undefined;

  const arr1: any = userName
    .map((items: any) => {
      return {
        id: items.id,
        firstName: items.first_name,
        lastName: items.last_name,
      };
    })
    .filter((fullName: any) => fullName.id == user_id)
    .map((items) => {
      return items.firstName + " " + items.lastName;
    });
  console.log("фулнейм", arr1);
  // useEffect(() => {
  //   window.scroll(0, 1000);
  // }, []);

  function ChatWindow() {
    console.log("chatWindow");
    useEffect(() => {
      window.scroll(0, 1000);
    }, []);

    const arr2: any = chat.map((items: any) => {
      return {
        text: items.text,
        date: items.date,
      };
    });
    console.log("вот", arr2);
    return (
      <>
        {arr2.map((i: any) => (
          <List>
            <StyledListItem>
              <ListItemText>
                <Typography>{i.text}</Typography>
                {i.date}
              </ListItemText>
            </StyledListItem>
          </List>
        ))}
      </>
    );
  }

  return (
    <MainDiv>
      <Box sx={{ display: "flex" }}>
        <StyledBox
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <StyledDrawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {/* {drawer} */}
          </StyledDrawer>
          <StyledDrawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,

                backgroundColor: "primary.main",
              },
            }}
            open
          >
            {drawer}
            <div onClick={() => handleChat()}>
              <ContactComponent />
            </div>
          </StyledDrawer>
        </StyledBox>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Box sx={{ flexGrow: 1, position: "fixed" }}>
            <AppBar>
              <Toolbar>
                <Avatar></Avatar>
                {/* <List>
                  <StyledListItem>
                    <ListItemText></ListItemText>
                  </StyledListItem>
                </List> */}
                <Typography>{arr1}</Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <ChatWindows>
            <ChatWindow />
          </ChatWindows>

          {/* <ChatWindow>
              {chat.map((items: any, index: any) => (
                <List>
                  <StyledListItem key={index}>
                    <ListItemText>
                      <Typography>{items.text}</Typography>
                      {items.date}
                    </ListItemText>
                  </StyledListItem>
                </List>
              ))}
            </ChatWindow> */}
          <InputDiv>
            <InputBase
              placeholder="Message"
              inputProps={{ "aria-label": "message" }}
              onInput={postInput}
              defaultValue=""
            ></InputBase>
            <Button onClick={() => handleSend()}>Send</Button>
          </InputDiv>
        </Box>
      </Box>
    </MainDiv>
  );
}

const StyledBox = styled(Box)`
  background-color: #e3f6fc;
`;

const StyledDrawer = styled(Drawer)`
  background-color: e3f6fc;
`;

const MainDiv = styled.div`
  height: 100vh;
  background-color: transparent;
  // background-color: black;
`;

const InputDiv = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  margin-left: 5px;
  border-radius: 10px;
`;

const ChatWindows = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
