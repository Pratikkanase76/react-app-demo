import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("use Effect hook");
    ajaxCall();
  }, []);

  const ajaxCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const result = await axios.get(url);
    console.log(result.data);

    setList(result.data);
  };

  return (
    <div>
      <h1>Working with AJAX</h1>
      <input type="button" value="AJAX Call" onClick={ajaxCall} />

      <div>
        {list.map((item) => {
          return (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">UserId</th>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default App;
