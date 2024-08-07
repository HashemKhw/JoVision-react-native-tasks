import { SET_TEXT, TOGGLE_COMPONENT_ONE } from './actions';

const initialState = {
  text: '',
  showComponentOne: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case TOGGLE_COMPONENT_ONE:
      return {
        ...state,
        showComponentOne: !state.showComponentOne,
      };
    default:
      return state;
  }
};

export default rootReducer;
