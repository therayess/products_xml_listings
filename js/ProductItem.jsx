const React = require('react')

class ProductItem extends React.Component {
  render() {
    return (
      <div className='product-item col-xs-12 col-md-3'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <img src={this.props.imageURL} className='product-img' />
            <div className='product-categories'>
              <a href='#' className='product-category'>Home ></a>
              {this.props.categories.map((index, category) => (
                <a href='#' className='product-category' key={index}>{category} ></a>
              ))}
            </div>
            <a href={this.props.productURL}><h4 className='product-title'>{this.props.name}</h4></a>
            <p className='product-id'>(ID: {this.props.productID})</p>
            <p className='product-description'>
              <span className='desc'>Description: </span>{this.props.description}
            </p>
            <div className='product-price'>
              <strong>{this.props.price}</strong>
              <span className='product-currency'> {this.props.currency}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = ProductItem
