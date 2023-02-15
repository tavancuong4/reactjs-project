const initState = {
  users: [
    { id: 1, name: "Cương yêu Kiều" },
    { id: 2, name: "Sơn yêu Tiền" },
    { id: 3, name: "Tân yêu Ngủ" },
  ],
  post: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("check", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload);
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10001),
        user = { id: id, name: `Random - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};
export default rootReducer;
