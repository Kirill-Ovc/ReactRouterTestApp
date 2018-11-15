import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import { getNews } from '../actions/NewsActions'

class NewsContainer extends React.Component {
  render() {
    const { newsState, getNews } = this.props
    return <News newsData={newsState} getNews={getNews} />
  }
}

const mapStateToProps = state => ({
  newsState: state.newsReducer,
})

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)