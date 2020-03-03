import React from 'react'
import './AlbumPage.css'

function AlbumPage(props) {

    const tracklist = []
    const descriptionParagraphs = []
    const purchaseLinks = []

    for (let i = 0; i < props.tracks.length; i++){
        tracklist.push(<li className='track-title' key={i}>{`${i+1}. ${props.tracks[i]}`}</li> )
    }

    for (let i = 0; i < props.tracks.length; i++){
        descriptionParagraphs.push(<p className='description' key={i}>{props.description[i]}</p> )
    }

    for (let i = 0; i < props.purchase.length; i++){
        purchaseLinks.push(
            <div className='purchase-link'>
                <p>{`${props.purchase[i].format}: ${props.purchase[i].price}`}</p>
                {props.purchase[i].link}
            </div>
        )
    }
    return (
        <main className='album-page'>
            <div className='left-box'>
                <img className='album-page-cover' alt={`album cover`} src={require(`../images/${props.coverFileName}`)}/>
                <div className='listen-and-purchase'>
                    {props.spotify ? <h3>Listen on Spotify</h3> : ''}
                    {props.spotify ? props.spotify : ''}
                    <h3>Purchase</h3>
                    {purchaseLinks}
                </div>
            </div>
            <div className='right-box'>
                <h1 className='artist'>{props.artist}</h1>
                <h2 className='title'>{props.title}</h2>
                {descriptionParagraphs}
                <p className='quote'>{props.quote}</p>
                <p className='notes'>{props.notes}</p>
            </div>
        </main>
    )
}


export default AlbumPage