import React from 'react'
import {withRouter} from 'react-router-dom'


function AlbumIcon(props) {

    function routeToAlbumPage(){
        props.history.push(props.pagePath)
    }

    return (
        <div onClick={() => routeToAlbumPage()} className='album-icon'>
            <img className='album-cover' src={require(`../images/${props.coverFileName}`)} alt={props.title} />
            <h3 className='artist'>{props.artist}</h3>
            <h3 className='album-title'>{props.title}</h3>
        </div>
    )
}


export default withRouter(AlbumIcon)