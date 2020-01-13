import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { UserCard } from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users").then(res => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map(data => (
        <UserCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default App;
