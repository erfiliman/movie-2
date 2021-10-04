import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import RoomGame from "./RoomGame";
import {setStartGameQuizPage} from "../../Redux/actions";

const RoomQuiz = () => {
	const currentRoomId = useSelector((state)=>state.quizPageReducer.currentRoomId);
	const username = useSelector((state)=>state.quizPageReducer.username);
	const isStart = useSelector((state)=>state.quizPageReducer.isStarted);
	const isCreator = useSelector((state)=>state.quizPageReducer.isCreator);
	const currentUsers = useSelector((state)=>state.quizPageReducer.currentUsers);
	const dispatch = useDispatch();
	const onClickHandler = ()=>{
		dispatch(setStartGameQuizPage({isStart: true, roomId: currentRoomId}));
	}
	return (
		<div className="room-quiz">
			<div className="room-game">
				<div className="room-question"></div>
				{!isStart&&isCreator? <div className="room-start-game" onClick={onClickHandler}>Старт</div> : <RoomGame/>}

			</div>
			<div className="room-quiz-sidebar">
				<div className="room-quiz-id">Комната: 	{currentRoomId}</div>
				<div className="quiz-leaderboard">
					{
						currentUsers.map((item, index)=>{
							return <div className="quiz-leaderboard__item">
								<div className="quiz-leaderboard-name">{index + 1 + ". " + item.username}</div>
								<div className="quiz-leaderboard-points">{item.points}</div>
							</div>
						})
					}
				</div>
			</div>
		</div>
	);
};

export default RoomQuiz;
