import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

function MyComponent() {
  const [userList, setUserList] = useState([{}]);

  const [userName, setUserName] = useState("");
  const userNameHandler = (e) => setUserName(e.target.value);

  const [userWork, setUserWork] = useState("");
  const userWorkHandler = (e) => setUserWork(e.target.value);

  const [userEmail, setUserEmail] = useState("");
  const userEmailHandler = (e) => setUserEmail(e.target.value);

  const [userPassword, setUserPassword] = useState("");
  const userPasswordHandler = (e) => setUserPassword(e.target.value);

  //Create new user and post
  const addUser = async () => {
    const newUser = {
      name: userName,
      work: userWork,
      email: userEmail,
      password: userPassword,
    };

    const newUserList = [newUser, ...userList];
    setUserList(newUserList);

    //make API call
    let url = "http:localhost:8000/create-user";
    //we are cloning the new user we can send as it is also but we are sendind id null boz at database we incrementing id by default
    await axios.post(url, { ...newUser, id: null });

    //after creation make fields blank/clear
    setUserName("");
    setUserWork("");
    setUserEmail("");
    setUserPassword("");
  };

  //get all user dfrom database amke it useeffect so that automatically gets all the data
  const getAllUser = async () => {
    let url = "get usl";
    const responce = await axios.get(url);
    setUserList(responce.data);
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-3 w-100">User Registration</h1>

      <form>
        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter your name"
            value={userName}
            onChange={userNameHandler}
          />
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="work"
            value={userWork}
            onChange={userWorkHandler}
          />
          <input
            type="email"
            className="form-control form-control-lg mb-1"
            placeholder="Email address"
            value={userEmail}
            onChange={userEmailHandler}
          />
          <input
            type="password"
            className="form-control form-control-lg mb-1"
            placeholder="Password"
            value={userPassword}
            onChange={userPasswordHandler}
          />

          <input
            type="button"
            className="btn btn-lg btn-secondary w-100"
            value="Register"
            onClick={addUser}
          />
        </div>
      </form>

      <div>
        {userList.map((item) => {
          return (
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Work</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.work}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
}
export default App;
