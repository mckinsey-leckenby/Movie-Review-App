import React from 'react';


const MovieListHeading = (props) => {
    const logo = 'https://media.giphy.com/media/1fvCpwHdikcmxYbx94/giphy.gif'

    return (
    <>
        <div className="DJM-logo">
            <img src={logo} alt="logo" className="logo" />
        </div>
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    </>
    )
}

export default MovieListHeading;