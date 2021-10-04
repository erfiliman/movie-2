import React from "react";
import {Link} from "react-router-dom";
import LoadBackground from "../LoadBackground/LoadBackground";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "../progressBar.css";
import AnimatedProgressProvider from "../AnimatedProgressProvider/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const MovieItem = (props) => {
	let link = "movie/"+props.id;
	let ratingFilm = props.rating;
	if (props.rating !=undefined && props.rating.includes("%")) {
		ratingFilm = props.rating.replace("%","") /10;
	}
	return (
		<Link to={link} className="movie-item">
			<div className="movie-item"  style={{backgroundImage: `url(${props.poster})`}}>
				<div className="blur movie-container">
					<div className="movie-image">
						<LoadBackground poster={props.poster}/>
					</div>
					<div className="movie-information">
						<div className="movie-title">{props.name}</div>
						<div className="movie-genres">
							<p>{props.genres.map((item)=> item.genre + ", ")}</p>
						</div>
						<div className="movie-release">{props.year}</div>
						<div className="movie-raiting">
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
						</div>
					</div>
				</div>
			</div>
		</Link>

	);
};


export default MovieItem;