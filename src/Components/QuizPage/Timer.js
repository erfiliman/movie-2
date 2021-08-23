import React from 'react'
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSecondQuizGame} from "../../Redux/actions";

const Timer = (props) => {
	const seconds = useSelector((state)=>state.quizPageReducer.seconds);

	return (
		<div>
			{seconds}
		</div>
	)
}

export default Timer;