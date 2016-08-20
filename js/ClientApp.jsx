require('../sass/main.scss')

const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const Layout = require('./Layout')
const Landing = require('./Landing')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
