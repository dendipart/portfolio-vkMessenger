import React from "react";
import axios from "axios";
import { Button, Avatar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import SelectCountry from "../../components/SelectCountry/SelectCountry";
import Input from "../../components/Input/Input";
import { INPUT_NAMES } from "../../constants";

import {
  useAppDispatch,
  setUser,
  getToken,
  useAppSelector,
  selectUser,
} from "../../store";
import styled from "@emotion/styled";

export default function PhoneLogin() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const { register, setValue } = useForm({
    defaultValues: {
      [INPUT_NAMES.COUNTRY_CODE]: "+7",
      [INPUT_NAMES.PHONE_NUMBER]: "9100051617",
    },
  });

  const countryCodeField = register(INPUT_NAMES.COUNTRY_CODE, {
    required: true,
  });
  const phoneNumberField = register(INPUT_NAMES.PHONE_NUMBER, {
    required: true,
    maxLength: 10,
    pattern: /[0-9]/gi,
  });

  const handleChangeUser = () => {
    dispatch(
      setUser({
        firstName: "John",
        lastName: "Wick",
        login: "johnwick",
        number: "21321421",
      })
    );
  };

  const handleSubmit = () => {
    //@ts-ignore
    window.location.href =
      // "https://oauth.vk.com/authorize?client_id=8102682&redirect_uri=http://localhost:3000/&response_type=token";
      "https://oauth.vk.com/authorize?client_id=8102682&display=popup&redirect_uri=http://localhost:3000&response_type=token";
  };

  return (
    <Wrapper>
      <div>
        <form>
          <Logo>
            <img
              src="https://web.telegram.org/z/telegram-logo.1b2bb5b107f046ea9325..svg"
              alt=""
            />
          </Logo>
          <h1>Sign in to Telegram</h1>
          <p>Please confirm your country and</p>
          <p>enter your phone number.</p>
          <SelectCountry handleChange={setValue} />
          <Input
            variant="standard"
            label="Country Code"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={countryCodeField.ref}
            {...countryCodeField}
          />
          <Input
            variant="standard"
            label="Phone Number"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            inputRef={phoneNumberField.ref}
            {...phoneNumberField}
          />
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </form>
        {/* <div>
    //   <div>firstName: {user.firstName}</div>
    //   <div>lastName: {user.lastName}</div>
    //   <div>login: {user.login}</div>
    //   <div>number: {user.number}</div>
    // </div> */}
      </div>
    </Wrapper>
  );
}

const Logo = styled(Avatar)`
  width: 150px;
  height: 150px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
