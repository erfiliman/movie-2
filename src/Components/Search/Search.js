import React, {Component, useState, useContext, useRef, useEffect} from 'react';
import PreviewSearchItem from "./PreviewSearchItem/PreviewSearchItem";
import {Link, NavLink, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
	hidePreviewLoadingSearchByName, hideSearchByNameResult, setSearchByNameResult,
	setSearchInputValueSearchByName,
	showPreviewLoadingSearchByName, showSearchByNameResult
} from "../../Redux/actions";

const Search = (props) => {
	const dispatch = useDispatch();
	const inputValue = useSelector((state => state.search.inputValue));
	const previewLoading = useSelector((state => state.search.previewLoading));
	const resultShow = useSelector((state => state.search.resultShow));
	const searchResult = useSelector((state => state.search.results));
	const [showExtend, setshowExtend] = useState(false);
	const searchInput = useRef(null);



	useEffect(()=> {
		setshowExtend(props.location.pathname.replace("/","") == "search");
	},[props.location.pathname])

	useEffect(()=>{
		dispatch(showPreviewLoadingSearchByName());
		let timeoutChange = setTimeout(()=>{
			dispatch(setSearchByNameResult(inputValue));
		}, 500);
		return ()=> {
			clearTimeout(timeoutChange);
		}
	},[inputValue])

	const changeSearchHandler = (e) => {
		e.preventDefault();
		dispatch(setSearchInputValueSearchByName(e.target.value));
	}

	const resetInput = () => {
		dispatch(hideSearchByNameResult())
		searchInput.current.value = "";
		dispatch(setSearchInputValueSearchByName(''));

	}

	const onBlurHandler = (e) => {
		// if (!e.currentTarget.contains(e.relatedTarget)) {
		// 	dispatch(hideSearchByNameResult())
		// }
	}

	return (
		<div className={"search-wrap"} onBlur={onBlurHandler}>
			<form onSubmit={(e)=>e.preventDefault()} className="header-search">
				<div className="search-container-input">
					<input
						type="text"
						value={inputValue}
						onChange={changeSearchHandler}
						placeholder="Search"
						ref={searchInput}
						onFocus={()=> dispatch(showSearchByNameResult())}
					/>
					<NavLink to="/search" activeClassName="search-extend-active">
						<div className="search-extended"></div>
					</NavLink>
				</div>
			</form>
			{resultShow&&!previewLoading ?
				searchResult.length ?
					<div className="result-holder" >
						{searchResult.slice(0, 6).map(item => {
							return <PreviewSearchItem onclick={resetInput} key={`peview-search-item-${item.filmId}`} id={item.filmId} year={item.year} poster={item.posterUrlPreview} genres={item.genres} name={item.nameRu != null? item.nameRu: item.nameEn} rating={item.rating} />
						})}
					</div>:
					inputValue!=""&&<div className="result-holder">
						<h6 className="result-search-empty-results">Ничего не найдено</h6>
					</div> :
				resultShow && <div className="result-holder">
					<div className="loading-icon"></div>
				</div>}

		</div>
	)
}

export default withRouter(Search);