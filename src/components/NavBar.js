import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/page1">Page 1</NavLink>
      <br />
      <NavLink to="/page2">Page 2</NavLink>
      <br />
      <NavLink to="/helloworld">Hello World</NavLink>
    </div>
  );
};

export default NavBar;
