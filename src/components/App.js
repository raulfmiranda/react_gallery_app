import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }

  componentDidMount() {
    // this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${this.props.configs.API_KEY}`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  render() {
    return (
      <div className="container">
        <Header onSearch={this.performSearch}/>
        <Gallery gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
