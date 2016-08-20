const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

class Header extends React.Component {
  render () {
    return (
      <header className='page-header'>
        <h1>
          <Link to='/'>TradeTracker Tech Test </Link>
          <small>By Ammar Rayess</small>
        </h1>
      </header>
    )
  }
}

module.exports = Header
