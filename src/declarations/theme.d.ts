import { ReactElement } from "react";

interface CustomTheme {
  palette: {
    background: {
      dark: string;
      light: string;
    };
    common: {
      white: string;
      black: string;
    };
    primary: {
      dark: string;
      main: string;
    };
  };
}

interface CustomThemeOptions {
  palette?: {
    background?: {
      dark?: string;
      light?: string;
    };
    common?: {
      white?: string;
      black?: string;
    };
    primary?: {
      dark?: string;
      main?: string;
    };
  };
}

declare module "@mui/material/styles" {
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}

  export function Global(props: GlobalProps): ReactElement;
}
