import animals from "../TEST_DATA";

const initialState = animals;

const toggleDone = (state, id) => {
  return state.map(element => {
    if (element.id === id) {
      element.done = !element.done;
    }
    return element;
  });
};

const deleteItem = (state, id) => {
  return state.filter(element => {
    if (element.id === id) {
      return false;
    }
    return true;
  });
};
const displayDone = (state, done) => {
  return state.map(elem => {
    if (elem.done === done) {
      elem.visibility = false;
    } else if (elem.visibility === false) {
      elem.visibility = true;
    }
    return elem;
  });
};
const displayAll = state => {
  return state.map(elem => {
    elem.visibility = true;
    return elem;
  });
};
const searchItems = (state, text) => {
  return state.map(elem => {
    elem.visibility = false;
    if (elem.text.toLowerCase().includes(text.toLowerCase())) {
      elem.visibility = true;
    }
    return elem;
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return [...state];
    case "USER_DATA":
      return [...state, { ...action.data, done: false, visibility: true }];
    case "TOGGLE_DONE":
      return toggleDone(state, action.id);
    case "DELETE_ITEM":
      return deleteItem(state, action.id);
    case "FILTER_ITEM":
      return displayDone(state, action.done);
    case "DISPLAY_ALL":
      return displayAll(state);
    case "SEARCH_ITEMS":
      return searchItems(state, action.value);
    default:
      return state;
  }
};
