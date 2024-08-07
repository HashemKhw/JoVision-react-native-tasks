export const TOGGLE_COMPONENT_ONE = 'TOGGLE_COMPONENT_ONE';
export const SET_TEXT = 'SET_TEXT';

export const toggleComponentOne = () => ({
  type: TOGGLE_COMPONENT_ONE,
});

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});
