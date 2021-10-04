import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import LoadImage from "../LoadImage/LoadImage";
import {useDispatch, useSelector} from "react-redux";
import {
	setActiveTrailerMoviePage, setLoadingSimilarSearchPage, setLoadSimilarFilms,
	setMovieInformation, setMoviePageShowTorrents,
	setMoviePageShowTrailer,
	setMoviePageVideo, setShowActiveTrailerMoviePage, setTrailersEmptyMoviePage
} from "../../Redux/actions";
import ModalContainer from "../ModalContainer/ModalContainer";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnailYoutube";
import VideoThumbnailKinopoisk from "../VideoThumbnail/VideoThumbnailKinopoisk";
import VideoThumbnailYoutube from "../VideoThumbnail/VideoThumbnailYoutube";

const MoviePage = (props) => {
	const dispatch = useDispatch();
	const movieInformation = useSelector((state => state.moviePage.movieInformation));
	const similarFilms = useSelector((state => state.moviePage.similarFilms));
	const similarLoading = useSelector((state => state.moviePage.similarLoading));
	const movieLoading = useSelector((state => state.moviePage.pageLoading));
	const prequelsLoading = useSelector((state => state.moviePage.prequelsLoading));
	const prequels = useSelector((state => state.moviePage.prequelsInformation));
	const trailers = useSelector((state => state.moviePage.trailers));
	const activeTrailerId = useSelector((state => state.moviePage.activeTrailerId));
	const isShowActiveTrailer = useSelector((state => state.moviePage.isShowActiveTrailer));
	const trailersEmpty = useSelector((state => state.moviePage.trailersEmpty));
	const kinopoiskVideo = useSelector((state => state.moviePage.kinopoiskVideo));
	const videoLoading = useSelector((state => state.moviePage.videoLoading));
	const showTrailer = useSelector((state => state.moviePage.showTrailer));
	const showTorrents = useSelector((state => state.moviePage.showTorrents));

	useEffect(()=> {
		dispatch(setLoadSimilarFilms(props.match.params.movieId));
	},[])

	const getIdYoutubeByUrl = (url)=> {
		let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		let match = url.match(regExp);
		if (match && match[2].length == 11) {
			return match[2];
		} else {
			//error
		}
	}


	const onVideoThumbnailClick = (id) => {
		dispatch(setActiveTrailerMoviePage(id));
		dispatch(setShowActiveTrailerMoviePage(true));
	}

	const showToggleHandler = (id) => {
		dispatch(setMoviePageShowTrailer(false))
		dispatch(setShowActiveTrailerMoviePage(false));
		dispatch(setMoviePageShowTorrents(false));
	}

	useEffect(() => {
		dispatch(setMovieInformation(props.match.params.movieId));
		console.log(movieInformation);
	}, [props.match.params.movieId])


	useEffect(() => {
		if (showTrailer) {
			dispatch(setMoviePageVideo(props.match.params.movieId));
		}
	}, [showTrailer])

	return (
		<div className="movie-page-container" key={props.match.params.movieId}>
			{movieLoading ?
				<div className="main-load">
					<div className="loading-icon"></div>
				</div> :
				<div className="movie-page-upper" style={{backgroundImage: `url(${movieInformation.data.posterUrl})`}}>
					<div className="movie-page-upper-information blur">
						<div className="movie-page-image">
							<LoadImage poster={movieInformation.data.posterUrl}/>
							<div className="btn-watch-trailer-container">
								<div className="btn-watch-trailer" onClick={() => {
									dispatch(setMoviePageShowTrailer(!showTrailer));
								}}>
									Trailers
								</div>
								<a target="_blank" href={`https://lenad.site/films/${props.match.params.movieId}/`}
								   className="btn-watch">
									Watch Online
								</a>
								<div className="btn-watch-trailer" onClick={() => {
									dispatch(setMoviePageShowTorrents(!showTorrents));
								}}>
									Download
								</div>
							</div>
						</div>
						<div className={`movie-page-main-information ${prequels.length>0? "movie-page-main-information_prequels":""}`}>
							<div className="movie-page-title">
								{movieInformation.data.nameEn == null || movieInformation.data.nameEn === null || movieInformation.data.nameEn == ""? movieInformation.data.nameRu: props.lang=="ru"? movieInformation.data.nameRu: movieInformation.data.nameEn}
							</div>
							<div className="movie-page-countries">
								<p>Countries: {movieInformation.data.countries.map((item) => item.country + " ")}</p>
							</div>
							<div className="movie-page-genres">
								<span>{movieInformation.data.genres.map((item) => item.genre + ", ")}</span>
							</div>
							<div className="movie-page-year">
								Release year: {movieInformation.data.year}
							</div>
							<div className="movie-page-budget">
								Budget: {movieInformation.budget.budget}
							</div>
							<div className="movie-page-description">
								{movieInformation.data.description}
							</div>
							<div className="movie-page-duration">
								Duration: {movieInformation.data.filmLength}
							</div>
							<div className="movie-page-rating">
								<div>Kinopoisk: {movieInformation.rating.rating}</div>
								<div>IMDB: {movieInformation.rating.ratingImdb}</div>
							</div>
							<div className="movie-page-prequels">
								{
									prequelsLoading? <div className="main-load">
										<div className="loading-icon"></div>
									</div>: prequels.length>0 && prequels.map((item, index)=>{
										if (item.relationType =="SEQUEL" || item.relationType =="PREQUEL")
											return <Link to={`/movie/${item.filmId}`} key={index}><div className="sequel-movie">
												<div className="sequel-movie-title">{item.nameRu}</div>
												<div className="sequel-movie-back" style={{backgroundImage: `url(${item.posterUrlPreview})`}}></div>
											</div>
											</Link>
									})}
							</div>
						</div>
					</div>


					{showTrailer ?
						videoLoading ?
							<ModalContainer>
								<div className="main-load">
									<div className="loading-icon"></div>
								</div>
							</ModalContainer> :
							!trailersEmpty && !isShowActiveTrailer?
								<ModalContainer showToggle={showToggleHandler}>
									<div className="modal-grid-trailers">
										<div className="modal-grid-trailers-content">
											{
												trailers.slice(0,4).map((item, index)=>{
													if (item.site.toLowerCase() == "youtube") {
														return <VideoThumbnailYoutube onClick={(id)=>{onVideoThumbnailClick(id)}} id={getIdYoutubeByUrl(item.url)} dataId={index} key={index} title={item.name}/>
													} else if(item.site.toLowerCase() == "kinopoisk_widget") {
														return <VideoThumbnailKinopoisk dataId={index} key={index} url={item.url} title={item.name}/>
													}
												})
											}
										</div>
									</div>
								</ModalContainer>:
								!trailersEmpty && isShowActiveTrailer?
									<ModalContainer showToggle={showToggleHandler}>
										<div className="btn-back-to-trailers" onClick={()=>{dispatch(setShowActiveTrailerMoviePage(false))}}></div>
										<iframe
											src={`https://www.youtube.com/embed/${getIdYoutubeByUrl(trailers[activeTrailerId].url)}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
											allow="autoplay"
											allowFullScreen
											allowtransparency="true"
										></iframe>
									</ModalContainer> :
									// <ModalContainer showToggle={()=>dispatch(setMoviePageShowTrailer(false))}>
									// 	<a target="_blank" className="watch-trailer-kinopoisk" href={kinopoiskVideo}>
									// 	</a>
									// </ModalContainer> :
								<ModalContainer showToggle={showToggleHandler}>
									<div className="alert-modal-container">Нет видео</div>
								</ModalContainer>:
						showTorrents && <ModalContainer showToggle={showToggleHandler}>
							<iframe
								src={`https://lenad.site/torrents/${movieInformation.data.nameRu.replace(/\\|\//g,' ')+ " " +  movieInformation.data.nameEn.replace(/\\|\//g,' ')+ " " +  movieInformation.data.year.toString().replace(/\\|\//g,' ')}`}
								className="torrents-modal"
							></iframe>
						</ModalContainer>
					}
				</div>
			}
			{
				!movieLoading && similarFilms.length>0 &&
					<div className="similar-films">
						{
							!similarLoading?
								<div className="similar-films-container">
									<div className="similar-films-title">Похожие фильмы</div>
									<div className="similar-films-grid">
										{
											similarFilms.map((item, index)=>{
												return <Link to={`/movie/${item.filmId}`}>
													<div className="similar-films-item" key={item.filmId}>
														<LoadImage poster={item.posterUrlPreview}/>
														<div className="similar-films-item-title">
															{item.nameRu}
														</div>
													</div>
												</Link>
											})
										}
									</div>
								</div>
								:
								<div className="main-load">
									<div className="loading-icon"></div>
								</div>
						}
					</div>
			}

		</div>
	);
};

export default withRouter(MoviePage);
