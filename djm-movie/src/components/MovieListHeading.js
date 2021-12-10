import React from 'react';
import { Link } from 'react-router-dom';

const MovieListHeading = (props) => {


    const handleClick = () => {
        window.location.reload(false)
    }

    return (
        <div className='col' onClick={handleClick}>
            <Link to="/">
                <h1>{props.heading}</h1>
            </Link>
        </div>
    )
}

export default MovieListHeading;