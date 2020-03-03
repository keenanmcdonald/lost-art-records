import React from 'react';
import AlbumList from './components/AlbumList'
import AlbumPage from './components/AlbumPage'
import {Route, withRouter} from 'react-router-dom'
import './App.css';

const ALBUMS = [
  {
    title: 'Clay Pigeons', 
    artist: 'Blaze Foley', 
    coverFileName: 'clay-pigeons-cover.jpg', 
    description: [
      'Reissue of the 2011 vinyl-only collection of 12 Blaze tracks released by Secret Seven Records. Compiled from home, studio and intimate live recordings between 1976 - 1988, this \'Best of Blaze\' sampler features Blaze\'s renditions of songs since covered by Merle Haggard, Willie Nelson, Lyle Lovett and John Prine. Culled from posthumous CDs released by Lost Art Records and Fat Possum, Clay Pigeons\' 2011 release marked the first available vinyl LP from one of Texas\' most unique and soulful singer-songwriters.',
      'Widespread recognition eluded Blaze during his lifetime. Murdered in an early morning altercation just days following the recording sessions for his Live at the Austin Outhouse release, Blaze was just 39 years old. Two tracks from those sessions appear on this LP. Blaze\'s reputation as a singer-songwriter has exploded in recent years. Lucinda Williams\' \"Drunken Angel,\" and Townes Van Zandt\'s \"Blaze\'s Blues,\" both heartfelt personal tributes to their good friend Foley, have added to a legacy once nearly forgotten.'
    ],
    notes: 'Musicians: Blaze Foley, Gurf Morlix, Jimmy Don Smith, Tony Braunagel, John Hill, Riley Osbourn, Ed Bradfield, Sarah Elizabeth Campbell, Lost John Casner, Champ Hood, David Waddell.',
    quote: `"Blaze is one of the most spiritual cats I’ve ever met; an ace finger picker; a writer who never shirks the truth and never fails to rhyme," – Townes Van Zandt.`,
    tracks: [
      'Clay Pigeons',
      'You’ll Get Yours Aplenty',
      'Election Day',
      'Lovin\' You',
      'For Anything Less',
      'Oval Room',
      'Down Here Where I Am',
      'Moonlight',
      'Rainbows And Ridges',
      'My Reasons Why',
      'If I Could Only Fly',
    ],
    purchaseLink: (
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="ZPQ9L659RZWP8"/>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>
    ),
    pagePath: '/claypigeons'
  },
  {title: 'The Lost Muscle Shoals Recordings', artist: 'Blaze Foley', coverFileName: 'muscle-shoals-cover.jpg'},
  {title: 'Duct Tape Messiah', artist: 'Blaze Foley', coverFileName: 'duct-tape-messiah-cover.jpg'},
  {title: 'Sitting by the Road', artist: 'Blaze Foley', coverFileName: 'sitting-by-the-road-cover.jpg'},
  {title: 'Cold Cold World', artist: 'Blaze Foley', coverFileName: 'cold-cold-world-cover.jpg'},
  {title: 'Oval Room', artist: 'Blaze Foley', coverFileName: 'oval-room-cover.jpg'},
  {title: 'Live at the Austin Outhouse', artist: 'Blaze Foley', coverFileName: 'austin-outhouse-cover.jpg'},
  {title: 'Austin\'s Original Singer-Songwriter', artist: 'Bill Neely', coverFileName: 'bill-neely-cover.jpg'},
]


function App(props) {
  function toHomePage(){
    props.history.push('/')
  }

  return (
    <div className="App">
      <header>
        <img className='logo-title' alt='logo-title' src={require('./images/title-logo.jpg')} onClick={() => toHomePage()}/>
      </header>
        <Route exact path='/' render={() => <AlbumList albums={ALBUMS}/>}/>
        <Route path='/claypigeons' render={() => <AlbumPage {...ALBUMS[0]}/>}/>
      <footer>
        <h2>Contact</h2>
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
