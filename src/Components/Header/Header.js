import React, {Component} from 'react';
import Search from "../Search/Search";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import {useDispatch, useSelector} from "react-redux";
import {setShowMobileMenu} from "../../Redux/actions";

const Header = () => {
	const { height, width } = useWindowDimensions();
	const showMobileMenu = useSelector(state => state.app.showMobileMenu);
	const dispatch = useDispatch();
	const toggleMobileMenuHandler = (e) => {
		dispatch(setShowMobileMenu(!showMobileMenu));
	}
	return (
		<div className="header">
			{
				width<=700&&<div className={`mobile-btn-toggle-sidebar`} onClick={toggleMobileMenuHandler}/>
			}
			<Search/>
		</div>
	);
}

export default Header;