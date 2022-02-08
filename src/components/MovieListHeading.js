import React from 'react';
import { Link } from 'react-router-dom'

const MovieListHeading = (props) => {
    const logo = 'https://media.giphy.com/media/1fvCpwHdikcmxYbx94/giphy.gif'

    const handleClick = () => {
        window.location.reload(false)
    }

    return (
        <>
            <div className="DJM-logo" onClick={handleClick}>
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>
            <div className='col' onClick={handleClick}>
                <Link to="/">
                    <h1>{props.heading}</h1>
                </Link>
            </div>
        </>
    )
}

export default MovieListHeading;