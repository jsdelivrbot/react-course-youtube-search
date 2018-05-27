
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCkrFaulYG-5mbXCGNsCUq9Q4rZrSgRtbQ';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('Liverpool');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <div className="main-description">
          <h1>Udemy Course: <small class="text-muted">Modern React with Redux</small></h1>
          <small class="text-muted">WIP: Create react app and deploy</small>
          <p>Understanding core knowledge required to build React components and structure applications with Redux.</p>
        </div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));