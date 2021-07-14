import React from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";
//* movie app designing

class App extends React.Component {
    state = {
        isLoading: true, // app이 mount될 때(처음) isLoading 상태는 true
        movies: []
        // future state를 선언한 것 뿐, setState를 사용할 때 모든 default값을 선언할 필요는 없음
    }
    getMovies = async () => { // async means 이 get Movies (componentDidMount) 가 완료?되는 데 시간이 걸릴 수 있음을 js에 알려주는 것 조금 기다리라고(await)
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating") //es6
        // https://github.com/serranoarevalo/yts-proxy
        // console.log(movies.data.data.movies)
        console.log(movies)
        this.setState({movies, isLoading: false}) //{movies: movies}를 축약
    }
    componentDidMount() { //! 1. fetch data here (using axios) => getMovies()
        // setTimeout(() => {     this.setState({ isLoading: false}) }, 6000);
        this.getMovies();
    }
    //! 2. render movie(map)
    render() {
        const {isLoading, movies} = this.state
        return (
            <section className="container">
                {
                    isLoading
                        ? (
                            <div className="loader">
                                <span className="loader__text">Loading...</span>
                            </div>
                        )
                        : (
                            <div className="movies">
                                {
                                    movies.map(movie => (
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            title={movie.title}
                                            year={movie.year}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}/>
                                    ))
                                }
                            </div>
                        )
                }
            </section>
        )
    }
}

export default App
