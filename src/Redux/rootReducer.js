import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {navReducer} from "./navReducer";
import {searchReducer} from "./searchReducer";
import {randomReducer} from "./randomReducer";
import {moviePageReducer} from "./moviePageReducer";
import {popularPageReducer} from "./popularPageReducer";
import {topPageReducer} from "./topPageReducer";
import {searchPageReducer} from "./searchPageReducer";
import {quizPageReducer} from "./quizPageReducer";

export const rootReducer = combineReducers({
	app: appReducer,
	nav: navReducer,
	search: searchReducer,
	randomMovies: randomReducer,
	moviePage: moviePageReducer,
	popularPage: popularPageReducer,
	topPage: topPageReducer,
	searchPage: searchPageReducer,
	quizPageReducer: quizPageReducer
})