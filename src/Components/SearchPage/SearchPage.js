import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import {useDispatch, useSelector} from "react-redux";
import FiltersId from "./FiltersId";
import {
	loadNextPageSearchPage,
	setCountriesSearchPage, setCurrentPageSearchPage,
	setGenresSearchPage, setOrderSearchPage, setRatingSearchPage, setReleaseDateSearchPage,
	setResultRandomSearchPage, setShowFilterSearchPage, setTypeSearchPage
} from "../../Redux/actions";
import MultiFilter from "../MultiFilter/MultiFilter";
import MultiRangeFilter from "../MultiRangeFilter/MultiRangeFilter";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const SearchPage = (props) => {
	const dispatch = useDispatch();
	const genres = useSelector((state => state.searchPage.genres));
	const loading = useSelector((state => state.searchPage.isLoad));
	const moreLoading = useSelector((state => state.searchPage.moreLoading));
	const showFilters = useSelector((state => state.searchPage.showFilters));
	const pagesCount = useSelector((state => state.searchPage.pagesCount));
	const currentPage = useSelector((state => state.searchPage.currentPage));
	const countries = useSelector((state => state.searchPage.countries));
	const result = useSelector((state => state.searchPage.result));
	const typeSearch = useSelector((state => state.searchPage.typeSearch));
	const orderSearch = useSelector((state => state.searchPage.orderSearch));
	const rating = useSelector((state => state.searchPage.rating));
	const releaseDate = useSelector((state => state.searchPage.releaseDate));
	const typeOrderSearch = useSelector((state => state.searchPage.typeOrderSearch));
	const typeDropDown = useSelector((state => state.searchPage.typeDropDown));

	const Filters = FiltersId();

	const onRandomHandler = () =>{
		dispatch(setResultRandomSearchPage(countries, genres, typeSearch, rating, releaseDate));
	}

	const onSearchHandler = () =>{
		dispatch(setResultRandomSearchPage(countries, genres, typeSearch, rating, releaseDate, currentPage));
	}

	useEffect(()=>{
		dispatch(loadNextPageSearchPage(result, countries, genres, typeSearch, rating, releaseDate, orderSearch, currentPage))
	},[currentPage])

	useEffect(()=>{
		dispatch(setResultRandomSearchPage(countries, genres, typeSearch, rating, releaseDate, currentPage));
	},[genres.length, countries.length, rating.from, rating.to, releaseDate.from, releaseDate.to])


	return (
		<div className={!showFilters? "search-page-grid search-page-grid_closed": "search-page-grid"}>
			<div className="search-filters-container">

				<div className="search-filters-multi-container">
					<MultiFilter filters={Filters.genres} title="Genres" setState={(val)=> dispatch(setGenresSearchPage(val))}/>
					<MultiFilter filters={Filters.countries} title="Countries" setState={(val)=> dispatch(setCountriesSearchPage(val))}/>
				</div>
				<div className="search-page-multi-range">
					<MultiRangeFilter start="0" end="10" step="1" title="Рейтинг" setState={(val)=> dispatch(setRatingSearchPage(val))}/>
					<MultiRangeFilter start="1950" end="2021" step="1" title="Год выпуска" setState={(val)=> dispatch(setReleaseDateSearchPage(val))}/>
				</div>
				<div className="search-page-multi-range">
					<div>
						<div className="search-page-label">Тип</div>
						<DropDownMenu data={typeDropDown} state={typeSearch} setState={(val)=> dispatch(setTypeSearchPage(val))}/>
					</div>
					<div>
						<div className="search-page-label">Сортировать</div>
						<DropDownMenu data={typeOrderSearch} state={orderSearch} setState={(val)=> dispatch(setOrderSearchPage(val))}/>
					</div>
				</div>
				<div className="search-page-random-films" onClick={onRandomHandler}></div>
				<div className="close-btn-filters" onClick={()=> dispatch(setShowFilterSearchPage(!showFilters))}></div>
			</div>
			<div className="search-page-result-container">
				<div className="search-result-information"></div>
				<div className='search-results-wrapper'>
					<div className="search-results">
						{loading ? <div className="main-load">
							<div className="loading-icon"></div>
						</div> : result.map((item, index) => {
							return <MovieItem key={"film-search-"+ item.filmId + index} id={item.filmId} year={item.year}
											  poster={item.posterUrlPreview} genres={item.genres}
											  name={item.nameRu}
											  rating={item.rating}/>
						})}
						{pagesCount!=0 &&pagesCount>currentPage && <div className={`btn-show-more ${moreLoading && "btn-show-more_loading"}`} onClick={()=>{ dispatch(setCurrentPageSearchPage(currentPage+1))}}><span>Больше</span></div>}
					</div>
				</div>

			</div>
		</div>
	);
};

export default withRouter(SearchPage);
