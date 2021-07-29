import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

const App = () => {
  return (
    <>
      <div>
        <h1 className="bg-dark text-light p-3 head1">Working with CSS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          autem eligendi consequatur voluptate optio sint eum beatae
          voluptatibus? Doloremque, esse.
        </p>
      </div>

      <div className="bg-dark text-light p-3 head1">
        <HelloWorld />
      </div>
    </>
  );
};

export default App;
