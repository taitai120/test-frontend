import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import "./UsersManagement.scss";
import { Link } from "react-router-dom";
import {
  deleteUserAction,
  getUserDetailAction,
} from "../../redux/actions/UsersActions";

function UsersManagement() {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.UsersReducer);

  const deleteUser = (id) => {
    // const answer = confirm("Are you sure you want to delete this user?");
    // console.log(answer);
    const answer = window.confirm("Are you sure you want to delete this user?");
    if (answer) {
      dispatch(deleteUserAction(id));
    }
  };

  const renderUsers = () => {
    return userList?.map((user, index) => (
      <tr key={index} className={`${index % 2 !== 0 ? "table-primary" : ""}`}>
        <td>{user.name}</td>
        <td>{user.birth}</td>
        <td>{user.gender}</td>
        <td>{user.role}</td>
        <td>
          <Link
            onClick={() => dispatch(getUserDetailAction(user))}
            to={`/admin/edit-user/${user.id}`}
          >
            <EditFilled className="custom-edit-icon" />
          </Link>
          <button onClick={() => deleteUser(user.id)}>
            <DeleteFilled className="custom-delete-icon" />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Users-Management</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Birth</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </div>
  );
}

export default UsersManagement;
