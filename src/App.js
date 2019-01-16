import React, { Component } from 'react';
import Suggestions from './components/Suggestions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <input
            type="text"
            className="search"
            placeholder="City or State"
          />
          <Suggestions/>
        </form>
      </div>
    );
  }
}

export default App;
