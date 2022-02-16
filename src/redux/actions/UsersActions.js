import * as ActionType from "../constants/UsersConstants";
import axios from "axios";
import moment from "moment";

export const getUsersAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        "https://620c14c1b57363259386626d.mockapi.io/users"
      );
      const data = await result.data;
      dispatch({
        type: ActionType.GET_USERS,
        payload: data,
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
};

export const deleteUserAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(
        `https://620c14c1b57363259386626d.mockapi.io/users/${id}`
      );
      dispatch({
        type: ActionType.DELETE_USER,
        payload: id,
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
};

export const registerUserAction = (newUser) => {
  return async (dispatch) => {
    try {
      const date = new Date();
      const joindate = moment(date).format("DD-MM-YYYY");
      newUser.joindate = joindate;
      const result = await axios.post(
        `https://620c14c1b57363259386626d.mockapi.io/users/`,
        newUser
      );
      dispatch({
        type: ActionType.REGISTER_USER,
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
};

export const getUserDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `https://620c14c1b57363259386626d.mockapi.io/users/${id}`
      );
      const data = await result.data;
      moment(data.birth).format("DD-MM-YYYY");
      moment(data.joindate).format("DD-MM-YYYY");
      dispatch({
        type: ActionType.GET_USER_DETAIL,
        payload: data,
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
};

export const updateUserAction = (id, editUser) => {
  return async (dispatch) => {
    try {
      const result = await axios.put(
        `https://620c14c1b57363259386626d.mockapi.io/users/${id}`,
        editUser
      );
      const data = await result.data;
      dispatch({
        type: ActionType.UPDATE_USER,
        payload: data,
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
};
