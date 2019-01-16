import React, { Component } from "react";

class Suggestions extends Component {
    render() { 
        const { placesSuggested } = this.props;
        return ( 
            placesSuggested.map(place => (
                    
                <li key={place.key}>
                    <span className="name">{place.city}, {place.state}</span>
                    <span className="population">{place.population}</span>
                </li>

            ))
        );
    }
}

export default Suggestions;