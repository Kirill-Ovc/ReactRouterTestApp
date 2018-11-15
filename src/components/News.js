import React from 'react'
import {
  Card, CardBody, CardText, CardSubtitle, CardTitle, CardLink, Alert
} from 'reactstrap';

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
  render() {
    const { newsData, getNews } = this.props
    const { news: articles, isLoading, errorMsg } = newsData;
    if (errorMsg) {
      return <Alert color="danger">{errorMsg}</Alert>
    }
    if (isLoading && !articles.length) {
      return <p>Новости загружаются...</p>
    } else if (!articles.length) {
      getNews()
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
