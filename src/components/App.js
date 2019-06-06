import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App componentes
import Header from './Header';
import config from '../config-data';
import Gallery from './Gallery';
import SearchBar from './SearchBar';
import Nav from './Nav';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          gifs: [],
          query: '',
          loading: true
      }
  }

  fetchGifs = () => {
      this.setState({
          loading: true,
      });
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&limit=24&api_key=${config.API_KEY}`)
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

  onSearchChange = (searchTxt) => {
    this.setState({ query: searchTxt });
  }

  fetchCats = () => {
    this.setState({query: 'cats'}, () => {
      this.fetchGifs();
    });
  }

  fetchDogs = () => {
    this.setState({query: 'dogs'}, () => {
      this.fetchGifs();
    });
  }

  fetchComputers = () => {
    this.setState({query: 'computers'}, () => {
      this.fetchGifs();
    });
  }

  renderGallery = () => {
    return (
      <Gallery gifs={this.state.gifs} />
    )
  }

  componentDidMount = () => {
    this.fetchCats();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header
            navComponent={
              <Nav 
                fetchCats={this.fetchCats}
                fetchDogs={this.fetchDogs}
                fetchComputers={this.fetchComputers}
              />
            }
            searchBarComponent={
              <SearchBar
                onSearch={this.fetchGifs}
                onSearchChange={this.onSearchChange}
                searchTxt={this.state.query}
              />
            }
          />
          <Switch>
            <Route exact path="/" component={this.renderGallery} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
