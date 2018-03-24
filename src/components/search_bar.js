// ****************************************************************************
// *                              by Kim Nejudne                              *
// *                         started on March 24, 2018                        *
// ****************************************************************************

import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	render() {
		return (
			<div>
				<input onChange={e => this.setState({term: e.target.value})}/>
				<h3>{this.state.term}</h3>
			</div>
		);
	}
}

export default SearchBar;