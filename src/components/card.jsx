import React, { Component } from 'react';

class Card extends Component {

   render(){
    return(
    <img src={this.props.url} alt=""
         className="card-flat" />
    )
   }

}

export default Card;
