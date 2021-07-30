import React, { useState } from "react";
// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import HelloWorld from "./components/HelloWorld";
// import NavBar from "./components/NavBar";
// import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return <MyComponent />;
};

function MyComponent() {
  const [list, setList] = useState([]);
  const [post, setPost] = useState("");

  const getThought = (data) => {
    const post = data.target.value;
    setPost(post);
  };

  const postThought = () => {
    const newList = [post, ...list];
    setList(newList);
    setPost("");
  };
  return (
    <>
      <div className="m-2">
        <h1>Working with Forms</h1>

        <input
          type="text"
          className="form-control form-control-lg my-2"
          style={{ height: 75 }}
          placeholder="Put your thoughts here"
          onChange={getThought}
        />

        <input
          type="button"
          className="btn btn-primary w-100"
          value="Post"
          onClick={postThought}
        />

        <div className="alert alert-primary mt-2">Posts</div>

        {list.map((item) => {
          return <div className="alert alert-primary mt-1">{item}</div>;
        })}
      </div>
    </>
  );
}

export default App;
