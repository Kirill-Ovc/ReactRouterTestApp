import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAIL } from '../actions/NewsActions'

const initialState = {
  news: [],
  isLoading: false,
  errorMsg: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return { ...state, news: action.payload.data, isLoading: true, errorMsg: '' }
    case GET_NEWS_SUCCESS:
      return (action.payload.data.length)
        ? { ...state, news: action.payload.data, isLoading: false, errorMsg: '' }
        : { ...state, news: action.payload.data, isLoading: false, errorMsg: 'Новостей нет' }
    case GET_NEWS_FAIL:
      return { ...state, errorMsg: action.payload.message, isLoading: false }
    default:
      return state;
  }
}