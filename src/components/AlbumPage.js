import React from 'react'
import './AlbumPage.css'

function AlbumPage(props) {

    const tracklist = []
    const descriptionParagraphs = []

    for (let i = 0; i < props.tracks.length; i++){
        tracklist.push(<li className='track-title' key={i}>{`${i+1}. ${props.tracks[i]}`}</li> )
    }

    for (let i = 0; i < props.tracks.length; i++){
        descriptionParagraphs.push(<p className='description' key={i}>{props.description[i]}</p> )
    }

    return (
        <main className='album-page'>
            <div className='left-box'>
                <img className='album-page-cover' alt={`album cover`} src={require(`../images/${props.coverFileName}`)}/>
                <div className='tracks-and-notes'>
                    <h3>Track Listing</h3>
                    {tracklist}
                    <p className='notes'>{props.notes}</p>
                    <p>Purchase Vinyl: $18:00</p>
                    {props.purchaseLink}
                </div>
            </div>
            <div className='right-box'>
                <h1 className='artist'>{props.artist}</h1>
                <h2 className='title'>{props.title}</h2>
                {descriptionParagraphs}
                <p className='quote'>{props.quote}</p>
            </div>
        </main>
    )
}


export default AlbumPage