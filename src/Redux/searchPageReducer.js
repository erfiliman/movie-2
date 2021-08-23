import {
	HIDE_LOADING_SEARCH_PAGE,
	HIDE_MORE_LOADING_SEARCH_PAGE,
	HIDE_POPULAR_PAGE_LOADING,
	SET_COUNTRIES_SEARCH_PAGE,
	SET_CURRENT_PAGE_SEARCH_PAGE,
	SET_GENRES_SEARCH_PAGE, SET_LOADING_SIMILAR_SEARCH_PAGE,
	SET_ORDER_SEARCH_PAGE,
	SET_PAGE_COUNT_SEARCH_PAGE,
	SET_POPULAR_PAGE_FILMS,
	SET_RATING_SEARCH_PAGE,
	SET_RELEASE_DATE_SEARCH_PAGE,
	SET_RESULT_SEARCH_PAGE, SET_SIMILAR_FILMS_SEARCH_PAGE,
	SET_TYPE_SEARCH_PAGE,
	SHOW_LOADING_SEARCH_PAGE,
	SHOW_MORE_LOADING_SEARCH_PAGE,
	SHOW_POPULAR_PAGE_LOADING
} from "./types";

const initialState = {
	genres: [],
	isLoad: false,
	moreLoading: false,
	showFilters: true,
	pagesCount: 0,
	currentPage: 1,
	countries: [],
	result: [],
	typeSearch: "FILM",
	orderSearch: "NUM_VOTE",
	releaseDate: {
		from: "1950",
		to: new Date().getFullYear().toString()
	},
	rating: {
		from: "0",
		to: "10"
	},
	typeDropDown: [
		{
			data: "FILM",
			label: "Фильм"
		},
		{
			data: "TV_SHOW",
			label: "ТВ-Шоу"
		},
		{
			data: "ALL",
			label: "Все"
		}
	],
	typeOrderSearch: [
		{
			data: "RATING",
			label: "Рейтинг"
		},
		{
			data: "NUM_VOTE",
			label: "Популярность"
		},
		{
			data: "YEAR",
			label: "Год выпуска"
		}

	]

}

export const searchPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GENRES_SEARCH_PAGE:
			return {
				...state,
				genres: action.payload
			}
		case SHOW_LOADING_SEARCH_PAGE:
			return {
				...state,
				isLoad: true
			}
		case HIDE_LOADING_SEARCH_PAGE:
			return {
				...state,
				isLoad: false
			}
		case SHOW_MORE_LOADING_SEARCH_PAGE:
			return {
				...state,
				moreLoading: true
			}
		case HIDE_MORE_LOADING_SEARCH_PAGE:
			return {
				...state,
				moreLoading: false
			}
		case SET_PAGE_COUNT_SEARCH_PAGE:
			return {
				...state,
				pagesCount: action.payload
			}
		case SET_CURRENT_PAGE_SEARCH_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
		case SET_COUNTRIES_SEARCH_PAGE:
			return {
				...state,
				countries: action.payload
			}
		case SET_RESULT_SEARCH_PAGE:
			return {
				...state,
				result: action.payload
			}
		case SET_TYPE_SEARCH_PAGE:
			return {
				...state,
				typeSearch: action.payload
			}
		case SET_ORDER_SEARCH_PAGE:
			return {
				...state,
				orderSearch: action.payload
			}
		case SET_RELEASE_DATE_SEARCH_PAGE:
			return {
				...state,
				releaseDate: action.payload
			}
		case SET_RATING_SEARCH_PAGE:
			return {
				...state,
				rating: action.payload
			}
		default:
			return state;
	}
}