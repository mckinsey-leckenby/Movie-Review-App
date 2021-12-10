import React from 'react'
import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import DisplayShowContent from "./DisplayShowContent";
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



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
            <Card className="mb-2" style={{ width: '35rem', height: "65rem", margin: ".25rem" }} bg='dark'>
                <Card.Img variant="top" src={shows.img_url} alt={shows.title} />
                <Card.Body className="Card-body">
                    <h1 className="h1Center"><strong>{shows.title}</strong></h1>

                    <Card.Subtitle>
                        <h6>Genre: <strong>{shows.genre}</strong></h6>
                        <h6>Release year: <strong>{shows.release_year}</strong></h6>
                        <ul>
                            <li>Seasons: <strong>{shows.total_season}</strong></li>
                            <li>Total Episodes: <strong>{shows.total_episode}</strong></li>
                        </ul>
                    </Card.Subtitle>
                    <Card.Text>{shows.desc}</Card.Text>
                    <Button variant="info" onClick={() => handleClick()}>Show Review</Button>
                </Card.Body>
            </Card>
            {/* <div className="card">
                <StarRating />
                <h3>Genre: {shows.genre}</h3>
                <p>{shows.desc}</p>
                <button variant="secondary" onClick={() => handleClick()}>Show Review</button>
            </div> */}
            {click && <DisplayShowContent shows={showContent} comments={comments} setComments={setComments} />}
        </div>
    )
}

export default ShowsCard
