import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "2rAKTgJIQe1buYU1R5"
    }
  }

  search = (query) => {
    giphy('2XSCv5ikP0890beS5ithQyD9wEUpWOc7').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      })
    });
  }

  render() {
    const gifs = [
      { id: "fjyqEaQOFUoIEcRy6t" },
      { id: "q4YpWTDb6xEha" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif back">
            <Gif id={this.state.selectedGifId} />
          </div>
          <button className="background-button">Click</button>
        </div>
        <div className="right-scene back">
        <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
