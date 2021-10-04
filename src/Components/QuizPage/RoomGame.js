import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendAnswerQuizGame, setCountImagesQuizPage} from "../../Redux/actions";
import Timer from "./Timer";

const RoomGame = () => {
	const currentQuestion = useSelector((state)=>state.quizPageReducer.currentQuestion);
	const currentRoomId = useSelector((state)=>state.quizPageReducer.currentRoomId);
	const countImages = useSelector((state)=>state.quizPageReducer.countImages);
	const isCorrect = useSelector((state)=>state.quizPageReducer.isCorrect);
	const [timer, setTimer] = useState(30);
	const [result, setResult] = useState('');
	const dispatch = useDispatch();

	const onsubmitHandler = (e) => {
		e.preventDefault();
		sendAnswerQuizGame({roomId: currentRoomId, result: result})
		setResult('');
	}
	return (
		<div>
			<Timer seconds={30}/>
			<div className="quiz-images">
				{
					currentQuestion.slice(0, countImages).map((item, index)=>{
						return <div>
							<img key={index} src={item.preview} alt=""/>
						</div>
					})
				}
			</div>
			<div className="input-result">
				{
					!isCorrect? <form onSubmit={onsubmitHandler}>
						<input type="text" value={result} placeholder="Фильм" onChange={(e)=>setResult(e.target.value)}/>
					</form> : <div>Верно!</div>
				}


			</div>
			<div className="show-more-images" onClick={()=>dispatch(setCountImagesQuizPage(countImages+1))}>Еще изображение(меньше очков)</div>
		</div>
	);
};

export default RoomGame;
