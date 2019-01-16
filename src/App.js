import React, { Component } from 'react';
import Suggestions from './components/Suggestions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      places: []
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.map(place => (
      {
        city: `${place.city}`,
        state: `${place.state}`,
        population: `${place.population}`,
        key: `${place.latitude}`
      }
    )))
    .then(places => this.setState({
      places
    }))
    .catch(error => console.log("parsing failed", error))
  }
  
  render() {
    console.log(this.state.places)
    
    return (
      <div>
        <form className="search-form">
          <input
            type="text"
            className="search"
            placeholder="City or State"
          />
          <ul className="suggestions">
            <Suggestions
              placesSuggested = {this.state.places}
            />
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
