import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";

const QuizPage = (props) => {
	const [isLoad, setIsLoad] = useState(true);
	const [image, setImage] = useState([]);
	const [title, setTitle] = useState("");

	useEffect(()=>{
		let year = Math.round(2007 - 0.5 + Math.random() * (2021 - 2007 + 1));
		let page = Math.round(1 - 0.5 + Math.random() * (5));
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?country=&order=NUM_VOTE&type=FILM&ratingTo=10&yearFrom=${year}&yearTo=${year}&page=${page}`,
			{
				headers: {
					"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
				}
			})
			.then((response) => response.json())
			.then(responseJson => {
				let film = responseJson.films.sort(() => Math.random() - 0.5)[0];
				let idFilm = film.filmId;
				console.log(film.nameRu);
				setTitle(responseJson.films.sort(() => Math.random() - 0.5)[0].nameRu);
					fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${idFilm}/frames
`,
						{
							headers: {
								"X-API-KEY": "5f27c47d-dec6-431d-9a46-be06e0f76b58"
							}
						})
						.then((response) => response.json())
						.then(responseJson => {
							console.log(responseJson);
							setImage(responseJson.frames.sort(() => Math.random() - 0.5));
							setIsLoad(false);
						})

			})
	},[props])
	return (
		<div>
			{
				isLoad?
					<div className="main-load">
						<div className="loading-icon"></div>
					</div>:
					<div className="quiz-image">
						{
							image.slice(0, 3).map((item, index)=>{
								return <img key={index} src={item.image} alt=""/>
							})
						}
					</div>
			}
		</div>
	);
};

export default withRouter(QuizPage);
