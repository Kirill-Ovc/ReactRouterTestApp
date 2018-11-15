import React from 'react'
import {
  Card, CardBody, CardText, CardSubtitle, CardTitle, CardLink, Alert
} from 'reactstrap';

import { httpGet } from '../utils/network'
const newsAPIurl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8b9495da70cd4b10a74b003961c379c9'


const NewsArticle = (id, article) => {
  return (
    <div key={id}>
      <Card>
        <CardBody>
          <img className="newsImage" src={article.urlToImage} alt="Card article" />
          <hr />
          <CardTitle>{article.title}</CardTitle>
          <CardSubtitle>{article.author} / {article.publishedAt}</CardSubtitle>
          <CardText>{article.description}.</CardText>
          <CardLink href={article.url}>Go to Article</CardLink>
        </CardBody>
      </Card>
    </div>
  )
}


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      cached: false,
      errorMsg: '',
    }
  }
  componentDidMount = () => {
    if (!this.state.cached) {
      httpGet(newsAPIurl).then(json => {
        console.log("httpget")
        this.setState({
          articles: json.articles,
          cached: true,
          isLoading: false,
        })
      }).catch((e) =>
        this.setState({
          cached: true,
          isLoading: false,
          errorMsg: e.message,
        }))
    }
  }
  render() {
    console.log("in render")
    console.log(this.state)
    const { articles, isLoading, errorMsg } = this.state;
    if (errorMsg) {
      return <Alert color="danger">{errorMsg}</Alert>
    }
    if (isLoading && !articles.length) {
      return <p>Новости загружаются...</p>
    } else if (!articles.length) {
      return <p>Новостей нет</p>
    } else {
      console.log(articles)
      return articles.map(
        (article, index) => NewsArticle(index, article)
      )
    }
  }
}

export default News
