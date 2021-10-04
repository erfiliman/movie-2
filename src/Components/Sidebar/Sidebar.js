import React, {useState} from 'react';
import Logo from "../../img/logo-movie.png";
import {Link} from "react-router-dom";
import SidebarNavigation from "./SidebarNavigation";
import ChooseTheme from "../ChooseTheme/ChooseTheme";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import {useDispatch, useSelector} from "react-redux";
import {setShowMobileMenu} from "../../Redux/actions";

const SideBar = () => {
	const showMobileMenu = useSelector(state => state.app.showMobileMenu);
	const dispatch = useDispatch();
	return (
		<div className={`sidebar-container`} onClick={()=>dispatch(setShowMobileMenu(false))}>
			<div className={`sidebar ${!showMobileMenu?"sidebar_hidden" :""}`}>
				<Link to="/">
					<div className="sidebar-logo">
						<img src={Logo} alt=""/>
					</div>
				</Link>
				<SidebarNavigation/>
				<ChooseTheme/>
			</div>
		</div>
	);
};

export default SideBar;
