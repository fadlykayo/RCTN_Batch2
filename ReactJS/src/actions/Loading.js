export function loadingStart() {
  return {
    type: 'LOADING_START',
    payload: {
      loadingMessage: 'Loading di mulai...'
    }
  }
}

export function loadingEnd() {
  return {
    type: 'LOADING_END',
    payload: {
      loadingMessage: ''
    }
  }
}
