export function ubahUserName(name) {
  return {
    type: 'UBAH_USERNAME',
    payload: {
      username: name,
    },
  };
};

export function ubahEmail() {
  return {
    type: 'UBAH_EMAIL',
    payload: {
      email: 'fadly.kayo@gmail.com',
    },
  };
};

export function ubahPhoneNumber(number) {
  return {
    type: 'UBAH_PHONE_NUMBER',
    payload: {
      phone_number: number,
    },
  };
};
