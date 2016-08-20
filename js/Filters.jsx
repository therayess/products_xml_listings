const React = require('react')

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productItems: props.products,
      searchTerm: ''
    }

    this.sortProducts = this.sortProducts.bind(this)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  sortProducts(e) {
    let selectedOption = e.target.value,
        productItems = this.state.productItems

    // option 1 for price low to high
    if (selectedOption == 1) {
      productItems.sort(function(obj1, obj2){return obj1.price - obj2.price})
    }

    // option 2 for price high to low
    else if (selectedOption == 2) {
      productItems.sort(function(obj1, obj2){return obj2.price - obj1.price})
    }

    // callback to update the ProductListings with the sorted items
    this.props.updateProductItems(productItems)
  }
  handleSearchTermChange(e) {
    // callback to update the search term in ProductsListings
    this.props.updateSearchTerm(e.target.value)

    // I need to update the state object here since it is attached to the field's value
    this.setState({searchTerm: e.target.value})
  }
  render() {
    let productsCount = this.state.productItems.length
    return (
      <div className='row clearfix'>
        <div className='col-xs-12 col-md-4'><p>Found <strong>{productsCount}</strong> products</p></div>

        <div className='col-xs-6 col-md-4 text-center'>
          Search products
          <input type='text' className='form-control inline-flow' placeholder='Enter search term' 
            value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </div>
        
        <div className='col-xs-6 col-md-4 text-right'>
          Sort by price
          <select className='form-control inline-flow' onChange={this.sortProducts}>
            <option>--Select an option--</option>
            <option value='1'>Lowest to highest</option>
            <option value='2'>Highest to lowest</option>
          </select>
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  productItems: React.PropTypes.arrayOf(React.PropTypes.object),
  searchTerm: React.PropTypes.string
} 

module.exports = Filters
