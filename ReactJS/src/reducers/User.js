const initialState = {
  username: 'kosong dari reducer',
  email: 'kosong@gmail.com',
  phone_number: '000000',
  birth_year: '1984',
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

    case 'UBAH_PHONE_NUMBER':
      return {
        ...state,
        phone_number: action.payload.phone_number,
      };

    case 'UBAH_BIRTH_YEAR':
      return {
        ...state,
        birth_year: action.payload.birth_year,
      }

    default:
      return state;
  }
};
