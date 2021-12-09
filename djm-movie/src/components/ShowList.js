import React from 'react'
import StarRating from './StarRating';

function ShowList({ shows }) {
    let everyShows = shows.map((show, index) => {
        return (
            < div >
                <img src={show.img_url}></img>
                <StarRating />
                <h3>{show.title}</h3>
            </div>
        )
    })

    return (
        <div>
            <div className='d-flex'>
                <div className="row_poster">
                    <div class="hover-container">
                        {everyShows}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShowList
