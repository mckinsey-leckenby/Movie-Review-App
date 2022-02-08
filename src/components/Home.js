import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

function Home() {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);

    const movies_url = "http://localhost:9292/movies";
    const shows_url = "http://localhost:9292/shows";

    useEffect(() => {
        fetch(movies_url).then(r => r.json()).then(setMovies)
        fetch(shows_url).then(r => r.json()).then(setShows)
    }, []);

    const history = useHistory()
    // history.push(`/movies`)

    let movieList = movies.map(movie => {
        return (
            <div className='d-flex'>
                <div className="row_poster">
                    <div class="hover-container">
                        <img src={movie.img_url} alt='movie' onClick={() => history.push("/movies")}></img>
                    </div>
                </div>
            </div>
        )
    })
    let showList = shows.map(show => {
        return (
            <div className='d-flex'>
                <div className="row_poster">
                    <div class="hover-container">
                        <img src={show.img_url} alt='movie' onClick={() => history.push("/shows")}></img>
                        {/* <StarRating /> */}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="row_poster">
                {movieList}
            </div>
            <div className="row_poster">
                {showList}
            </div>
        </>
    )
}

export default Home
