import React, { Component } from "react";

class Suggestions extends Component {
    render() { 
        return ( 
        <ul className="suggestions">
            <li>Filter for a city</li>
            <li>or a state</li>
        </ul>
        );
    }
}

export default Suggestions;