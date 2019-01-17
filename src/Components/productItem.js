import React, { Component } from 'react';


export default class ProductItem extends Component{
	render(){
		return(
			<div className= "product-item">
				<div className = "img-container">
					<img src= {this.props.product.thumbnail} alt= ""/>
				</div>
				<div className = "content-container">
					<div className = "logo-icon">
						<img src ={this.props.product.seller.car_dealer_logo} alt= ""/>
					</div>
					<h5 className = "mb-3"> $ {this.props.product.price}</h5>
					{this.props.product.title}<br/>
					{this.props.product.address.city_name}<br/>
					AvailableQuantity: {this.props.product.available_quantity}
				</div>
			</div>
		)
	}
}