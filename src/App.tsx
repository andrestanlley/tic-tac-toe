import React from "react";
import Home from "./pages/home";
import Router from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
