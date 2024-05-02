import React from 'react'
import './Graphics.css'
import vid_edit from '../images/vid-ed.mp4'
import logo_maker from '../images/logo_maker.mp4'
import game_vid from '../images/game.mp4'
import threed_vid from '../images/3D.mp4'
import webpage from '../images/webpage.mp4'

function Graphics() {
    return (
        <>
            <div className='graphics'>
                <div className="container">
                    <div className="left">
                        <h1><span>F R E E L A N C E R </span><b>.</b></h1>
                        <h2>G r a p h i c s <b>&</b> D e s i g n</h2>
                        <p>Designs to make you stand out.</p>
                    </div>
                    <div className='btn'>
                        <button>Try It <i class="fa-solid fa-angles-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="feed">
                <div className="container">
                    <h1>Explore Graphics & Design</h1>
                    <div className="row">
                        <div className="col-4">
                            <div class="nft">
                                <div class='main'>
                                    <video autoPlay loop >
                                        <source src={logo_maker} type="video/mp4" />
                                    </video>
                                    <h2>Logo & Brand Identity</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Logo Design</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Brand Style Guides</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Business Cards & Stationary</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Font & Typography</a></li></div>
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
                            <div class="nft">
                                <div class='main'>
                                    <video autoPlay loop muted>
                                        <source src={webpage} type="video/mp4" />
                                    </video>
                                    <h2>Web & App Design</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Website Design</a></li></div>
                                            <hr />
                                            <div><li><a href="#">App Design</a></li></div>
                                            <hr />
                                            <div><li><a href="#">UI/UX Design</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Landing Page Design</a></li></div>
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
                            <div class="nft">
                                <div class='main'>
                                    <img class='tokenImage' src="https://cdn.dribbble.com/users/1755056/screenshots/16733272/media/b7ea750a90c5f11e0e9304c95d309bf1.gif" alt="NFT" />
                                    <h2>Art & Illustration</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Illustration</a></li></div>
                                            <hr />
                                            <div><li><a href="#">AI Artist <span>new</span></a></li></div>
                                            <hr />
                                            <div><li><a href="#">AI Avatar Design <span>new</span></a></li></div>
                                            <hr />
                                            <div><li><a href="#">Font & Typography</a></li></div>
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

                    <div className="row">
                        <div className="col-4">
                            <div class="nft">
                                <div class='main'>
                                    <video autoPlay loop >
                                        <source src={vid_edit} type="video/mp4" />
                                    </video>
                                    <h2>Visual Design</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Image Editing</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Presentation Design</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Infographic Design</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Resume Design</a></li></div>
                                            <hr />
                                        </ul>
                                    </div>
                                    <div class='tokenInfo'>
                                        <div class="duration">
                                            <ins>◷</ins>
                                            <p>Updated 2 weeks ago</p>
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
                            <div class="nft">
                                <div class='main'>
                                    <video autoPlay loop >
                                        <source src={game_vid} type="video/mp4" />
                                    </video>
                                    <h2>Gaming</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Character Modeling</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Game Art</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Graphics For Streamers</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Twitch Store</a></li></div>
                                            <hr />
                                        </ul>
                                    </div>
                                    <div class='tokenInfo'>
                                        <div class="duration">
                                            <ins>◷</ins>
                                            <p>Updated 4 weeks ago</p>
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
                            <div class="nft">
                                <div class='main'>
                                    <video autoPlay loop >
                                        <source src={threed_vid} type="video/mp4" />
                                    </video>
                                    <h2>3D Design</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">3D Architecture</a></li></div>
                                            <hr />
                                            <div><li><a href="#">3D Landscape</a></li></div>
                                            <hr />
                                            <div><li><a href="#">3D Industrial Design</a></li></div>
                                            <hr />
                                            <div><li><a href="#">3D Fashion & Garments</a></li></div>
                                            <hr />
                                        </ul>
                                    </div>
                                    <div class='tokenInfo'>
                                        <div class="duration">
                                            <ins>◷</ins>
                                            <p>Updated 1 month ago</p>
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

export default Graphics