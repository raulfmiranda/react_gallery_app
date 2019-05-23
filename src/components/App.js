import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App componentes
import Header from './Header';
import Gallery from './Gallery';
import Error404 from './Error404';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: false
    };
  }

  performSearch = (query = 'cats') => {
    console.log('my query:' + query);

    this.setState({
      loading: true
    });

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
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch}/>

          {
            (this.state.loading)
              ? <h2>Loading...</h2>
              :
              <Switch>
                  <Route exact path="/" component={() => (<Gallery gifs={this.state.gifs}/>)} />
                  <Route exact path="/cats" component={() => (<Gallery gifs={this.state.gifs}/>)} />
                  <Route exact path="/dogs" component={() => (<Gallery gifs={this.state.gifs}/>)} />
                  <Route exact path="/computers" component={() => (<Gallery gifs={this.state.gifs}/>)} />
                  <Route component={Error404} />
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
