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
