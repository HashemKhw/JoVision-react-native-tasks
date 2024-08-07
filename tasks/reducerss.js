import { TOGGLE_COMPONENT_ONE, SET_TEXT } from './actions';

const initialState = {
  showComponentOne: true,
  text: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMPONENT_ONE:
      return {
        ...state,
        showComponentOne: !state.showComponentOne,
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
