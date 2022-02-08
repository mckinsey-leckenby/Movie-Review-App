import React from 'react'
import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import DisplayMovieContent from "./DisplayMovieContent";
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


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
            <Card className="mb-2" style={{ width: '35rem', height: "70em", margin: ".25rem" }} bg='dark'>
                <Card.Img variant="top" src={movies.img_url} alt={movies.title} />
                <StarRating />
                <Card.Body className="Card-body" >
                    <h1 className="h1Center"><strong>{movies.title}</strong></h1>

                    <Card.Subtitle>
                        <h6>Genre: <strong>{movies.genre}</strong></h6>
                        <h6>Release year: <strong>{movies.release_year}</strong></h6>
                    </Card.Subtitle>
                    <Card.Text>{movies.desc}</Card.Text>
                    <Button variant="info" onClick={() => handleClick()}>Show Review</Button>
                </Card.Body>
            </Card>
            {/* <div className="card">
                <img src={movies.img_url} alt={movies.title}></img>
                <StarRating />
                <h1>{movies.title}</h1>
                <button variant="secondary" onClick={() => handleClick()}>Show Review</button>
            </div>*/
            }
            {click && <DisplayMovieContent shows={showContent} comments={comments} setComments={setComments} />}
        </div>
    )
}

export default MovieCard
