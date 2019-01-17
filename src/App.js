import React, { Component } from 'react';
import './App.css';
import ProductItem from './Components/productItem';
import axios from 'axios';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
    { value: 'low', label: 'Low Price' },
    { value: 'high', label: 'High Price' }
  ]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      productFilter: '',
      sortedProducts:[]
    }
    this.productFilterHandle = this.productFilterHandle.bind(this);
  }

  productFilterHandle(e){
    if(e.value == "low"){
      this.setState({
        sortedProducts: this.state.products.sort((low, high) => {
          return( low.price - high.price)
        })
      })
    }else{
        this.setState({
          sortedProducts: this.state.products.sort((low, high) =>{
            return( high.price - low.price)
          })
        })
      }
  }

  componentDidMount(){
    axios.get('https://api.mercadolibre.com/sites/MLB/search?category=MLB1743&limit=21')
    .then(res => {
      this.setState({
        products: res.data.results
      })
    })
  }

  render() {
    let productItems = [];

    productItems = this.state.products.map((item, index) => {
      return(
        <div className= "col-md-4">
          <ProductItem key = {index} product= {item}/>
        </div>
      )
    })

    return (
      <div className = "container">
        <div className = "row mt-5">
          <div className = "col-md-2">
           <Dropdown options={options} onChange={this.productFilterHandle} value={this.state.productFilter} placeholder="Filter" />
          </div>
          <div className = "col-md-10">
            <div className="row">
              {productItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
