import {
	HIDE_LOADING_RANDOM_MOVIES,
	SET_ACTIVE_NAV_ITEM,
	SET_RESULTS_RANDOM_MOVIES,
	SHOW_LOADING_RANDOM_MOVIES
} from "./types";

const initialState = {
	isLoadingRandomMovies: false,
	resultsRandomMovies: []
}

export const randomReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADING_RANDOM_MOVIES:
			return {
				...state,
				isLoadingRandomMovies: true

			}
		case HIDE_LOADING_RANDOM_MOVIES:
			return {
				...state,
				isLoadingRandomMovies: false

			}
		case SET_RESULTS_RANDOM_MOVIES:
			return {
				...state,
				resultsRandomMovies: action.payload
			}
		default:
			return state;
	}
}