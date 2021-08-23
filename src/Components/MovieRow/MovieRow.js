import React from 'react';
import {Link} from "react-router-dom";
import {easeQuadInOut} from "d3-ease";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import AnimatedProgressProvider from "../AnimatedProgressProvider/AnimatedProgressProvider";

const MovieRow = (props) => {
    let ratingFilm = props.rating;
    if (props.rating.includes("%")) {
        ratingFilm = props.rating.replace("%","") /10;
    }
    return (
        <Link to={`/movie/${props.id}`} className="movie-row-container" style={{backgroundImage: `url(${props.poster})`}}>
            <div className="">
                <div className="movie-row-title">{props.name}</div>
                <div className="movie-row-right-content-container">
                    <div className="movie-row-year">{props.year}</div>
                    <div className="movie-row-rating"><AnimatedProgressProvider
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
                    </AnimatedProgressProvider></div>
                </div>
            </div>
        </Link>
    );
};

export default MovieRow;
