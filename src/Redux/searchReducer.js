import {
	HIDE_PREVIEW_LOADING_SEARCH_BY_NAME, HIDE_SEARCH_BY_NAME_RESULT, SET_INPUT_VALUE, SET_INPUT_VALUE_SEARCH_BY_NAME,
	SET_LANGUAGE,
	SET_SEARCH_BY_NAME_RESULT,
	SHOW_PREVIEW_LOADING_SEARCH_BY_NAME, SHOW_SEARCH_BY_NAME_RESULT
} from "./types";

const initialState = {
	inputValue: "",
	resultShow: false,
	previewLoading: false,
	results: []
}

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INPUT_VALUE_SEARCH_BY_NAME:
			return {
				...state,
				inputValue: action.payload
			}
		case SET_SEARCH_BY_NAME_RESULT:
			return {
				...state,
				results: action.payload
			}
		case HIDE_PREVIEW_LOADING_SEARCH_BY_NAME:
			return {
				...state,
				previewLoading: false,
			}
		case SHOW_PREVIEW_LOADING_SEARCH_BY_NAME:
			return {
				...state,
				previewLoading: true,
			}
		case HIDE_SEARCH_BY_NAME_RESULT:
			return {
				...state,
				resultShow: false
			}
		case SHOW_SEARCH_BY_NAME_RESULT:
			return {
				...state,
				resultShow: true
			}
		default:
			return state;
	}
}