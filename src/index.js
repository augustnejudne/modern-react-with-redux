// ****************************************************************************
// *                              by Kim Nejudne                              *
// *                         started on March 24, 2018                        *
// ****************************************************************************

// NPM imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Component imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Variable declarations
const API_KEY = 'AIzaSyASZ9YEuB9zPuUQ4NkG4k9wuAI50GZrjWY';

// App Component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			// added selectedVideo state
			selectedVideo: null,
		};

		this.videoSearch('fifa world cup');

	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				// sets this.state.selected video to the first video in the array
				selectedVideo: videos[0],
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term);
		}, 500);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail
				// VideoDetail component has a 'video' property which has the value of this.state.selectedVideo .
					video={this.state.selectedVideo} />
				<VideoList
				// VideoList component has a 'onVideoSelect' property which is a function .
				// 'onVideoSelect' function accepts an argument 'selectedVideo' ...
				// which sets this.state of 'selectedVideo' to the 'selectedVideo' argument .
					onVideoSelect1={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} /> 
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));