const initialState = {
  username: 'kosong',
  email: 'kosong',
  phone_number: '000000',
  gender: "female"
};

export default (state = initialState, action) => {
  console.log({action})
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

    case 'UBAH_GENDER':
      return {
        ...state,
        gender: action.payload.gender,
      }

    default:
      return state;
  }
};
