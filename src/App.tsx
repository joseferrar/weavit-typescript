import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import RouteComponent from "./components/Navigation/RouteComponent";
import { theme } from "./theme/default";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RouteComponent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
