import decode_token from "../utils/index";

const storeReducer = (state, action) => {
  //Extracts the type of action and any extra data (payload).
  const { type, payload } = action; //Destructuring Action

  if (type === "login_success") {
    state.token = payload.token;
    state.userInfo = decode_token(payload.token);
  }
  if (type === "logout") {
    state.token = "";
    state.userInfo = "";
  }
  return state;

  // if (type === "login_success") {
  //   return { ...state, token: payload.token };
  // }
  // if (type === "logout") {
  //   return { ...state, token: "", userInfo: "" };
  // }
  // return state;
};

export default storeReducer;

// A reducer is a function that updates state based on actions.
// Your code updates the token on login and clears it on logout.
// For best results, always return a new state object instead of mutating the old one.
