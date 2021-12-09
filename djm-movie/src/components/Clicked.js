import React from 'react'

function Clicked({ clicked }) {
    return (
        <div>
            {console.log(clicked)}
            {clicked.img_url}
            {clicked.title}
            {clicked.genre}
            {clicked.realease_year}
        </div>
    )
}

export default Clicked
