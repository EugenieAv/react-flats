import React, { Component } from 'react';

import TitleBar from './title_bar.jsx';
import FlatsList from './flats_list.jsx';
import LocationMap from './location_map.jsx';
import flats from './../../data/flats.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      flats: flats
    }
  }

  render() {
    return(
      <div>
        <div className="title-bar">
          <TitleBar />
        </div>
        <div className="main-container">
          <FlatsList flats={this.state.flats} />
          <LocationMap />
        </div>
      </div>
    )

  };
}

export default App;
