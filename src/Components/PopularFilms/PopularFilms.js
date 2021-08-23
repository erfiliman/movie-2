import React, {useEffect, useState} from 'react';
import MovieRow from "../MovieRow/MovieRow";
import {useDispatch, useSelector} from "react-redux";
import {setPopularPageFilms} from "../../Redux/actions";

const PopularFilms = (props) => {
    const dispatch = useDispatch();
    const popularLoad = useSelector((state)=>state.popularPage.popularLoad);
    const popularFilms = useSelector((state)=>state.popularPage.popularFilms);

    useEffect(() => {
        dispatch(setPopularPageFilms());

    }, [])
    return (
        <div className="popular-films-container scroll">
            {
                popularLoad ?
                    <div className="main-load">
                        <div className="loading-icon"></div>
                    </div> :
                    popularFilms.map((item, index) => {
                        return <MovieRow key={index} rating={item.rating} id={item.filmId} year={item.year} poster={item.posterUrl} name={item.nameEn == null || item.nameEn === null? item.nameRu: props.lang=="ru"? item.nameRu: item.nameEn}/>
                    })
            }

        </div>
    );
};

export default PopularFilms;
