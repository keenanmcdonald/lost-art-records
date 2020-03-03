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
    purchase: [
      {
        format: 'Vinyl',
        price: '$18.00',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="ZPQ9L659RZWP8"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        )
      }
    ],
    pagePath: '/claypigeons'
  },
  {
    title: 'The Lost Muscle Shoals Recordings', 
    artist: 'Blaze Foley', 
    coverFileName: 'muscle-shoals-cover.jpg',
    description: ['Reissue of the first album recorded by the legendary Austin singer-songwriter who was tragically murdered in 1989. Recorded with Muscle Shoals studio musicians in 1984, the album was never distributed due to "some trouble with the law" resulting in the confiscation of most of the 500 copies originally pressed. These recordings find Blaze in a rare studio setting performing ten of his well-known compositions including the apparently timeless resistance song, Oval Room, originally written with Ronald Reagan in mind. The outstanding production values and musicianship breathe fresh air into these classic Blaze compositions. The original recordings have been digitally mastered by Austin engineer Mark Hallman.', '(LAR 1021 & 1021V, EOA2, 2017)'],
    notes: 'Recorded in 1984 at Broadway Sound Studio, Sheffield AL. Featuring the Muscle Shoals Horns, Gurf Morlix, Roger Clark, Clayton Ivey, John Willis, Cal Freeman, Ava Aldridge, Cindy Richardson & Lenny LeBlanc. All Songs Written by Blaze Foley © Texas Ghostwriters Music (BMI)',
    quote: '"This album is a treasure. If you\'re a Blaze fan, you must have this album." -Gurf Morlix',
    tracks: [
      'Girl Scout Cookies',
      'Darlin\'',
      'The Way You Smile',
      'Oval Room',
      'Rainbows and Ridges',
      'Picture Cards',
      'Getting Over You',
      'Where Are You Now My Love?',
      'My Reasons Why',
      'Lovin\' You',
      ],
    purchase: [
      {
        format: 'Vinyl', 
        price: '$20.00',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="2LCJ64SQDDQWN"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        )
      },
      {
        format: 'CD',
        price: '$15.99',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="CGBR8D8NF4KZQ"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        )
      }
    ],
    pagePath: '/muscleshoals',
    spotify: (
    <iframe title='muscleshoals-spotify' src="https://open.spotify.com/embed/album/0zBGDWj6N9CvqfhZSTwy27" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    )
  },
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
        <Route path='/muscleshoals' render={() => <AlbumPage {...ALBUMS[1]}/>}/>
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
