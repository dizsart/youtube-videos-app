import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = {videos: [], selectedVideo: null}
  onTermSubmit = async (term) => {
    const KEY = 'AIzaSyAdxxRI7nXm0KHJLhAyzr6Hhckh-8IX8c8';
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: term
      }
    });
    this.setState({videos:response.data.items});
  };

  onVideoSelect = (video) => {
   this.setState({selectedVideo: video})
  }


render() {
  return (
    <div className="ui container">Hi there!
      <SearchBar onTermSubmit = {this.onTermSubmit}/>
      <VideoDetail video = {this.state.selectedVideo} />
     <VideoList onVideoSelect = {this.onVideoSelect} list={this.state.videos}/>
    </div>
  )
}


}
export default App;
