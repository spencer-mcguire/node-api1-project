import React, { useState } from "react";
import axios from "axios";

export const UserCard = props => {
  const { name, bio, id } = props.data;
  const [isEditing, setIsEditing] = useState(false);
  const [update, setUpdate] = useState({
    name: name,
    bio: bio
  });
  console.log(update);

  const editStatus = () => {
    setIsEditing(!isEditing);
  };

  const handleChanges = e => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/users/${id}`, update)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setIsEditing(!isEditing);
  };

  const removeUser = () => {
    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={name}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="bio"
            placeholder={bio}
            onChange={handleChanges}
          />
          <button> save </button>
        </form>
      ) : (
        <>
          <h1>{name}</h1>
          <p>{bio}</p>
          <button onClick={editStatus}> edit </button>
        </>
      )}
      <button onClick={removeUser}> delete </button>
    </div>
  );
};
