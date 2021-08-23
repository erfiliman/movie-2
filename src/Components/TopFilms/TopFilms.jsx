import React, {useEffect, useState} from 'react';
import MovieRow from "../MovieRow/MovieRow";
import {useDispatch, useSelector} from "react-redux";
import {setTopPageFilms} from "../../Redux/actions";

const TopFilms = (props) => {
    const dispatch = useDispatch();
    const topLoad = useSelector((state)=>state.topPage.topLoad);
    const topFilms = useSelector((state)=>state.topPage.topFilms);

    useEffect(() => {
        dispatch(setTopPageFilms());
    }, [])
    return (
        <div className="popular-films-container scroll">
            {
                topLoad ?
                    <div className="main-load">
                        <div className="loading-icon"></div>
                    </div> :
                    topFilms.map((item, index) => {
                        return <MovieRow key={index} rating={item.rating} id={item.filmId} year={item.year} poster={item.posterUrl} name={item.nameEn == null || item.nameEn === null? item.nameRu: props.lang=="ru"? item.nameRu: item.nameEn}/>
                    })
            }

        </div>
    );
};

export default TopFilms;
