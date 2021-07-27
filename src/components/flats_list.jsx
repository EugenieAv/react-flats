import React, { Component } from 'react';
import Card from './card.jsx';

class FlatsList extends Component {

  renderList = () => {
    return this.props.flats.map(flat => <Card key={flat.imageUrl} url={flat.imageUrl} />);
  }

  render(){
    console.log(this.props.flats)
    return(
      <div className="flats-list">
        {this.renderList()};
      </div>
    )
  console.log(renderList)
  }
}

export default FlatsList;



// Check ici pourquoi l14 la diff entre renderList() et renderList => dans le second cas on a une erreur
// Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
