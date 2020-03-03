import React from 'react'
import './AlbumPage.css'

function AlbumPage(props) {

    const tracklist = []

    for (let i = 0; i < props.tracks.length; i++){
        tracklist.push(<li className='track-title' key={i}>{`${i+1}. ${props.tracks[i]}`}</li> )
    }

    return (
        <main className='album-page'>
            <img className='album-cover' alt={`album cover`} src={require(`../images/${props.coverFileName}`)}/>
            <h1 className='artist'>{props.artist}</h1>
            <h2 className='title'>{props.title}</h2>
            <p>{props.description}</p>
            {tracklist}
            <p>Purchase Vinyl: $18:00</p>
            {props.purchaseLink}
        </main>
    )
}


export default AlbumPage