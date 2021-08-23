import React, {useEffect, useMemo, useState} from 'react';
import {withRouter} from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import {useDispatch, useSelector} from "react-redux";
import {searchRandomMovies} from "../../Redux/actions";

const MoviesRandom = (props) => {
	const dispatch = useDispatch();
	const results = useSelector((state => state.randomMovies.resultsRandomMovies));
	const loading = useSelector((state => state.randomMovies.isLoadingRandomMovies));

	useEffect(() => {
		dispatch(searchRandomMovies());
	}, [props.location.key])

	return (
		<div className="random-movies main-grid-movies scroll" >
			{loading ? <div className="main-load">
				<div className="loading-icon"></div>
			</div> : results.slice(0, 9).map((item) => {
				return <MovieItem key={item.filmId} id={item.filmId} year={item.year}
								  poster={item.posterUrlPreview} genres={item.genres}
								  name={item.nameEn == null || item.nameEn === null? item.nameRu: props.language=="ru"? item.nameRu: item.nameEn}
								  rating={item.rating}/>
			})}
		</div>
	);
};

export default withRouter(MoviesRandom);
