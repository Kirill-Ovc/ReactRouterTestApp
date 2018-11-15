const _username = 'admin'
const _password = '12345'

export function checkCredidentials(params) {
  if (
    params.username.toLowerCase() === _username &&
    params.password === _password
  ) {
    return true
  }
  return false
}