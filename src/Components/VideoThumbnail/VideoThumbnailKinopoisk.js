import React, {useEffect, useState} from "react";

const VideoThumbnailKinopoisk = (props) => {
	return (<div className="thumbnail-video" >
				<div className="thumbnail-video-container-img thumbnail-video-container-img_kinopoisk">
					<img src={require('../../img/defaultVideo.jpg').default} alt="" className="thumbnail-video-img"/>
					<a target="_blank" className="watch-trailer-kinopoisk" href={props.url}>
					</a>
				</div>
				<div className="thumbnail-video-title">
					{props.title}
				</div>

			</div>
	);
};


export default VideoThumbnailKinopoisk;