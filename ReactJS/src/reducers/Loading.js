const initialState = {
  loadingMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_END':
    case 'LOADING_START':
      return {
        loadingMessage: action.payload.loadingMessage,
      };

    default:
      return state;
  }
};
