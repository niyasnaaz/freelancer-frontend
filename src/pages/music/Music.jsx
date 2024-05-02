import React from 'react'
import './Music.css'
import mixing from '../images/Mixing.mp4'
import streaming from '../images/streaming.mp4'


function Music() {
  return (
    <>
    <div className='music'>
        <div className="container">
            <div className="left">
                <h1><span>F R E E L A N C E R </span><b>.</b></h1>
                <h2>M u s i c <b>&</b> A u d i o</h2>
                <p>Don't miss a beat. Bring your sound to life.</p>
            </div>
            <div className='btn4'>
                <button>Try It <i class="fa-solid fa-angles-right"></i></button>
            </div>
        </div>
    </div>
    <div className="feed">
        <div className="container">
            <h1>Explore Music & Audio</h1>
            <div className="row">
                <div className="col-4">
                    <div class="nft-m">
                        <div class='main'>
                          <img src="https://cdn.dribbble.com/users/19049/screenshots/1757999/media/93c4b6b9c6fa80b2bd655f6ff3bb8f68.gif" alt="" />
                            <h2>Music Production & Writing</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Music producers</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Composers</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Songwriters</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Custom Songs <span>new</span></a></li></div>
                                    <hr />
                                </ul>
                            </div>
                            <div class='tokenInfo'>
                                <div class="duration">
                                    <ins>◷</ins>
                                    <p>Updated 1 min ago</p>
                                </div>
                            </div>
                            <div class='creator'>
                                <div class='wrapper'>
                                    <p><span>F R E E L A N C E R </span><b>.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="nft-m">
                        <div class='main'>
                            <video autoPlay loop muted>
                                <source src={streaming} type="video/mp4" />
                            </video>
                            <h2>Voice Over & Streaming</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Voice Over</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Podcast Production</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Audiobook Production</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Voice Synthesis & AI <span>new</span></a></li></div>
                                    <hr />
                                </ul>
                            </div>
                            <div class='tokenInfo'>
                                <div class="duration">
                                    <ins>◷</ins>
                                    <p>Updated 2 min ago</p>
                                </div>
                            </div>
                            <div class='creator'>
                                <div class='wrapper'>
                                    <p><span>F R E E L A N C E R </span><b>.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="nft-m">
                        <div class='main'>
                        <video autoPlay loop muted>
                                <source src={mixing} type="video/mp4" />
                            </video>
                            <h2>Sound Design</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Sound Design</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Custom Patches & Samples</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Meditation Music</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Mixing & Mastering</a></li></div>
                                    <hr />
                                </ul>
                            </div>
                            <div class='tokenInfo'>
                                <div class="duration">
                                    <ins>◷</ins>
                                    <p>Updated 2 days ago</p>
                                </div>
                            </div>
                            <div class='creator'>
                                <div class='wrapper'>
                                    <p><span>F R E E L A N C E R </span><b>.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
</>
  )
}

export default Music