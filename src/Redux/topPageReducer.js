import {
	HIDE_POPULAR_PAGE_LOADING,
	HIDE_TOP_PAGE_LOADING,
	SET_POPULAR_PAGE_FILMS, SET_TOP_PAGE_FILMS,
	SHOW_POPULAR_PAGE_LOADING,
	SHOW_TOP_PAGE_LOADING
} from "./types";

const initialState = {
	topLoad: true,
	topFilms: []
}

export const topPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_TOP_PAGE_LOADING:
			return {
				...state,
				topLoad: true
			}
		case HIDE_TOP_PAGE_LOADING:
			return {
				...state,
				topLoad: false,
			}
		case SET_TOP_PAGE_FILMS:
			return {
				...state,
				topFilms: action.payload
			}
		default:
			return state;
	}
}