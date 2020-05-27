import React from 'react'
import AlbumIcon from './AlbumIcon'

function AlbumList(props) {
    const albumIcons = []

    for (let i = 0; i < props.albums.length; i++){
        albumIcons.push(<AlbumIcon key={i} coverFileName={props.albums[i].coverFileName} title={props.albums[i].title} artist={props.albums[i].artist} pagePath={props.albums[i].pagePath}/>)
        //albumIcons.push(<div className='album-icon standin'/>)
    }

    return (
        <main className='album-list'>
            {albumIcons}
        </main>
    )
}


export default AlbumList