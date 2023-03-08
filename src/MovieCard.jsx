import React from "react";

const MovieCard = ({movieName}) => {
    return (
        <div className="movie">
            <div>
                <p>{movieName.Year}</p>
            </div>
            <div>
                <img src={movieName.Poster !== 'N/A' ? movieName.Poster : 'https://via.placeholder.com/400'} alt={movieName.Title} />
            </div>
            <div>
                <span>{movieName.Type}</span>
                <h3>{movieName.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard