import {
	CREATE_ROOM_QUIZ_PAGE,
	HIDE_LOADING_RANDOM_MOVIES,
	HIDE_LOADING_SEARCH_PAGE,
	HIDE_MORE_LOADING_SEARCH_PAGE,
	HIDE_MOVIE_PAGE_LOADING,
	HIDE_MOVIE_PAGE_PREQUELS_LOADING,
	HIDE_MOVIE_PAGE_SHOW_TRAILER,
	HIDE_MOVIE_PAGE_VIDEO_LOADING,
	HIDE_POPULAR_PAGE_LOADING,
	HIDE_PREVIEW_LOADING_SEARCH_BY_NAME,
	HIDE_SEARCH_BY_NAME_RESULT,
	HIDE_TOP_PAGE_LOADING, JOIN_ROOM_QUIZ_PAGE, SEND_ANSWER_QUIZ_GAME,
	SET_ACTIVE_NAV_ITEM,
	SET_ACTIVE_TRAILER_MOVIE_PAGE, SET_COUNT_IMAGES_QUIZ_GAME,
	SET_COUNTRIES_SEARCH_PAGE, SET_CREATOR_QUIZ_PAGE,
	SET_CURRENT_PAGE_SEARCH_PAGE,
	SET_GENRES_SEARCH_PAGE,
	SET_INPUT_VALUE_SEARCH_BY_NAME, SET_IS_CORRECT_ANSWER_QUIZ_GAME,
	SET_LOADING_SIMILAR_SEARCH_PAGE,
	SET_MOVIE_KINOPOISK_VIDEO,
	SET_MOVIE_PAGE_INFORMATION,
	SET_MOVIE_PAGE_PREQUELS_INFORMATION, SET_MOVIE_PAGE_SHOW_TORRENTS,
	SET_MOVIE_PAGE_SHOW_TRAILER,
	SET_MOVIE_PAGE_TRAILERS,
	SET_MOVIE_PAGE_VIDEO_ERROR,
	SET_MOVIE_PAGE_YOUTUBE_VIDEO, SET_NEW_QUESTION_QUIZ_GAME,
	SET_ORDER_SEARCH_PAGE,
	SET_PAGE_COUNT_SEARCH_PAGE,
	SET_POPULAR_PAGE_FILMS,
	SET_RATING_SEARCH_PAGE,
	SET_RELEASE_DATE_SEARCH_PAGE,
	SET_RESULT_SEARCH_PAGE,
	SET_RESULTS_RANDOM_MOVIES,
	SET_SEARCH_BY_NAME_RESULT, SET_SECOND_QUIZ_GAME,
	SET_SHOW_ACTIVE_TRAILER_MOVIE_PAGE,
	SET_SHOW_FILTERS_SEARCH_PAGE, SET_SHOW_MOBILE_MENU,
	SET_SIMILAR_FILMS_SEARCH_PAGE, SET_START_GAME_QUIZ_GAME,
	SET_THEME_DARK,
	SET_THEME_LIGHT,
	SET_TOP_PAGE_FILMS,
	SET_TRAILERS_EMPTY_MOVIE_PAGE,
	SET_TYPE_SEARCH_PAGE, SET_USERS_QUIZ_PAGE,
	SHOW_LOADING_RANDOM_MOVIES,
	SHOW_LOADING_SEARCH_PAGE,
	SHOW_MORE_LOADING_SEARCH_PAGE,
	SHOW_MOVIE_PAGE_LOADING,
	SHOW_MOVIE_PAGE_PREQUELS_LOADING,
	SHOW_MOVIE_PAGE_SHOW_TRAILER,
	SHOW_MOVIE_PAGE_VIDEO_LOADING,
	SHOW_POPULAR_PAGE_LOADING,
	SHOW_PREVIEW_LOADING_SEARCH_BY_NAME,
	SHOW_SEARCH_BY_NAME_RESULT,
	SHOW_TOP_PAGE_LOADING
} from "./types";
import socket from "../sockets";
import axios from 'axios';


export const setThemeDark = () => {
	localStorage.setItem('isDarkTheme', "1");
	return {
		type: SET_THEME_DARK
	}
}

export const setThemeLight = () => {
	localStorage.setItem('isDarkTheme', "0");
	return {
		type: SET_THEME_LIGHT
	}
}
export const showPreviewLoadingSearchByName = () => {
	return {
		type: SHOW_PREVIEW_LOADING_SEARCH_BY_NAME
	}
}
export const hidePreviewLoadingSearchByName = () => {
	return {
		type: HIDE_PREVIEW_LOADING_SEARCH_BY_NAME
	}
}

export const setShowFilterSearchPage = (isShow) => {
	return {
		type: SET_SHOW_FILTERS_SEARCH_PAGE,
		payload: isShow
	}
}

