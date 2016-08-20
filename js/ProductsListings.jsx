const React = require('react')
const ProductItem = require('./ProductItem')
const Filters = require('./Filters')

class ProductsListings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productItems: props.products,
      searchTerm: ''
    }

    this.updateProductItems = this.updateProductItems.bind(this)
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }
  componentWillMount() {
    let productItems = []
    
    // Processing the xml data: i'm traversing the xml and extracting the needed
    // fields and creating an object for each product
    this.state.productItems.each((index, element) => {
      let product = Object.assign({}, {
        name: $(element).find('name').text(),
        productID: $(element).find('productID').text(),
        description: $(element).find('description').text(),
        price: $(element).find('price').text(),
        currency: $(element).find('price')[0].getAttribute('currency'),
        productURL: $(element).find('productURL').text(),
        imageURL: $(element).find('imageURL').text(),
        categories: $(element).find('categories').find('category').map((index, element) => ($(element).text()))
      })
      
      // This will be the array of objects that will be used to render the listings
      productItems.push(product)
    })

    this.setState({productItems: productItems})
  }
  updateProductItems(productItems) {
    // Used as a prop for <Filters> sort function, the returned productItems will be
    // the sorted one
    this.setState({productItems: productItems})
  }
  updateSearchTerm(searchTerm) {
    // Used as a prop for <Filters> keywords search function, the returned searchTerm will be
    // used in the .filter function while rendering the product items
    this.setState({searchTerm: searchTerm})
  }
  render() {
    let productsCount = this.state.productItems.length
    return (
      <div className='products-listings'>
        <Filters products={this.state.productItems} updateSearchTerm={this.updateSearchTerm} 
          updateProductItems={this.updateProductItems} />
        <div className='row'>
          {this.state.productItems
            .filter((product) => `${product.name} ${product.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((product, index) => (
              <ProductItem key={index} id={index} {...product} />
          ))}
        </div>
      </div>
    )
  }
}

ProductsListings.propTypes = {
  productItems: React.PropTypes.arrayOf(React.PropTypes.object),
  searchTerm: React.PropTypes.string
} 

module.exports = ProductsListings
