import {
  SECOND_COUNT_INCREMENT,
  SECOND_COUNT_DECREMENT,
} from "../constants/countConstants";

export const secondIncrementCounter = (currentState) => (dispatch) => {
  const increamentState = {
    count: currentState.count + 1,
    inc_click: currentState.inc_click + 1,
  };

  return dispatch({
    type: SECOND_COUNT_INCREMENT,
    payload: increamentState,
  });
};

export const secondDecrementCounter = (currentState) => (dispatch) => {
  const decrementState = {
    count: currentState.count - 1,
    dec_click: currentState.dec_click + 1,
  };

  return dispatch({
    type: SECOND_COUNT_DECREMENT,
    payload: decrementState,
  });
};
