export const sliderReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_SLIDER':
      return action.slider;
    default:
      return state;
  }
};
