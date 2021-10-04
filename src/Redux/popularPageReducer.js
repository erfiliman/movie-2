import {
	HIDE_POPULAR_PAGE_LOADING, SET_POPULAR_PAGE_FILMS, SHOW_POPULAR_PAGE_LOADING
} from "./types";

const initialState = {
	popularLoad: true,
	popularFilms: []
}

export const popularPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_POPULAR_PAGE_LOADING:
			return {
				...state,
				popularLoad: true
			}
		case HIDE_POPULAR_PAGE_LOADING:
			return {
				...state,
				popularLoad: false,
			}
		case SET_POPULAR_PAGE_FILMS:
			return {
				...state,
				popularFilms: action.payload
			}
		default:
			return state;
	}
}