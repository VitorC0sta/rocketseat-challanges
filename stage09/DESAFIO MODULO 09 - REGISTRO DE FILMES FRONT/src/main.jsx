import React from "react";
import ReactDOM  from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/themes";
import { New } from "./pages/New";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <New />
    </ThemeProvider>
  </React.StrictMode>  
);