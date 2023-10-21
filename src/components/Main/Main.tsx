import React from "react";
import logo from "./logo.svg";
import Box from "@mui/material/Box";
interface IProps {}

export default function Main(props: IProps) {
  return (
    <Box sx={{ p: 2, height: 'calc(100vh - 200px)' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </Box>
  );
}
