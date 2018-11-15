import { httpGet } from '../utils/network'
export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST'
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS'
export const GET_NEWS_FAIL = 'GET_NEWS_FAIL'
let newsArr = []
let cached = false

const newsAPIurl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8b9495da70cd4b10a74b003961c379c9'

// Этот экшн не использую, но стоит наверное сделать, чтобы новости не загружались каждый раз
export function getNews() {
  return function (dispatch) {
    if (cached) {
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: {
          data: newsArr
        }
      })
    } else {
      dispatch({
        type: GET_NEWS_REQUEST,
        payload: {
          data: newsArr
        }
      })
      httpGet(newsAPIurl).then(json => {
        newsArr = json.articles
        cached = true
        dispatch({
          type: GET_NEWS_SUCCESS,
          payload: {
            data: newsArr
          }
        })
      }).catch((e) => dispatch({
        type: GET_NEWS_FAIL,
        payload: new Error(e),
        error: true,
      }))
    }
  }
}

// const testnews = [
//   {
//     "title": "new1",
//     "text": "something about it."
//   },
//   {
//     "title": "test",
//     "text": "Lets test the news."
//   },
// ]