export const showSearchByNameResult = () => {
	return {
		type: SHOW_SEARCH_BY_NAME_RESULT
	}
}

export const setActiveNavItem = (links) => {
	return {
		type: SET_ACTIVE_NAV_ITEM,
		payload: links
	}
}

export const hideSearchByNameResult = () => {
	return {
		type: HIDE_SEARCH_BY_NAME_RESULT
	}
}

export const showLoadingRandomMovies = () => {
	return {
		type: SHOW_LOADING_RANDOM_MOVIES
	}
}

export const hideLoadingRandomMovies = () => {
	return {
		type: HIDE_LOADING_RANDOM_MOVIES
	}
}

export const setSearchInputValueSearchByName = (value) => {
	return {
		type: SET_INPUT_VALUE_SEARCH_BY_NAME,
		payload: value
	}
}

export const showLoadingMoviePage = () => {
	return {
		type: SHOW_MOVIE_PAGE_LOADING
	}
}

export const setGenresSearchPage = (genres) => {
	return {
		type: SET_GENRES_SEARCH_PAGE,
		payload: genres
	}
}

export const hideLoadingMoviePage = () => {
	return {
		type: HIDE_MOVIE_PAGE_LOADING
	}
}

export const showMoviePagePrequelsLoading = () => {
	return {
		type: SHOW_MOVIE_PAGE_PREQUELS_LOADING
	}
}

export const hideMoviePagePrequelsLoading = () => {
	return {
		type: HIDE_MOVIE_PAGE_PREQUELS_LOADING
	}
}

export const setMoviePageShowTrailer = (val) => {
	return {
		type: SET_MOVIE_PAGE_SHOW_TRAILER,
		payload: val
	}
}


export const setShowMobileMenu = (val) => {
	return {
		type: SET_SHOW_MOBILE_MENU,
		payload: val
	}
}

export const setMoviePageShowTorrents = (val) => {
	return {
		type: SET_MOVIE_PAGE_SHOW_TORRENTS,
		payload: val
	}
}

export const showMoviePageVideoLoading = () => {
	return {
		type: SHOW_MOVIE_PAGE_VIDEO_LOADING
	}
}

export const hideMoviePageVideoLoading = () => {
	return {
		type: HIDE_MOVIE_PAGE_VIDEO_LOADING
	}
}

export const setMoviePageYoutubeVideo = (url) => {
	return {
		type: SET_MOVIE_PAGE_YOUTUBE_VIDEO,
		payload: url
	}
}

export const setMoviePageKinopoiskVideo = (url) => {
	return {
		type: SET_MOVIE_KINOPOISK_VIDEO,
		payload: url
	}
}

export const setMoviePageVideoError = (err) => {
	return {
		type: SET_MOVIE_PAGE_VIDEO_ERROR,
		payload: err
	}
}

export const showPopularPageLoad= () => {
	return {
		type: SHOW_POPULAR_PAGE_LOADING
	}
}


export const hidePopularPageLoad= () => {
	return {
		type: HIDE_POPULAR_PAGE_LOADING
	}
}

export const showTopPageLoad= () => {
	return {
		type: SHOW_TOP_PAGE_LOADING
	}
}

export const hideTopPageLoad= () => {
	return {
		type: HIDE_TOP_PAGE_LOADING
	}
}

export const showLoadingSearchPage= () => {
	return {
		type: SHOW_LOADING_SEARCH_PAGE
	}
}

export const hideLoadingSearchPage= () => {
	return {
		type: HIDE_LOADING_SEARCH_PAGE
	}
}

export const showMoreLoadingSearchPage= () => {
	return {
		type: SHOW_MORE_LOADING_SEARCH_PAGE
	}
}

export const hideMoreLoadingSearchPage= () => {
	return {
		type: HIDE_MORE_LOADING_SEARCH_PAGE
	}
}

export const setPageCountSearchPage= (page) => {
	return {
		type: SET_PAGE_COUNT_SEARCH_PAGE,
		payload: page
	}
}

export const setCurrentPageSearchPage= (page) => {
	return {
		type: SET_CURRENT_PAGE_SEARCH_PAGE,
		payload: page
	}
}

export const setCountriesSearchPage= (countries) => {
	return {
		type: SET_COUNTRIES_SEARCH_PAGE,
		payload: countries
	}
}

export const setResultSearchPage= (result) => {
	return {
		type: SET_RESULT_SEARCH_PAGE,
		payload: result
	}
}

export const setTypeSearchPage= (type) => {
	return {
		type: SET_TYPE_SEARCH_PAGE,
		payload: type
	}
}


