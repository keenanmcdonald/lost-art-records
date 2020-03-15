import React from 'react'
import './AlbumPage.css'

function AlbumPage(props) {

    const descriptionParagraphs = []
    const purchaseLinks = []

    /*
        const tracklist = []

    for (let i = 0; i < props.tracks.length; i++){
        tracklist.push(<li className='track-title' key={i}>{`${i+1}. ${props.tracks[i]}`}</li> )
    }*/

    for (let i = 0; i < props.description.length; i++){
        descriptionParagraphs.push(<p className='description' key={i}>{props.description[i]}</p> )
    }

    for (let i = 0; i < props.purchase.length; i++){
        purchaseLinks.push(
            <div key={i} className='purchase-link'>
                <p>{`${props.purchase[i].format}: ${props.purchase[i].price}`}</p>
                {props.purchase[i].link}
            </div>
        )
    }
    return (
        <main className='album-page'>
            <div className='album-cover-container center-content'>
                <img className='album-page-cover' alt={`album cover`} src={require(`../images/${props.coverFileName}`)}/>
            </div>
            <div className='title-container'>
                <h1 className='artist'>{props.artist}</h1>
                <h2 className='title'>{props.title}</h2>
            </div> 
            <div className='description-container wide'>
                {descriptionParagraphs}
            </div>
            <div className='quote-container wide center-content'>
                <p className='quote'>{props.quote}</p>
            </div>
            <div className='notes-container wide'>
                <p className='notes'>{props.notes}</p>
            </div>
            <div className='spotify-container center-content'>
                {props.spotify ? <h3>Listen on Spotify</h3> : ''}
                {props.spotify ? props.spotify : ''}
            </div>
            <div className='purchase-container center-content'>
                <h3>Purchase</h3>
                {purchaseLinks}
            </div>
        </main>
    )
}


export default AlbumPage