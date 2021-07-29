import React from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={NavBar} />
      <Route exact={true} path="/helloworld" component={HelloWorld} />
      <Route exact={true} path="/page1" component={Page1} />
      <Route exact={true} path="/page2" component={Page2} />
    </BrowserRouter>
  );
};

export default App;
