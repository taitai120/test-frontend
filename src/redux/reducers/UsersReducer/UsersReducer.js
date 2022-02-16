import * as ActionType from "../../constants/UsersConstants";

const initialState = {
  userList: [],
  editUser: {
    name: "",
    birth: "",
    gender: "male",
    joindate: "",
    role: "user",
  },
  // userList: [
  //   {
  //     id: 0,
  //     name: "Admin-1",
  //     birth: "07-02-1993",
  //     gender: "male",
  //     joindate: "15-02-2022",
  //     role: "admin",
  //   },
  //   {
  //     id: 1,
  //     name: "Admin-2",
  //     birth: "08-02-1993",
  //     gender: "male",
  //     joindate: "15-02-2022",
  //     role: "admin",
  //   },
  //   {
  //     id: 2,
  //     name: "User-1",
  //     birth: "07-02-1993",
  //     gender: "male",
  //     joindate: "15-02-2022",
  //     role: "user",
  //   },
  //   {
  //     id: 3,
  //     name: "User-2",
  //     birth: "07-02-1993",
  //     gender: "male",
  //     joindate: "15-02-2022",
  //     role: "user",
  //   },
  //   {
  //     id: 4,
  //     name: "Manger-1",
  //     birth: "07-02-1993",
  //     gender: "male",
  //     joindate: "15-02-2022",
  //     role: "manager",
  //   },
  //   {
  //     id: 5,
  //     name: "Manger-2",
  //     birth: "07-02-1993",
  //     gender: "male",
  //     joindate: "15-02-2022",
  //     role: "manager",
  //   },
  // ],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USERS: {
      state.userList = action.payload;
      return { ...state };
    }

    case ActionType.DELETE_USER: {
      console.log(`Deleted user with id: ${action.payload}`);
      return { ...state };
    }

    case ActionType.GET_USER_DETAIL: {
      state.editUser = action.payload;
      return { ...state };
    }

    case ActionType.UPDATE_USER: {
      state.editUser = null;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default UsersReducer;
