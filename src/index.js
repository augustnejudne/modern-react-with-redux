// ****************************************************************************
// *                              by Kim Nejudne                              *
// *                         started on March 24, 2018                        *
// ****************************************************************************

// NPM imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Component imports
import SearchBar from './components/search_bar';

// Variable declarations
const API_KEY = 'AIzaSyASZ9YEuB9zPuUQ4NkG4k9wuAI50GZrjWY';

// App Component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		}

		YTSearch({key: API_KEY,	term: 'surfboards'}, (videos) => {
			this.setState({videos})
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));