import React, { Component } from 'react';

class Card extends Component {

   render(){
    return(
      <div className="card-flat">
        <img src={this.props.url}
             alt=""
             className="img-flat"  />
        <div className="description-flat">
          {/*{console.log(this.props.name)}*/}
          <h3>{this.props.name}</h3>
          <p>{this.props.price} {this.props.currency} per night </p>
        </div>
      </div>
    )
   }

}

export default Card;
