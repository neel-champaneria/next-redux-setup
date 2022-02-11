import {
  FIRST_COUNT_INCREMENT,
  FIRST_COUNT_DECREMENT,
} from "./../constants/countConstants";

export const firstCountReducer = (
  state = { server: "", client: "", count: 0 },
  action
) => {
  switch (action.type) {
    case FIRST_COUNT_INCREMENT:
      return { ...state, count: action.payload };

    case FIRST_COUNT_DECREMENT:
      return { ...state, count: action.payload };

    default:
      return state;
  }
};
