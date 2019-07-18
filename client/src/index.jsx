import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import Search from './components/Search.jsx';
import SongList from './components/SongList.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: '',
      query: '',
      songs: [],
    };
    this.searchClick = this.searchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  
  searchClick() {
    const { query } = this.state;
    return axios.get(`/search/${query}`)
      .then((response) => {
        this.setState({
          video: response.data[0].youtubelink,
          songs: response.data,
        });
      })
      .catch(err => console.log(`Axios GET to /search${query} error => `, err.message));
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const { video, query, songs } = this.state;
    return (
      <div>
        <nav className="navbar">
          <h1>Hello, world!</h1>
          <div className="searchbar">
            <Search query={query} onSearchClick={this.searchClick} onChange={this.handleChange} />
          </div>
        </nav>
        <div className="section">
          <div className="player">
            <VideoPlayer />
          </div>
          <div className="songTitles">
            <SongList />
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
