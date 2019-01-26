import { OPEN_CREATE, CANCEL_CREATE } from '../actionTypes';

const initialState = false;

const create = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CREATE: {
      return true;
    }
    case CANCEL_CREATE: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default create;
