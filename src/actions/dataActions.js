export const getData = () => dispatch => {
  return dispatch({
    type: "GET_DATA"
  });
};
export const userData = (id, text) => dispatch => {
  return dispatch({
    type: "USER_DATA",
    data: {
      id,
      text
    }
  });
};
export const toggleDone = id => dispatch => {
  return dispatch({
    type: "TOGGLE_DONE",
    id
  });
};
export const deleteItem = id => dispatch => {
  return dispatch({
    type: "DELETE_ITEM",
    id
  });
};
export const filterItems = done => dispatch => {
  return dispatch({
    type: "FILTER_ITEM",
    done
  });
};
export const displayAll = () => dispatch => {
  return dispatch({
    type: "DISPLAY_ALL"
  });
};
export const searchItems = value => dispatch => {
  return dispatch({
    type: "SEARCH_ITEMS",
    value
  });
};
