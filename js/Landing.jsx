const React = require('react')
const ProductsForm = require('./ProductsForm')

class Landing extends React.Component {
  render() {
    return (
      <div>
        <ProductsForm />
      </div>
    )
  }
}

module.exports = Landing