export const setMoviePageTrailers= (trailers) => {
	return {
		type: SET_MOVIE_PAGE_TRAILERS,
		payload: trailers
	}
}


export const setOrderSearchPage= (order) => {
	return {
		type: SET_ORDER_SEARCH_PAGE,
		payload: order
	}
}

export const setTrailersEmptyMoviePage= (isEmpty) => {
	return {
		type: SET_TRAILERS_EMPTY_MOVIE_PAGE,
		payload: isEmpty
	}
}


export const setReleaseDateSearchPage= (date) => {
	return {
		type: SET_RELEASE_DATE_SEARCH_PAGE,
		payload: date
	}
}

export const setRatingSearchPage= (rating) => {
	return {
		type: SET_RATING_SEARCH_PAGE,
		payload: rating
	}
}

export const setActiveTrailerMoviePage= (id) => {
	return {
		type: SET_ACTIVE_TRAILER_MOVIE_PAGE,
		payload: id
	}
}

export const setShowActiveTrailerMoviePage= (isShow) => {
	return {
		type: SET_SHOW_ACTIVE_TRAILER_MOVIE_PAGE,
		payload: isShow
	}
}
export const setLoadingSimilarSearchPage= (loading) => {
	return {
		type: SET_LOADING_SIMILAR_SEARCH_PAGE,
		payload: loading
	}
}

export const setUsersQuizPage= (users) => {
	return {
		type: SET_USERS_QUIZ_PAGE,
		payload: users.sort((a, b) => a.points < b.points ? 1 : -1)
	}
}

export const setNewQuestionQuizGame= (obj) => {
	return {
		type: SET_NEW_QUESTION_QUIZ_GAME,
		payload: obj
	}
}

export const setIsCorrectAnswer= (obj) => {
	return {
		type: SET_IS_CORRECT_ANSWER_QUIZ_GAME,
		payload: obj
	}
}

export const setSecondQuizGame= (second) => {
	return {
		type: SET_SECOND_QUIZ_GAME,
		payload: second
	}
}

export const setCreatorQuizPage= (isCreator) => {
	return {
		type: SET_CREATOR_QUIZ_PAGE,
		payload: isCreator
	}
}

export const setCountImagesQuizPage= (count) => {
	return {
		type: SET_COUNT_IMAGES_QUIZ_GAME,
		payload: count
	}
}


export const sendAnswerQuizGame= (obj) => {
	socket.emit('CHECK_ANSWER', obj);
}


export const setStartGameQuizPage = (obj) => {
	return async dispatch => {
		socket.emit('START_GAME', obj);
		dispatch({
			type: SET_START_GAME_QUIZ_GAME,
			payload: obj.isStart
		})
	}
}


export const joinRoomQuizPage = (obj) => {
	return async dispatch => {
		await axios.post('https://glacial-sierra-02023.herokuapp.com/join', obj);
		dispatch({
			type: JOIN_ROOM_QUIZ_PAGE,
			payload: obj
		})
		socket.emit('JOIN', obj);
	}
}

export const setLoadSimilarFilms = (id) => {
	return async dispatch => {
		dispatch(setLoadingSimilarSearchPage(true));
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch({
					type: SET_SIMILAR_FILMS_SEARCH_PAGE,
					payload: responseJson.items
				})
				dispatch(setLoadingSimilarSearchPage(false));
			})
	}
}

export const loadNextPageSearchPage= (prevResult, countries, genres, typeSearch, rating, releaseDate, orderSearch, currentPage) => {
	return async dispatch => {
		dispatch(showMoreLoadingSearchPage());
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=${countries.join("&country=")}&genre=${genres.join("&genre=")}&order=${orderSearch}&type=${typeSearch}&ratingFrom=${rating.from}&ratingTo=${rating.to}&yearFrom=${releaseDate.from}&yearTo=${releaseDate.to}&page=${currentPage}`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch({
					type: SET_RESULT_SEARCH_PAGE,
					payload: [...prevResult, ...responseJson.films]
				})

				dispatch(hideMoreLoadingSearchPage());
			})
	}
}

export const setResultRandomSearchPage= (countries, genres, typeSearch, rating, releaseDate, currentPage = -1) => {
	return async dispatch => {
		dispatch(showLoadingSearchPage());
		let page;
		if (currentPage != -1)
			page = currentPage;
		else page = Math.round(1 - 0.5 + Math.random() * (5));
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=${countries.join("&country=")}&genre=${genres.join("&genre=")}&&type=${typeSearch}&ratingFrom=${rating.from}&ratingTo=${rating.to}&yearFrom=${releaseDate.from}&yearTo=${releaseDate.to}&page=${page}`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch(setResultSearchPage(responseJson.films.sort(() => Math.random() - 0.5)));
				dispatch(setPageCountSearchPage(responseJson.pagesCount));
				dispatch(hideLoadingSearchPage());
			})
	}
}


