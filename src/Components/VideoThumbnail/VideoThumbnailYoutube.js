import React, {useEffect, useState} from "react";

const VideoThumbnailYoutube = (props) => {
	return (<div className="thumbnail-video" onClick={()=> props.onClick(props.dataId)}>
				<div className="thumbnail-video-container-img thumbnail-video-container-img_youtube">
					<img className="thumbnail-video-img" src={`https://img.youtube.com/vi/${props.id}/hqdefault.jpg`} alt=""/>
				</div>
				<div className="thumbnail-video-title">
					{props.title}
				</div>

			</div>
	);
};


export default VideoThumbnailYoutube;