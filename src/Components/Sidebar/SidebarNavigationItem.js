import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setShowMobileMenu} from "../../Redux/actions";
const SidebarNavigationItem = (props) => {
	const dispatch = useDispatch();
	const isRandomLoading = useSelector(state => {
		return state.randomMovies.isLoadingRandomMovies;
	});
	let timeoutHandler;
	const [isAnimation, setIsAnimation] = useState(false);

	useEffect(()=>{
		if(isRandomLoading) {
			setIsAnimation(true);
			setTimeout(()=> {
				setIsAnimation(false);
			}, 600)
		}
	},[isRandomLoading])

	return (
		<NavLink activeClassName='sidebar-navlink-active' exact={true} to={`/${props.link}`} onClick={()=>dispatch(setShowMobileMenu(false))} className={`sidebar-navigation-item ${props.cssClass} ${isAnimation? "sidebar-navigation-item_animation":""}`} >
			<div className={`navlink-content`} >
				<span>{props.name}</span>
			</div>
			<div className="navlink-rect"> </div>
			<div className="upper-circle"> </div>
			<div className="bottom-circle"> </div>
		</NavLink>
	);
};

export default withRouter(SidebarNavigationItem);
