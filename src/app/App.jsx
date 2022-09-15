import { useState, useEffect } from 'react';

import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'


const API_URL = "https://www.omdbapi.com?apikey=c736e666";
const movie1 = {
    "Title": "Thor: Ragnarok",
    "Year": "2017",
    "imdbID": "tt3501632",
    "Type": "movie",
    "Poster": "N/A" // "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
};
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search);
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('wang');
    }, [])
    return (
        <div className="app">
            <h1>MovieBase</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img 
                    src={SearchIcon}
                    alt="Search"
                    onClick={() =>{searchMovies(searchTerm)}}
                />
            </div>
            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie)=>{
                            return <MovieCard movie={movie} />
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movie found.</h2>
                    </div>
                )
            }
        </div>
    );
}
export default App; 