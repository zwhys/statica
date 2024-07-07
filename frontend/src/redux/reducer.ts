import { SET_USER_ID } from "./actions";

const initialState = {
  userId: 0,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
