import React, { Component } from 'react';
import Gif from './gif.jsx';

class Giflist extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} />
        })}
      </div>
    );
  }
}

export default Giflist;
