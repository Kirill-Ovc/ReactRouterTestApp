//const API_KEY = '8b9495da70cd4b10a74b003961c379c9'
//const API_ROOT = `https://${API_KEY}.mockapi.io`
const API_ROOT = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8b9495da70cd4b10a74b003961c379c9'

export const httpGet = async (url) => {
  try {
    const response = await fetch(url)
    if (response.ok || (response.status && response.status === 'ok')) { // MockAPI предоставляет нам свойство "ok", на которое мы можем опереться
      const json = await response.json()
      return json
    } else {
      throw new Error(response.status)
    }
  } catch (err) {
    console.warn('httpGet error ', err)
  }
}

// либо такой же код, без async/await
export const httpGetWithoutAsync = (endPoint) => {
  return fetch(`${API_ROOT}/${endPoint}`)
    .then(response => response.json())
    .then(json => json)
}