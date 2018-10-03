import {
  MODIFICA_NAME,
  MODIFICA_USERNAME,
  MODIFICA_PASSWORD
} from "../actions/Types";

const INITIAL_STATE = {
  name: "",
  username: "",
  password: " "
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);

  switch (action.type) {
    case MODIFICA_NAME:
      return { ...state, name: action.payload };
    case MODIFICA_USERNAME:
      return { ...state, username: action.payload };
    case MODIFICA_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
