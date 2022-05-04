import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export default function QrConnect() {
  return (
    <Wrapper>
      <div>
        <Button onClick={() => console.log("asdasd")}>
          <Link to="/Main">
            <img src="https://www.donarit.com/vik5.png" alt="tg" className="" />
          </Link>
        </Button>
        <h2>Log in to Telegram by QR Code</h2>
        <ol type="1">
          <li>Open Telegram on your phone</li>
          <li>
            Go to <b>Settings</b>
            {" > "}
            <b>Devices</b>
            {" > "}
            <b>Link Desktop Device</b>
          </li>
          <li>Point your phone at this screen to confirm login</li>
        </ol>
        <Link to="/PhoneLogIn">Or log in using your phone number</Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
