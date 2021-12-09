import React from 'react'
import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import DisplayShowContent from "./DisplayShowContent";
import { useHistory } from 'react-router-dom';



function ShowsCard({ shows }) {
    const [showContent, setShowContent] = useState([])
    const [comments, setComments] = useState(shows.reviews)
    const [click, setClick] = useState(false)

    const history = useHistory()

    let url = `http://localhost:9292/shows/${shows.id}`
    const handleClick = () => {
        history.push(`/shows/${shows.id}`)
        setShowContent(shows)
        setClick(prev => !prev)
    }

    useEffect(() => {
        fetch(url).then(resp => resp.json()).then((data) => setShowContent(data));
    }, [])

    return (
        <div>
            <div className="card">
                <img src={shows.img_url} alt={shows.title}></img>
                <StarRating />
                <h1>{shows.title}</h1>
                <button variant="secondary" onClick={() => handleClick()}>Show Review</button>
            </div>
            {click && <DisplayShowContent shows={showContent} comments={comments} setComments={setComments} />}
        </div>
    )
}

export default ShowsCard
