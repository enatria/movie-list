import React from 'react';
import './index.css';

function CardMovie({movie}) {
    return (
        <div className="card-movie my-4">
            <div className="card-img">
                <img src={movie.Poster} alt="" className='w-100'/>
            </div>
            <div className="card-body">
                <p>{movie.Title}</p>
                <span>{movie.Year}</span>
            </div>
        </div>
  );
}

export default CardMovie;