export const setMovieInformation = (movieId) => {
	return async dispatch => {
		dispatch(showLoadingMoviePage());
		dispatch(showMoviePagePrequelsLoading());
		dispatch(showMoviePageVideoLoading());
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${movieId}?append_to_response=BUDGET,RATING`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch({
					type: SET_MOVIE_PAGE_INFORMATION,
					payload: responseJson
				})
				dispatch(hideLoadingMoviePage());
			});
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${movieId}/sequels_and_prequels`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch({
					type: SET_MOVIE_PAGE_PREQUELS_INFORMATION,
					payload: responseJson
				})
				dispatch(hideMoviePagePrequelsLoading());
			});
	}
}

export const searchRandomMovies = () => {
	return async dispatch => {
		dispatch(showLoadingRandomMovies());

		let year = Math.round(1989 - 0.5 + Math.random() * (2021 - 1989 + 1));
		let page = Math.round(1 - 0.5 + Math.random() * (5));
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=&order=NUM_VOTE&type=FILM&ratingTo=10&yearFrom=${year}&yearTo=${year}&page=${page}`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch({
					type: SET_RESULTS_RANDOM_MOVIES,
					payload: responseJson.films.sort(() => Math.random() - 0.5)
				});
				dispatch(hideLoadingRandomMovies());
			})
	}
}

export const setPopularPageFilms = () => {
	return async dispatch => {
		dispatch(showPopularPageLoad());
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch({type: SET_POPULAR_PAGE_FILMS, payload: responseJson.films});
				dispatch(hidePopularPageLoad());
			})

	}
}

export const setTopPageFilms = () => {
	return async dispatch => {
		dispatch(showTopPageLoad());
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				dispatch({type: SET_TOP_PAGE_FILMS, payload: responseJson.films});
				dispatch(hideTopPageLoad());
			})
	}
}

export const setSearchByNameResult = (title) => {
	return async dispatch => {
		dispatch(showPreviewLoadingSearchByName())
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${title}&page=1`, {
			headers: {
				"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
			}
		})
			.then((response) => response.json())
			.then((responseJSON) => {
				dispatch({
					type: SET_SEARCH_BY_NAME_RESULT,
					payload: responseJSON.films
				});
				dispatch(hidePreviewLoadingSearchByName());
			});
	}
}

export const setMoviePageVideo = (movieId) => {
	return async dispatch => {
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${movieId}/videos`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				console.log(responseJson);
				let trailerYoutube = "";
				let finalTrailers = responseJson.trailers;
				if (responseJson.trailers.length !== 0) {
					const promiseAll = Promise.all(responseJson.trailers.map((item, index) => {
						let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
						let match = item.url.match(regExp);
						if (match && match[2].length == 11) {
							return fetch(`https://www.googleapis.com/youtube/v3/videos?part=status&id=${match[2]}&key=AIzaSyBKkIO6XY-iyNp2nPBZ8qCGw8zwMg5PYMg`)
								.then(response=> response.json())
								.then((responseJson)=>{
									if (responseJson.items.length != 0 && responseJson.items[0].status.uploadStatus == 'processed') {
										console.log(item);
									} else finalTrailers.splice(index,1)
								});
						}
					}));
					promiseAll.then(()=>{
						dispatch(setMoviePageTrailers(finalTrailers));
						dispatch(hideMoviePageVideoLoading());
						dispatch(setTrailersEmptyMoviePage(false))
					});
				}
					// trailerYoutube = (responseJson.trailers).filter(function (item) {
					// 	return item.site.toLowerCase() == "youtube";
					// });
					// if (trailerYoutube !== undefined && trailerYoutube[0] !== undefined) {
					// 	dispatch(setMoviePageYoutubeVideo(trailerYoutube[0].url.replace('https://www.youtube.com/v/', "").replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "")));
					// 	dispatch(hideMoviePageVideoLoading());
					// } else {
					// 	let trailerWidgetKinopoisk = (responseJson.trailers).filter(function (item) {
					// 		return item.site.toLowerCase() == "kinopoisk_widget";
					// 	});
					// 	if (trailerWidgetKinopoisk !== undefined && trailerWidgetKinopoisk[0] !== undefined) {
					// 		dispatch(setMoviePageKinopoiskVideo(trailerWidgetKinopoisk[0].url));
					// 		dispatch(hideMoviePageVideoLoading());
					// 	}
					// }
				// dispatch(setMoviePageVideoError(false));
				else {
					dispatch(setTrailersEmptyMoviePage(true));
					dispatch(hideMoviePageVideoLoading());
				}
			})
	}
}