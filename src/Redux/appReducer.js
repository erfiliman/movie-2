import {SET_LANGUAGE, SET_SHOW_MOBILE_MENU, SET_THEME_DARK, SET_THEME_LIGHT} from "./types";

const initialState = {
	loading: true,
	language: localStorage.getItem('lang') == undefined ? "ru" :localStorage.getItem('lang'),
	themeDark: localStorage.getItem('isDarkTheme') !== "1" ? false : true,
	showMobileMenu: false,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LANGUAGE:
			return {
				...state,
				language: action.payload
			}
		case SET_SHOW_MOBILE_MENU:
			return {
				...state,
				showMobileMenu: action.payload
			}
		case SET_THEME_DARK:
			return {
				...state,
				themeDark: true
			}
		case SET_THEME_LIGHT:
			return {
				...state,
				themeDark: false
			}
		default:
			return state;
	}
}