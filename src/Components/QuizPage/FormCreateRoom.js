import React, {useState} from 'react';
import {joinRoomQuizPage, setCreatorQuizPage} from "../../Redux/actions";
import {useDispatch} from "react-redux";

const FormCreateRoom = () => {
	const [usernameJoin, setUsernameJoin] = useState('');
	const [usernameCreate, setUsernameCreate] = useState('');
	const [roomId, setRoomId] = useState('');
	const dispatch = useDispatch();
	const onSubmitJoin = (e) => {
		e.preventDefault();
		dispatch(joinRoomQuizPage({roomId: roomId, username: usernameJoin}));
	}
	const onSubmitCreate = (e) => {
		e.preventDefault();
		dispatch(setCreatorQuizPage(true));
		dispatch(joinRoomQuizPage({roomId: String (Math.round(1001 - 0.5 + Math.random() * (9999 - 1001 + 1))), username: usernameCreate}));
	}
	return (
		<div className="forms-quiz">
			<form className="form-quiz form-quiz_create" onSubmit={onSubmitCreate}>
				<h2>Создать игру</h2>
				<input type="text" value={usernameCreate} placeholder="Имя игрока" onChange={(e)=>setUsernameCreate(e.target.value)}/>
				<button onClick={onSubmitCreate}>Создать</button>
			</form>
			<form className="form-quiz form-quiz_join" onSubmit={onSubmitJoin}>
				<h2>Вступить в игру</h2>
				<input type="text" value={roomId} placeholder="ID комнаты" onChange={(e)=>setRoomId(e.target.value)}/>
				<input type="text" value={usernameJoin} placeholder="Имя игрока" onChange={(e)=>setUsernameJoin(e.target.value)}/>
				<button onClick={onSubmitJoin}>Вступить</button>
			</form>
		</div>

	);
};

export default FormCreateRoom;
