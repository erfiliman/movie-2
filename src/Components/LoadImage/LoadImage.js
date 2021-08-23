import React, {useState} from 'react';

const LoadImage = (props) => {
	const [loadImg, setLoadImg] = useState(false);

	const onLoadImage = (e) => {
		setTimeout(()=>{
			setLoadImg(true);
		}, 300);
	};
	return (
		<div className="load">
			{loadImg?

				<img src={props.poster}/> :
				<div className="loading-icon-container">
					<div className="loading-icon"></div>
					<img src={props.poster} onLoad={onLoadImage}/>
				</div>
			}
		</div>

	);
};

export default LoadImage;
