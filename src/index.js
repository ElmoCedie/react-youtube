import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail'

const API_KEY = 'AIzaSyCgNW-EeCNH_w9miq281hkiOUKz4Fu8NTk';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos:[],
      selectedVideo: null,
    }

    this.videoSearch('redux');

  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    })
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return(
      <div>
        <SearchBar onSearchTermChange={ term=>this.videoSearch(term) }/>
        <VideoDetails videos={this.state.selectedVideo}/>
        <VideoList
            onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
            videos={this.state.videos} />
      </div>
    )
  }
}


ReactDOM.render( <App /> , document.getElementById('root'));
