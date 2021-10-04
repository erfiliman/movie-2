import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import SidebarNavigationItem from "./SidebarNavigationItem";
import {setActiveNavItem} from "../../Redux/actions";

const SidebarNavigation = (props) => {
	const dispatch = useDispatch();
	const links = useSelector((state)=>{
		return state.nav.navItems;
	})


	return (
		<div className="sidebar-navigation">
			{
				links.map((item,index)=> <SidebarNavigationItem key={index} link={item.link} cssClass={item.cssClass}  name={item.nameRu}/>)
			}
		</div>
	);
};

export default SidebarNavigation;
