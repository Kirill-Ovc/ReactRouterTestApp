import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'

class NewsContainer extends React.Component {
  render() {
    const { news } = this.props
    return <News newsData={news} />
  }
}

const mapStateToProps = state => ({
  news: [],
})

const mapDispatchToProps = dispatch => ({
  //getNews: () => dispatch(getNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)