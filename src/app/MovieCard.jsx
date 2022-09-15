import React from "react";
import { useState, useEffect } from 'react';

const PLACEHOLDER = "https://via.placeholder.com/400";
const MovieCard = ({movie}) => {
    return (
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : PLACEHOLDER} alt={movie.Title}/>
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    );
}
export default MovieCard;