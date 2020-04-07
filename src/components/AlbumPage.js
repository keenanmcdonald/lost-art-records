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
            <div className='album-cover-container'>
                <img className='album-page-cover' alt={`album cover`} src={props.albumPageCoverFileName ? require(`../images/${props.albumPageCoverFileName}`) : require(`../images/${props.coverFileName}`)}/>
            </div>
            <div className='title-container'>
                <h1 className='artist'>{props.artist}</h1>
                <h2 className='title'>{props.title}</h2>
                {props.tag ? <p className='tag'>{props.tag}</p> : ''}
            </div> 
            <div className='description-container wide'>
                {descriptionParagraphs}
            </div>
            <div className='quote-container wide center-content'>
                {props.quote ? <p className='quote'>{props.quote}</p> : ''}
            </div>
            <div className='notes-container wide'>
                {props.notes ? <p className='notes'>{props.notes}</p> : ''}
            </div>
            {props.spotify ? (
                <div className='spotify-container center-content'>
                    <h3>Listen on Spotify</h3>
                    {props.spotify}
                </div>
            ) : ''}
            <div className='purchase-container center-content'>
                <h3>Purchase</h3>
                {purchaseLinks}
            </div>
            {props.video ? (
                <div className='video-container'>
                    {props.video ? props.video : ''}
                </div>
            ) : ''}

        </main>
    )
}
export default AlbumPage