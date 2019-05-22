import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [
        {
          data: {
            image_url: "https://media0.giphy.com/media/op67lgNTdh1T2/200_d.gif"
          }
        },
        {
          data: {
            image_url: "https://media3.giphy.com/media/14p2g1jzZe2LbG/giphy.gif"
          }
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
        {this.props.configs.API_KEY}
        <Header/>
        <Gallery gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
