import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList'

class App extends React.Component {
  state = {videos: []}
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
    this.setState({videos:response.data.items})
  };

render() {
  return (
    <div className="ui container">Hi there!
      <SearchBar onTermSubmit = {this.onTermSubmit}/>
     <VideoList list={this.state.videos}/>
    </div>
  )
}


}
export default App;
