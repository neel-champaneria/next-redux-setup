import {
  SECOND_COUNT_INCREMENT,
  SECOND_COUNT_DECREMENT,
} from "./../constants/countConstants";

export const secondCountReducer = (
  state = { server: "", client: "", count: 0, inc_click: 0, dec_click: 0 },
  action
) => {
  switch (action.type) {
    case SECOND_COUNT_INCREMENT:
      console.log("SECOND_COUNT_INCREMENT action", action.payload.count);
      return {
        ...state,
        count: action.payload.count,
        inc_click: action.payload.inc_click,
      };

    case SECOND_COUNT_DECREMENT:
      return {
        ...state,
        count: action.payload.count,
        dec_click: action.payload.dec_click,
      };

    default:
      return state;
  }
};
