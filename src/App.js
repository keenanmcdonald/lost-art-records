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
      'Widespread recognition eluded Blaze during his lifetime. Murdered in an early morning altercation just days following the recording sessions for his Live at the Austin Outhouse release, Blaze was just 39 years old. Two tracks from those sessions appear on this LP. Blaze\'s reputation as a singer-songwriter has exploded in recent years. Lucinda Williams\' "Drunken Angel," and Townes Van Zandt\'s "Blaze\'s Blues," both heartfelt personal tributes to their good friend Foley, have added to a legacy once nearly forgotten.'
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
            <input type="hidden" name="hosted_button_id" value="HT544KCHMQZTU"/>
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
    description: ['Reissue of the first album recorded by the legendary Austin singer-songwriter who was tragically murdered in 1989. Recorded with Muscle Shoals studio musicians in 1984, the album was never distributed due to "some trouble with the law" resulting in the confiscation of most of the 500 copies originally pressed.', 'These recordings find Blaze in a rare studio setting performing ten of his well-known compositions including the apparently timeless resistance song, Oval Room, originally written with Ronald Reagan in mind. The outstanding production values and musicianship breathe fresh air into these classic Blaze compositions. The original recordings have been digitally mastered by Austin engineer Mark Hallman.', '(LAR 1021 & 1021V, EOA2, 2017)'],
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
    <iframe title='muscleshoals-spotify' src="https://open.spotify.com/embed/album/0zBGDWj6N9CvqfhZSTwy27" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    )
  },
  {
    title: 'Live at the Austin Outhouse', 
    artist: 'Blaze Foley', 
    coverFileName: 'austin-outhouse-cover.jpg',
    description: [`Recorded on December 1988 at Blaze’s 'home club,' Live at the Austin Outhouse captures Blaze at his honest best just four weeks before his murder. Originally issued as a cassette in l989, Outhouse is filled with the best of Foley’s songs including “If I Could Only Fly,” which Merle Haggard called “The best country song I’ve heard in 15 years.”`, `(LAR 1015, 1999)`],
    notes: `
      Blaze Foley: Vocals, guitar.
      Ed Bradfield: Harmonica.
      Sarah Elizabeth Campbell: Vocals.
      Lost John Casner: Piano.
      Champ Hood: Fiddle.
      David Waddell: Bass.
    `,
    quote: '',
    purchase: [
      {
        format: 'CD',
        price: '$15.99',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="KHSC722J6FDEN"/>
            <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>        
        )
      },
    ],
    pagePath: '/austinouthouse',
    spotify: (
      <iframe title='austinouthouse-spotify' src="https://open.spotify.com/embed/album/20jfTvbCUwJjOAhPkeIv61" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    ),
  },
  {
    title: 'Sittin\' by the Road', 
    artist: 'Blaze Foley', 
    coverFileName: 'sittin-by-the-road-cover.jpg',
    description: [
      'Captures Blaze Foley on his earliest known recordings. Simple, straightforward and strong, Sittin\' By The Road contains a dozen tracks recorded during Blaze\'s \'treehouse\' days in Georgia. Recorded in the mid-1970s on a home reel-to-reel machine, these songs showcase Blaze\'s talent in early form. Includes many of Foley\'s classic tunes plus three songs that do not appear on previous CDs.',
      '(LAR1020, 2010)'
    ],
    notes: `
      Mastered by Fred Remmert, Cedar Creek
      Recording, Austin, TX. Special thanks to Lew
      Gazaway and Gurf Morlix.
    `,
    quote: '',
    purchase: [
      {
        format: 'CD',
        price: '$15.99',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="W53QAYNSQMJLS"/>
            <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        )
      }
    ],
    pagePath: '/sittinbytheroad',
    spotify: (
      <iframe title='sittinbytheroad-spotify'src="https://open.spotify.com/embed/album/3nyszXBcbHA92HAB5NPsRL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    )
  },
  {
    title: 'Cold Cold World', 
    artist: 'Blaze Foley & The Beaver Valley Boys', 
    coverFileName: 'cold-cold-world-cover.jpg',
    description: [`Captures Blaze Foley and his working band—the Beaver Valley Boys—on their first Texas studio recordings dating from 1979 and 1980. Blaze and the band—anchored by the reknowned Gurf Morlix—are at the top of their form. Cold, Cold World includes 17 Foley songs from his well-known classics to six songs that appear on a Foley recording for the first time. Produced by Gurf Morlix and John Hill. The vinyl LP, released in 2013, contains 13 songs and includes a free album download, plus the four extra songs that were on the original 2006 CD release.`, `(LAR 1019V, 2013 / LAR 1019, 2006)`],
    notes: `
      Blaze Foley: Vocals, guitar, bass.
      Gurf Morlix: Bass, electric guitars, vocals.
      Jimmy Don Smith: Electric guitar.
      Tony Braunagel: Drums.
      John Hill: Drums.
      Riley Osbourn: Piano, slide guitar.
    `,
    quote: '',
    purchase: [
      {
        format: 'Vinyl',
        price: '$20.00',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="WKWCUXVFN4TU6"/>
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
            <input type="hidden" name="hosted_button_id" value="S85PVRV8GWNFE"/>
            <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        )
      }
    ],
    pagePath: '/coldcoldworld',
    spotify: (
      <iframe title='coldcoldworld-spotify' src="https://open.spotify.com/embed/album/34vC7L9NqOPLfqw3xjGGTN" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    ),
  },
  {
    title: 'Oval Room', 
    artist: 'Blaze Foley', 
    coverFileName: 'oval-room-cover.jpg',
    description: [`Recorded just weeks before his tragic death in 1989, Oval Room draws from the same live sessions that were represented on Blaze Foley – Live at the Austin Outhouse, released to critical acclaim in 1999. Live at the Austin Outhouse sparked interest in Foley’s legend and mystique, earning him folk hero status among fans from Austin to Amsterdam. From in-your-face political commentary to heart-touching, sometimes heart-wrenching love songs, these recordings speak to Blaze’s uncompromising artistic vision. Produced by Gurf Morix and John Casner.`, `(LAR 1018, 2004)`],
    notes: `
      Blaze Foley: Vocals, guitar.
      Ed Bradfield: Harmonica.
      Tony DiRoadie: Harmonica.
      Lost John Casner: Piano.
      Champ Hood: Fiddle.
      Pat Mears: Vocals.
      Gurf Morlix: Guitars, bass, vocals.
      John Hill/Leland Waddell: Drums.
      Texana Dames: Vocals.
      `,
    quote: '',
    purchase: [
      {
        format: 'CD',
        price: '$15.99',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="L5C9B5P4ZTZHN"/>
            <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>        
        )
      },
    ],
    pagePath: '/ovalroom',
    spotify: (
      <iframe title='ovalroom-spotify' src="https://open.spotify.com/embed/album/5UklcnwePgX8gDrOMTO4qS" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
    ),
  },
  {
    title: 'Duct Tape Messiah', 
    artist: 'Blaze Foley', 
    coverFileName: 'duct-tape-messiah-cover.jpg',
    description: [`Soundtrack CD from Kevin Triplett's acclaimed documentary film Blaze Foley: Duct Tape Messiah. CD contains 16 tracks that literally span Blaze's musical life. Includes rare archival tracks never before released as well as tracks from posthumously released Blaze albums. This compilation from the film soundtrack is a sparkling gem!`, `To learn more about the documentary film visit: {<a href='www.blazefoleymovie.com'>www.blazefoleymovie.com</a>}.}`, `(LAR 1021, April 2011)`],
    notes: '',
    purchase: [
      {
        format: 'CD',
        price: '$15.99',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="LJ2LFFVJP5WGU"/>
            <input type="image" src="https://www.paypalobjects.com/WEBSCR-640-20110401-1/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/WEBSCR-640-20110401-1/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        )
      }
    ],
    pagePath: '/ducttapemessiah',
    spotify: (
      <iframe title='ducttapemessiah-spotify' src="https://open.spotify.com/embed/album/5fGFITqMvi1G0lQBplF4Ci" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    ),
  },
  {
    title: 'Austin\'s Original Singer Songwriter', 
    artist: 'Bill Neely', 
    coverFileName: 'bill-neely-cover.jpg',
    description: [`Austin is known as the breeding ground for a rich legacy of country and blues singer-songwriters. Bill Neely was Austin’s first. Bill Neely bridged the origins of country blues and the modern Texas singer/songwriter tradition. His talent as a writer and singer of Texas country and blues makes him a true Texas music treasure.`, `(LAR 1016, 2002)`],
    notes: `
      Bill Neely: Vocals, guitar.
      Larry Kirbo: Guitar.
      John Moyer: Bass.
    `,
    quote: '',
    purchase: [
      {
        format: 'CD',
        price: '$15.99',
        link: (
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="WGSW6YCYQ6LEN"/>
            <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>        
        )
      },
    ],
    pagePath: '/billneely',
  },
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
        <Route path='/austinouthouse' render={() => <AlbumPage {...ALBUMS[2]}/>}/>
        <Route path='/sittinbytheroad' render={() => <AlbumPage {...ALBUMS[3]}/>}/>
        <Route path='/coldcoldworld' render={() => <AlbumPage {...ALBUMS[4]}/>}/>
        <Route path='/ovalroom' render={() => <AlbumPage {...ALBUMS[5]}/>}/>
        <Route path='/ducttapemessiah' render={() => <AlbumPage {...ALBUMS[6]}/>}/>
        <Route path='/billneely' render={() => <AlbumPage {...ALBUMS[7]}/>}/>
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
