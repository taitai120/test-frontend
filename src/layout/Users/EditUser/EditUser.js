import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  getUserDetailAction,
  updateUserAction,
} from "../../../redux/actions/UsersActions";

function EditUser() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailAction(id));
  }, []);

  const { editUser } = useSelector((state) => state.UsersReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !editUser.name ||
      !editUser.birth ||
      !editUser.gender ||
      !editUser.role ||
      !editUser.joindate
    ) {
      console.log("Please fill all inputs");
    } else {
      dispatch(updateUserAction(editUser.id, editUser));
      alert("Updated an user");
      history.push("/admin/users-management");
    }
  };

  return (
    <div className="edit-user">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name..."
            name="name"
            value={editUser.name}
            // onChange={handleChange}
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
            value={editUser.birth}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth">Joindate: </label>
          <input
            type="date"
            className="form-control"
            id="birth"
            placeholder="Enter your birth..."
            name="birth"
            value={editUser.joindate}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={editUser.gender}
            // onChange={handleChange}
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
            value={editUser.role}
            // onChange={handleChange}
          >
            <option>user</option>
            <option>admin</option>
            <option>manager</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mr-3">
          Submit
        </button>
        <button type="submit" className="btn btn-danger">
          <Link style={{ color: "white" }} to="/admin/users-management">
            Cancel
          </Link>
        </button>
      </form>
    </div>
  );
}

export default EditUser;
