import React, { Component } from "react";

class Suggestions extends Component {

    render() { 
        const { filteredPlaces } = this.props;
        return (       
            <li>
                <span className="name">{filteredPlaces.city}, {filteredPlaces.state}</span>
                <span className="population">{numberWithCommas(filteredPlaces.population)}</span>
            </li>
        );
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

export default Suggestions;