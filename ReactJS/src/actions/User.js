import axios from "axios";

import { loadingStart, loadingEnd } from './Loading';

export function ubahUserNameSuccesss(name) {
  return {
    type: 'UBAH_USERNAME',
    payload: {
      username: name,
    },
  };
};

export function ubahUserNameFailed(errMessage) {
  return {
    type: 'UBAH_USERNAME_ERROR',
    payload: {
      message: errMessage,
    },
  };
};

export function ubahUserName() {
  return (dispatch) => {
    axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      let data = response.data.results;
      let names = data.map(datum => datum.name);
      let newUserName = names[0];
      dispatch(ubahUserNameSuccesss(newUserName));
    })
    .catch (err =>  {
      dispatch(ubahUserNameFailed(err.message));
    })
  }
}

export function ubahBirthYearSuccess(birth_year) {
  return {
    type: 'UBAH_BIRTH_YEAR',
    payload: {
      birth_year: birth_year
    }
  }
}

export function ubahBirthYear() {
  return async(dispatch) => {
    await dispatch(loadingStart());

    await axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      const data = response.data.results;
      const birth_years = data.map(datum => datum.birth_year);
      const birth_year = birth_years[0];

      dispatch(ubahBirthYearSuccess(birth_year));
    })

    await dispatch(loadingEnd());
  }
}

export function ubahEmail() {
  return {
    type: 'UBAH_EMAIL',
    payload: {
      email: 'fadly.kayo@gmail.com',
    },
  };
};

export function ubahPhoneNumber() {
  return {
    type: 'UBAH_PHONE_NUMBER',
    payload: {
      phone_number: '11111111',
    },
  };
};
