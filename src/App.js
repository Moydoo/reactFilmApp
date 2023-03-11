import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg'


const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=6cc8be83';


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = response.json();
        console.log(data)
        data.then((res) => {
            setMovies(res.Search);
        });
    }

    const searchEnterKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(searchTerm)
        }
    }



    useEffect(() => {
        searchMovies('Harry Potter');
    }, [])
    return (
        <div className="app">
            <h1>React Movies</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={searchEnterKey}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ?
                    (
                        <div className="container">
                            {
                                movies.map((movie) => (
                                    <MovieCard movie={movie} />
                                ))
                            }
                        </div>
                    )
                    :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>

    );
}

export default App;
