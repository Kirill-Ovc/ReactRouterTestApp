
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from './Book'

class BookList extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Router>
        <div>
          <h3>Выберите серию:</h3>
          <p>
            <Link to={`${match.path}/potter`}>Гарри Поттер</Link>
          </p>
          <p>
            <Link to={`${match.path}/lord`}>Властелин колец</Link>
          </p>
          <p>
            <Link to={`${match.path}/gatsby`}>Великий Гетсби</Link>
          </p>
          <p>
            <Link to={`${match.path}/thecatcherintherye`}>Над пропастью во ржи</Link>
          </p>
          <p>
            <Link to={`${match.path}/thegodfather`}>Крестный отец</Link>
          </p>
          <p>
            <Link to={`${match.path}/thefinancier`}>Финансист</Link>
          </p>
          <hr />
          <Route path={`${match.path}/potter`} component={Book} />
          <Route path={`${match.path}/lord`} component={Book} />
          <Route path={`${match.path}/gatsby`} component={Book} />
        </div>
      </Router>
    )
  }
}

export default BookList