import { checkCredidentials } from '../utils/session'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn(params, cb) {
  return dispatch => {
    if (checkCredidentials(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          name: params.username,
        }
      })
      cb()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: 'Неверное имя пользователя или пароль',
        },
        error: true,
      })
    }
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}