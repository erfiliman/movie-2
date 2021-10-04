import React, {useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setThemeDark, setThemeLight} from "../../Redux/actions";


const ChooseTheme = () => {
	const dispatch = useDispatch();
	const isDarkTheme = useSelector((state => {
		return state.app.themeDark;
	}))
	const onClickHandler = (e) => {
		if (e.target.checked) dispatch(setThemeDark())
		else dispatch(setThemeLight());
	}
	return (
		<div className="choose-theme">
			<label className="switch">
				<input type="checkbox" checked={isDarkTheme} onChange={onClickHandler}/>
				<span className="slider round"> </span>
			</label>
		</div>
	);
};

export default ChooseTheme;
