import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = {videos: [], selectedVideo: null}
  componentDidMount() {
    this.onTermSubmit('trending music');
  }
  onTermSubmit = async (term) => {
    const KEY = 'AIzaSyAdxxRI7nXm0KHJLhAyzr6Hhckh-8IX8c8';
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY,
        q: term
      }
    });
    this.setState({videos:response.data.items,
    selectedVideo: response.data.items[0]});
  };

  onVideoSelect = (video) => {
   this.setState({selectedVideo: video})
  }


render() {
  return (
    <div className="ui container">
      <h1>Vid-Oh!</h1>
      <SearchBar onTermSubmit = {this.onTermSubmit}/>
      <div className = "ui grid">
        <div className = "ui row">
      <div className = {"eleven wide column"}>
      <VideoDetail video = {this.state.selectedVideo} />
      </div>
      <div className = "five wide column">
     <VideoList onVideoSelect = {this.onVideoSelect} list={this.state.videos}/>
     </div>
     </div>
     </div>
    </div>
  )
}


}
export default App;
