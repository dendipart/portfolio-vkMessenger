import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import styled from "@emotion/styled";

const Input = (props: TextFieldProps) => {
  return <StyledTextField {...props} />;
};

const StyledTextField = styled(TextField)`
  width: 360px;
`;

export default Input;
