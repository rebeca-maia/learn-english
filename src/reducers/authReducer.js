import { SUCESS, LOGOUT } from '../actions/Types';

const INITIAL_STATE = {
  isAuthenticated: false,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case SUCESS:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
