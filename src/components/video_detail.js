// ****************************************************************************
// *                              by Kim Nejudne                              *
// *                         started on March 24, 2018                        *
// ****************************************************************************

import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return(
			<div className="col-md-8">Loading ...</div>
		);
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="col-md-8 video-detail">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
