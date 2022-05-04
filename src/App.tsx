import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { Global, css } from "@emotion/react";
import { Provider as ProviderRedux } from "react-redux";
import { lightTheme } from "./Theme";
import { Routes, Route } from "react-router-dom";
import queryString from "query-string";

import { rootStore } from "./store";
import QrConnect from "./containers/QrConnect/QrConnect";
import PhoneLogIn from "./containers/PhoneLogIn/PhoneLogIn";
import Main from "~/containers/Main/Main";

const App = () => {
  useEffect(() => {
    const parsed = queryString.parse(location.hash);
    if (parsed.access_token) {
      // @ts-ignore
      localStorage.setItem("access_token", parsed.access_token);
    }
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <ProviderRedux store={rootStore}>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;700&display=swap");

            * {
              margin: 0;
              padding: 0;
              font-family: "Baloo Bhaijaan 2", cursive;
            }

            button > a {
              text-decoration: none;
              color: #f7f7f7;
            }
          `}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* @ts-ignore */}
          <Route exact path="/PhoneLogIn" element={<PhoneLogIn />} />
          <Route path="/Qr" element={<QrConnect />} />
        </Routes>
      </ProviderRedux>
    </ThemeProvider>
  );
};

export default App;
