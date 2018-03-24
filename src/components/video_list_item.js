// ****************************************************************************
// *                              by Kim Nejudne                              *
// *                         started on March 24, 2018                        *
// ****************************************************************************

import React from 'react';
// onVideoSelect2 comes from video_list.js
const VideoListItem = ({video, onVideoSelect2}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	return (
		<li
			className="list-group-item"
			// when user clicks this list item ...
			// onVideoSelect2 gets called ...
			// with the props.video passed as argument .
			onClick={() => onVideoSelect2(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img src={imageUrl} alt="" className="media-object"/>
				</div>
				<div className="media-body">
					<div className="media-heading">{videoTitle}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;