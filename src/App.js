import {Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import RandomMovies from "./Components/RandomMovies/RandomMovies";
import MoviePage from "./Components/MoviePage/MoviePage";
import PopularFilms from "./Components/PopularFilms/PopularFilms";
import TopFilms from "./Components/TopFilms/TopFilms";
import SearchPage from "./Components/SearchPage/SearchPage";
import Quiz from "./Components/QuizPage/Quiz";

function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state)=>{
    return state.app.themeDark;
  });
  const language = useSelector((state)=>{
    return state.app.language;
  });

  return (
      <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
        <div className="container">
          <div className="content">
              <Sidebar />
              <div className="main-content">
                  <Header/>
                  <Route path="/" exact>
                      <RandomMovies language={language}/>
                  </Route>
                  <Route path="/movie/:movieId">
                      <MoviePage lang={language} key={new Date()}/>
                  </Route>
                  <Route path="/popular/">
                      <PopularFilms lang={language}/>
                  </Route>
                  <Route path="/top/">
                      <TopFilms lang={language}/>
                  </Route>
                  <Route path="/search/:request?">
                      <SearchPage/>
                  </Route>
                  <Route path="/quiz">
                      <Quiz/>
                  </Route>
              </div>

          </div>
        </div>
      </div>
  );
}

export default App;
