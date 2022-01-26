import React from 'react';
import logo from '../../logo.svg';

function CardMovie() {
    return (
        <div className="card-movie w-50">
            <div className="card-img">
                <img src={logo} alt="" className='w-100'/>
            </div>
            <div className="card-body">
                Dont Look up
            </div>
        </div>
  );
}

export default CardMovie;
