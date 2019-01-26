import { OPEN_CREATE, CANCEL_CREATE, ADD_QUESTION } from '../actionTypes';

const initialState = false;

const create = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CREATE: {
      return true;
    }
    case CANCEL_CREATE: {
      return false;
    }
    case ADD_QUESTION: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default create;
