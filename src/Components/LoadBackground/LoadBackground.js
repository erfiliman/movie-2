import React, {useState} from 'react';

const LoadBackground = (props) => {
	const [loadImg, setLoadImg] = useState(false);
	const onLoadImage = (e) => {
		setTimeout(()=>{
			setLoadImg(true);
		}, 300);
	};
	return (
		<div className="load">
			<div className="load-image" style={{backgroundImage: `url(${props.poster}), url(${require('./../../img/loading_spinner.svg').default})`}}>

			</div>
		</div>

	);
};

export default LoadBackground;
