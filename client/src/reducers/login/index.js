function login(state = {user: {}}, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return Object.assign(state, {user: action.user});
    default:
      return state;
  }
}

export default login;