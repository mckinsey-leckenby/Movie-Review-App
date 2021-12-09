import React from 'react'
import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import DisplayMovieContent from "./DisplayMovieContent";
import { useHistory } from 'react-router-dom';



function MovieCard({ movies }) {
    const [showContent, setShowContent] = useState([])
    const [comments, setComments] = useState(movies.reviews)
    const [click, setClick] = useState(false)

    const history = useHistory()

    let url = `http://localhost:9292/movies/${movies.id}`
    const handleClick = () => {
        history.push(`/movies/${movies.id}`)
        setShowContent(movies)
        setClick(prev => !prev)
    }

    useEffect(() => {
        fetch(url).then(resp => resp.json()).then((data) => setShowContent(data));
    }, [])

    return (
        <div>
            <div className="card">
                <img src={movies.img_url} alt={movies.title}></img>
                <StarRating />
                <h1>{movies.title}</h1>
                <button variant="secondary" onClick={() => handleClick()}>Show Review</button>
            </div>
            {click && <DisplayMovieContent movies={showContent} comments={comments} setComments={setComments} />}
        </div>
    )
}

export default MovieCard
