import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


function DisplayMovieContent({ movies, comments, setComments }) {
    const [leaveComment, setLeaveComent] = useState(false)
    const [formData, setFormData] = useState({
        movie_id: "",
        show_id: "",
        comment: "",
        rating: "",
    })

    const history = useHistory()
    const url = `http://localhost:9292${history.location.pathname}/reviews`

    const handleDelete = (id) => {
        const deleteUrl = `http://localhost:9292/reviews/${id}`
        fetch(deleteUrl, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() =>
                setComments(comments.filter(r => r.id !== id)))
        window.location.reload(false)
    }
    const everyComment = comments.map(item => {
        return (
            <ul>
                <li>{item.comment} <br />movie rating: <strong>{item.rating}</strong> </li>
                {/* <li>{item.rating}</li> */}
                <Button variant="danger" onClick={e => handleDelete(item.id)}>delete</Button>
            </ul>
        )
    })

    const addReview = (newReview) => {
        setComments([...comments, newReview])
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newReview = {
            movie_id: movies.id,
            comment: formData.comment,
            rating: formData.rating,
            id: 0
        }
        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newReview)
        })
            .then(resp => resp.json())
            .then(data => addReview(data))
        setFormData({
            movie_id: "",
            comment: "",
            rating: "",
        })
        window.location.reload(false)
    }


    const handleOnChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleOnClick = () => {
        setLeaveComent(prev => !prev)

    }


    return (
        <div>
            {everyComment}
            <button onClick={handleOnClick}>Leave Comment</button>
            {leaveComment &&
                <form onSubmit={handleSubmit}>
                    {/* <input onChange={handleOnChange} type="text" name="movie_id" placeholder={movies.title} value={movies.id} /> */}
                    <h3>{movies.title}</h3>
                    <input onChange={handleOnChange} type="text" name="comment" placeholder="Comment" value={formData.comment} />
                    <input onChange={handleOnChange} type="text" name="rating" placeholder="rating" value={formData.rating} />
                    <button type="submit">Add Review!</button>
                </form>}
        </div>
    )
}

export default DisplayMovieContent
