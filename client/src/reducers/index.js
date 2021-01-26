export const carouselReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_IMAGE_CAROUSEL':
      return action.images;
    default:
      return state;
  }
};

export const mainImageReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_MAIN_IMAGE':
      return action.mainImage;
    default:
      return state;
  }
};
