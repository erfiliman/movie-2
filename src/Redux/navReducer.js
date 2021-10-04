import {SET_ACTIVE_NAV_ITEM} from "./types";

const initialState = {
	navItems: [
			{
				id: 0,
				name: "Random",
				nameRu: "Случайные",
				cssClass: "sidebar-navigation-item_random",
				link: '',
			},
			{
				id: 1,
				name: "Search",
				nameRu: "Поиск",
				cssClass: "sidebar-navigation-item_search",
				link: 'search',
			},
			{
				id: 2,
				name: "Top",
				nameRu: "Лучшие",
				cssClass: "sidebar-navigation-item_top",
				link: "top",
			},
			{
				id: 3,
				name: "Popular",
				nameRu: "Популярные",
				cssClass: "sidebar-navigation-item_popular",
				link: "popular",
			},
			{
				id: 4,
				name: "Releases",
				nameRu: "Релизы",
				cssClass: "sidebar-navigation-item_releases",
				link: "releases",
			},
			{
				id: 5,
				name: "Settings",
				nameRu: "Настройки",
				cssClass: "sidebar-navigation-item_settings",
				link: "settings",
			},
			{
				id: 5,
				name: "Quiz",
				nameRu: "Викторина",
				cssClass: "sidebar-navigation-item_settings",
				link: "quiz",
			}
		],
}

export const navReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_NAV_ITEM:
			return {
				...state.navItems.slice(0,0),
				...action.payload
			}
		default:
			return state;
	}
}