import React from 'react'
import {withRouter} from 'react-router-dom'


function AlbumIcon(props) {

    function routeToAlbumPage(){
        props.history.push(props.pagePath)
    }

    return (
        <div onClick={() => routeToAlbumPage()} className='album-icon'>
            <img className='album-cover' src={require(`../images/${props.coverFileName}`)} alt={props.title} />
        </div>
    )
}


export default withRouter(AlbumIcon)