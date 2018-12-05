const initialState = {
  username: 'kosong',
  email: 'kosong',
  phone_number: '000000',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UBAH_USERNAME':
      return {
        ...state,
        username: action.payload.username,
      };

    case 'UBAH_EMAIL':
      return {
        ...state,
        email: action.payload.email,
      };

    default:
      return state;
  }
};
