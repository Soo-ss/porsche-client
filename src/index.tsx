import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { ThemeProvider } from "./styles/themeComponents";
// import "./scss/reset.scss";
import "./cdn.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
