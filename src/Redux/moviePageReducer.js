import {
	HIDE_MOVIE_PAGE_LOADING,
	HIDE_MOVIE_PAGE_PREQUELS_LOADING,
	HIDE_MOVIE_PAGE_SHOW_TRAILER,
	HIDE_MOVIE_PAGE_VIDEO_LOADING,
	MOVIE_PAGE_SHOW_TRAILER, SET_ACTIVE_TRAILER_MOVIE_PAGE, SET_LOADING_SIMILAR_SEARCH_PAGE,
	SET_MOVIE_KINOPOISK_VIDEO,
	SET_MOVIE_PAGE_INFORMATION,
	SET_MOVIE_PAGE_PREQUELS_INFORMATION, SET_MOVIE_PAGE_SHOW_TORRENTS,
	SET_MOVIE_PAGE_SHOW_TRAILER,
	SET_MOVIE_PAGE_TRAILERS,
	SET_MOVIE_PAGE_VIDEO_ERROR,
	SET_MOVIE_PAGE_YOUTUBE_VIDEO, SET_SHOW_ACTIVE_TRAILER_MOVIE_PAGE, SET_SIMILAR_FILMS_SEARCH_PAGE,
	SET_TRAILERS_EMPTY_MOVIE_PAGE,
	SHOW_MOVIE_PAGE_LOADING,
	SHOW_MOVIE_PAGE_PREQUELS_LOADING,
	SHOW_MOVIE_PAGE_SHOW_TRAILER,
	SHOW_MOVIE_PAGE_VIDEO_LOADING
} from "./types";

const initialState = {
	movieInformation: "",
	pageLoading: true,
	prequelsLoading: true,
	showTrailer: false,
	videoLoading: true,
	trailersEmpty: false,
	trailers: [],
	prequelsInformation: "",
	activeTrailerId: -1,
	isShowActiveTrailer: false,
	similarLoading: true,
	similarFilms: [],
	showTorrents: false
}

export const moviePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING_SIMILAR_SEARCH_PAGE:
			return {
				...state,
				similarLoading: action.payload
			}
		case SET_SIMILAR_FILMS_SEARCH_PAGE:
			return {
				...state,
				similarFilms: action.payload
			}
		case SET_MOVIE_PAGE_INFORMATION:
			return {
				...state,
				movieInformation: action.payload
			}
		case SET_ACTIVE_TRAILER_MOVIE_PAGE:
			return {
				...state,
				activeTrailerId: action.payload
			}
		case SET_SHOW_ACTIVE_TRAILER_MOVIE_PAGE:
			return {
				...state,
				isShowActiveTrailer: action.payload
			}
		case SET_TRAILERS_EMPTY_MOVIE_PAGE:
			return {
				...state,
				trailersEmpty: action.payload
			}
		case SHOW_MOVIE_PAGE_LOADING:
			return {
				...state,
				pageLoading: true,
			}
		case HIDE_MOVIE_PAGE_LOADING:
			return {
				...state,
				pageLoading: false,
			}
		case SHOW_MOVIE_PAGE_PREQUELS_LOADING:
			return {
				...state,
				prequelsLoading: true,
			}
		case HIDE_MOVIE_PAGE_PREQUELS_LOADING:
			return {
				...state,
				prequelsLoading: false,
			}
		case SHOW_MOVIE_PAGE_VIDEO_LOADING:
			return {
				...state,
				videoLoading: true,
			}
		case HIDE_MOVIE_PAGE_VIDEO_LOADING:
			return {
				...state,
				videoLoading: false,
			}
		case SET_MOVIE_PAGE_TRAILERS:
			return {
				...state,
				trailers: action.payload,
			}
		case SET_MOVIE_PAGE_PREQUELS_INFORMATION:
			return {
				...state,
				prequelsInformation: action.payload,
			}
		case SET_MOVIE_PAGE_YOUTUBE_VIDEO:
			return {
				...state,
				youtubeVideo: action.payload,
			}
		case SET_MOVIE_KINOPOISK_VIDEO:
			return {
				...state,
				kinopoiskVideo: action.payload,
			}
		case SET_MOVIE_PAGE_SHOW_TRAILER:
			return {
				...state,
				showTrailer: action.payload,
			}
		case SET_MOVIE_PAGE_SHOW_TORRENTS:
			return {
				...state,
				showTorrents: action.payload,
			}
		default:
			return state;
	}
}