const React = require('react')
const ProductsListings = require('./ProductsListings')

class ProductsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      requestSuccess: ''
    }

    this.handleFileInput = this.handleFileInput.bind(this)
    this.handleUrlFormSubmit = this.handleUrlFormSubmit.bind(this)
  }
  handleFileInput(e) {
    // I use html5's filereader api which makes things easier

    let file = e.target.files[0], 
                output,
                self = this

    // A check for .xml files only
    if (file.type.match('xml.*')) {
      let reader = new FileReader()

      reader.readAsText(file)

      reader.onloadend = (function() {
        output = reader.result
        self.setState({products: $($.parseXML(output)).find('product'), requestSuccess: true})
      })
    }
    else {
      this.setState({requestSuccess: false})
    }
  }
  handleUrlFormSubmit(e) {
    // Loading the data from url won't work due to CORS, so i provide an alternative
    // which is to load a local productfeed.xml file to show the listings
    e.preventDefault()

    let targetURL = $('input[name=url_field]').val() || 'productfeed.xml'

    $.ajax({
      url: targetURL,
      dataType: 'xml',
      cache: false,
      success: function(data) {
        this.setState({products: $(data).find('product'), requestSuccess: true})
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({requestSuccess: false})
        console.error(status, err.toString())
      }.bind(this)
    })
  }
  render() {
    let resultsBody = ''
    if (this.state.requestSuccess === true) {
      resultsBody = <ProductsListings products={this.state.products} />
    }
    else if (this.state.requestSuccess === false) {
      resultsBody = <h3 className='text-info'>Invalid file type. Please select .xml files only.</h3>
    }
    return (
      <div>
        <div className='data-input-wrapper row clearfix'>
          <div className='file-upload col-xs-12 col-md-5'>
            <label htmlFor='feed_file_input'>Select product feed file</label>
            <input type='file' name='feed_file_input' onChange={this.handleFileInput} />
          </div>

          <div className='or-separator col-xs-12 col-md-2'><span>--Or--</span></div>
          
          <form className='url-input col-xs-12 col-md-5' onSubmit={this.handleUrlFormSubmit}>
            <div className='col-xs-10'>
              <input disabled type='text' name='feed_url' placeholder='Enter product feed url' className='form-control' />
            </div>
            <input type='submit' value='Submit' className='btn btn-primary col-xs-2' />
          </form>
        </div>
        {resultsBody}
      </div>
    )
  }
}

ProductsForm.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object),
  requestSuccess: React.PropTypes.string
} 

module.exports = ProductsForm
