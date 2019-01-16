import React, { Component } from "react";

class Suggestions extends Component {
    render() { 
        const { placesSuggested } = this.props;
        return ( 
            placesSuggested.map(place => (
                    
                <li key={place.key}>
                    <span className="name">{place.city}, {place.state}</span>
                    <span className="population">{numberWithCommas(place.population)}</span>
                </li>

            ))
        );
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

export default Suggestions;