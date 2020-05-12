import React from 'react';
import AlbumList from './components/AlbumList'
import AlbumPage from './components/AlbumPage'
import {Route, withRouter} from 'react-router-dom'
import './App.css';
import ScrollToTop from './components/ScrollToTop'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      albums: [],
      loaded: false
    }

    this.toHomePage = this.toHomePage.bind(this)
  }

  toHomePage(){
    this.props.history.push('/')
  }

  async getData() {
    const res = await fetch("/album-data.json");
    const resText = await res.text();
    const albums = await JSON.parse(resText)
    return this.setState({albums, loaded: true});
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        {this.state.loaded ? 
        <div>
          <ScrollToTop/>
          <header>
            <img className='logo-title' alt='lost art records title' src={require('./images/title-logo-lightened.jpg')} onClick={() => this.toHomePage()}/>
            <img className='mic-logo' alt='microphone logo' src={require('./images/mic-logo-lightened.jpg')} onClick={() => this.toHomePage()}/>
          </header>
            <Route exact path='/' render={() => <AlbumList albums={this.state.albums}/>}/>
            <Route path='/claypigeons' render={() => <AlbumPage {...this.state.albums[0]}/>}/>
            <Route path='/muscleshoals' render={() => <AlbumPage {...this.state.albums[1]}/>}/>
            <Route path='/austinouthouse' render={() => <AlbumPage {...this.state.albums[2]}/>}/>
            <Route path='/sittinbytheroad' render={() => <AlbumPage {...this.state.albums[3]}/>}/>
            <Route path='/coldcoldworld' render={() => <AlbumPage {...this.state.albums[4]}/>}/>
            <Route path='/ovalroom' render={() => <AlbumPage {...this.state.albums[5]}/>}/>
            <Route path='/ducttapemessiah' render={() => <AlbumPage {...this.state.albums[6]}/>}/>
            <Route path='/billneely' render={() => <AlbumPage {...this.state.albums[7]}/>}/>
            <Route path='/ducttapedoc' render={() => <AlbumPage {...this.state.albums[8]}/>}/>
          <footer>
            <div className='contact-info'>
              <p>1102 Live Oak Ridge, Austin, Texas 78746</p>
              <p><a href='mailto:music@lostartrecords.com'>music@lostartrecords.com</a></p>
              <p>512-472-9770</p>
            </div>
          </footer>
        </div>
          : ''
        }
      </div>
    );  
  }
}

export default withRouter(App)
