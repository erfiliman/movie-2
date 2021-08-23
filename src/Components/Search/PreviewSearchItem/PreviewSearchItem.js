import React, {useState} from 'react';
import {Link} from "react-router-dom";
import LoadBackground from "../../LoadBackground/LoadBackground";
import LoadImage from "../../LoadImage/LoadImage";
import {easeQuadInOut} from "d3-ease";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import AnimatedProgressProvider from "../../AnimatedProgressProvider/AnimatedProgressProvider";

const PreviewSearchItem = (props) => {
	let ratingFilm = props.rating;
	if (props.rating != undefined && props.rating.includes("%")) {
		ratingFilm = props.rating.replace("%","") /10;
	}
	return (
		<Link to={`/movie/${props.id}`} onClick={props.onclick}>
			<div className="preview-search-item" key={props.id}>
				<div className="preview-search-image">
					<LoadImage poster={props.poster} />
				</div>

				<div className="preview-search__content">
					<div className="preview-search-title">
						{props.name}
					</div>
					<div className="preview-search-genres">
						<p>{props.genres.map((item)=> item.genre + ", ")}</p>
					</div>
					<div className="preview-search-year">{props.year}</div>
					{ ratingFilm ?
						<div className="preview-search-rating">
							<AnimatedProgressProvider
								valueStart={0}
								valueEnd={ratingFilm * 10}
								duration={0.6}
								easingFunction={easeQuadInOut}
							>
								{value => {
									const roundedValue = Math.round(value);
									const colors = `rgba(${255 - 255*(roundedValue/100)},${255*(roundedValue/100)},0, 0.8)`;
									return (
										<CircularProgressbar
											value={value}
											text={`${roundedValue}`}
											styles={buildStyles({ pathTransition: "none", pathColor: colors, textColor: colors, trailColor: "transparent" })}
										/>
									);
								}}
							</AnimatedProgressProvider>
						</div> :
						<div></div>
					}
				</div>
			</div>
		</Link>
	);
};

export default PreviewSearchItem;
