import "./App.css";
import { useState } from "react";

function App() {
  //react hooks
  const [list, setList] = useState([]);

  const addNewHello = () => {
    const newList = [...list, "Hello"];
    setList(newList);
  };

  console.log(list);
  //list.map always put in {}
  return (
    <div>
      <h1>Working with Events and List</h1>

      <input type="button" value="Say Hello" onClick={addNewHello} />

      {list.map((item) => {
        return <h3>{item}</h3>;
      })}
    </div>
  );
}

export default App;
