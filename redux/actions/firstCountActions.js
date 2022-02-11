import {
  FIRST_COUNT_INCREMENT,
  FIRST_COUNT_DECREMENT,
} from "./../constants/countConstants";

export const firstIncrementCounter = (incrementState) => (dispatch) => {
  const increase = incrementState + 1;

  return dispatch({
    type: FIRST_COUNT_INCREMENT,
    payload: increase,
  });
};

export const firstDecrementCounter = (decrementState) => (dispatch) => {
  const decrease = decrementState - 1;

  return dispatch({
    type: FIRST_COUNT_DECREMENT,
    payload: decrease,
  });
};
