import {
	CREATE_ROOM_QUIZ_PAGE,
	GET_ROOMS_QUIZ_PAGE,
	HIDE_POPULAR_PAGE_LOADING,
	JOIN_ROOM_QUIZ_PAGE,
	JOINED_CREATED_ROOM_QUIZ_PAGE, SET_COUNT_IMAGES_QUIZ_GAME, SET_CREATOR_QUIZ_PAGE,
	SET_IS_CORRECT_ANSWER_QUIZ_GAME,
	SET_NEW_QUESTION_QUIZ_GAME,
	SET_NUMBER_QUESTION_QUIZ_GAME,
	SET_POPULAR_PAGE_FILMS,
	SET_SECOND_QUIZ_GAME,
	SET_START_GAME_QUIZ_GAME,
	SET_USERS_QUIZ_PAGE,
	SHOW_POPULAR_PAGE_LOADING,
	START_GAME_QUIZ_GAME
} from "./types";

const initialState = {
	rooms: [],
	currentRoomId : null,
	currentUsers: [],
	username: null,
	message: null,
	isJoined: false,
	isStarted: false,
	isCorrect: false,
	currentQuestion: [],
	currentAnswer: '',
	seconds: 30,
	numberQuestion: 1,
	isCreator: false,
	countImages: 1,
}

export const quizPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_ROOM_QUIZ_PAGE:
			return {
				...state,
				rooms: [...state.rooms, action.payload.rooms]
			}
		case SET_COUNT_IMAGES_QUIZ_GAME:
			return {
				...state,
				countImages: action.payload
			}
		case JOIN_ROOM_QUIZ_PAGE:
			return {
				...state,
				currentRoomId: action.payload.roomId,
				username: action.payload.username,
				isJoined: true,
			}
		case SET_USERS_QUIZ_PAGE:
			return {
				...state,
				currentUsers: [...state.currentUsers.slice(0,0), ...action.payload]
			}
		case SET_START_GAME_QUIZ_GAME:
			return {
				...state,
				isStarted: action.payload
			}
		case SET_NEW_QUESTION_QUIZ_GAME:
			return {
				...state,
				currentQuestion: [...state.currentQuestion.slice(0,0), ...action.payload.images],
				currentAnswer: action.payload.filmName
			}
		case SET_IS_CORRECT_ANSWER_QUIZ_GAME:
			return {
				...state,
				isCorrect: action.payload
			}
		case SET_SECOND_QUIZ_GAME:
			return {
				...state,
				seconds: action.payload
			}
		case SET_NUMBER_QUESTION_QUIZ_GAME:
			return {
				...state,
				numberQuestion: action.payload
			}
		case SET_CREATOR_QUIZ_PAGE:
			return {
				...state,
				isCreator: action.payload
			}
		default:
			return state;
	}
}