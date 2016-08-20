const React = require('react')
const Header = require('./Header')

const Layout = (props) => (
  <div className='container'>
  	<Header />
    {props.children}
  </div>
)

module.exports = Layout
