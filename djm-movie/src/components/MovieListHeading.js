import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieListHeading = (props) => {
    const history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div className='col' onClick={handleClick}>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeading;