// ****************************************************************************
// *                              by Kim Nejudne                              *
// *                         started on March 24, 2018                        *
// ****************************************************************************

import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoList = props.videos.map((video) => {
		return (
			<VideoListItem
			// VideoListItem has 'onVideoSelect' property ...
			// whose value is props.onVideoSelect .
			// this guy is basically just middle-man .
				onVideoSelect2={props.onVideoSelect1}
				key={video.etag}
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoList}
		</ul>
	);
};

export default VideoList;