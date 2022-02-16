import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../../redux/actions/UsersActions";

function CreateUser() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    birth: "",
    gender: "male",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.birth || !newUser.gender || !newUser.role) {
      console.log("Please fill all inputs");
    } else {
      dispatch(registerUserAction(newUser));
      alert("Created an user");
      history.push("/admin/users-management");
    }
  };

  return (
    <div classname="create-user">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name..."
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth">Birth: </label>
          <input
            type="date"
            className="form-control"
            id="birth"
            placeholder="Enter your birth..."
            name="birth"
            value={newUser.birth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={newUser.gender}
            onChange={handleChange}
          >
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            className="form-control"
            id="role"
            name="role"
            value={newUser.role}
            onChange={handleChange}
          >
            <option>user</option>
            <option>admin</option>
            <option>manager</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
