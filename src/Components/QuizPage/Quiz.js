import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import socket from "../../sockets";
import FormCreateRoom from "./FormCreateRoom";
import RoomQuiz from "./RoomQuiz";
import {
	setCountImagesQuizPage,
	setIsCorrectAnswer,
	setNewQuestionQuizGame,
	setSecondQuizGame,
	setStartGameQuizPage,
	setUsersQuizPage
} from "../../Redux/actions";
const Quiz = () => {
	const rooms = useSelector((state)=>state.quizPageReducer.rooms);
	const isJoined = useSelector((state)=>state.quizPageReducer.isJoined);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		socket.on('ADD_USER', (users)=> {
			console.log(users);
			dispatch(setUsersQuizPage(users))
		});
		socket.on('NEW_QUESTION', (obj)=> {
			console.log(obj);
			dispatch(setIsCorrectAnswer(false));
			dispatch(setCountImagesQuizPage(1));
			dispatch(setNewQuestionQuizGame(obj));
		});
		socket.on('CORRECT_ANSWER', (users)=> {
			dispatch(setIsCorrectAnswer(true));
			dispatch(setUsersQuizPage(users));
		});
		socket.on('INCORRECT_ANSWER', (users)=> {
			dispatch(setIsCorrectAnswer(false));
			dispatch(setUsersQuizPage(users));
		});
		socket.on('SECONDS', (seconds)=> {
			dispatch(setSecondQuizGame(seconds));
		});
		socket.on('CLOSED_QUESTION', (users)=> {
			dispatch(setUsersQuizPage(users));
		})
	}, []);

	return (
			<>
				{
					isJoined? <RoomQuiz/> : <FormCreateRoom/>
				}
			</>
	);
};

export default Quiz;
