import React, { Component } from 'react';
import Suggestions from './components/Suggestions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      places: [],
      query: ""
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

  searchPlace = (query) => {
    this.setState({ query: query.trim() });
  }
  
  render() {
    console.log(this.state.query);
    
    
    return (
      <div>
        <form className="search-form">
          <input
            type="text"
            className="search"
            placeholder="City or State"
            onChange={(evt) => this.searchPlace(evt.target.value)}
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
