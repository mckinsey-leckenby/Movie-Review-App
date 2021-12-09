import React from 'react'
import ShowsCard from './ShowsCard';
import StarRating from './StarRating';

function ShowList({ shows }) {
    const everyShows = shows.map((show) => {
        return <ShowsCard shows={show} />
    })


    return (
        <>
            <div className="row_poster">
                {everyShows}
            </div>
        </>
    )
}


export default ShowList
