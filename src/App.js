import React from 'react';
import AlbumList from './components/AlbumList'
import AlbumPage from './components/AlbumPage'
import {Route, withRouter} from 'react-router-dom'
import './App.css';
import ScrollToTop from './components/ScrollToTop'
import ALBUMS from './album-data'

function App(props) {
  function toHomePage(){
    props.history.push('/')
  }

  return (
    <div className="App">
      <ScrollToTop/>
      <header>
        <img className='logo-title' alt='lost art records title' src={require('./images/title-logo-lightened.jpg')} onClick={() => toHomePage()}/>
        <img className='mic-logo' alt='microphone logo' src={require('./images/mic-logo-lightened.jpg')} onClick={() => toHomePage()}/>
      </header>
        <Route exact path='/' render={() => <AlbumList albums={ALBUMS}/>}/>
        <Route path='/claypigeons' render={() => <AlbumPage {...ALBUMS[0]}/>}/>
        <Route path='/muscleshoals' render={() => <AlbumPage {...ALBUMS[1]}/>}/>
        <Route path='/austinouthouse' render={() => <AlbumPage {...ALBUMS[2]}/>}/>
        <Route path='/sittinbytheroad' render={() => <AlbumPage {...ALBUMS[3]}/>}/>
        <Route path='/coldcoldworld' render={() => <AlbumPage {...ALBUMS[4]}/>}/>
        <Route path='/ovalroom' render={() => <AlbumPage {...ALBUMS[5]}/>}/>
        <Route path='/ducttapemessiah' render={() => <AlbumPage {...ALBUMS[6]}/>}/>
        <Route path='/billneely' render={() => <AlbumPage {...ALBUMS[7]}/>}/>
        <Route path='/ducttapedoc' render={() => <AlbumPage {...ALBUMS[8]}/>}/>
      <footer>
        <div className='contact-info'>
          <p>1102 Live Oak Ridge, Austin, Texas 78746</p>
          <p><a href='mailto:music@lostartrecords.com'>music@lostartrecords.com</a></p>
          <p>512-472-9770</p>
        </div>
      </footer>
    </div>
  );
}

export default withRouter(App);
