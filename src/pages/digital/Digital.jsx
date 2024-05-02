import React from 'react'
import './Digital.css'
import seo from '../images/seo.mp4'
import social from '../images/social.mp4'
import marketing from '../images/Marketing.mp4'
import analytics from '../images/analytics.mp4'
import music_vid from '../images/headphones.mp4'
import final from '../images/final.mp4'

function Digital() {
  return (
    <>
            <div className='digital'>
                <div className="container">
                    <div className="left">
                        <h1><span>F R E E L A N C E R </span><b>.</b></h1>
                        <h2><b>D</b> i g i t a l <b> M </b> a r k e t i n g</h2>
                        <p>Build your brand. Grow your business.</p>
                    </div>
                    <div className='btn1'>
                        <button>Try It <i class="fa-solid fa-angles-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="feed">
                <div className="container">
                    <h1>Explore Digital Marketing</h1>
                    <div className="row">
                        <div className="col-4">
                            <div class="nft-d">
                                <div class='main'>
                                    <video autoPlay loop >
                                        <source src={seo} type="video/mp4" />
                                    </video>
                                    <h2>Search</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Search Engine Optimization (SEO)</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Search Engine Marketing (SEM)</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Local SEO</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Video SEO</a></li></div>
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
                            <div class="nft-d">
                                <div class='main'>
                                    <video autoPlay loop muted>
                                        <source src={social} type="video/mp4" />
                                    </video>
                                    <h2>Social</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Social Media Marketing</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Paid Social Media</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Influencer Marketing</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Community Management</a></li></div>
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
                            <div class="nft-d">
                                <div class='main'>
                                <video autoPlay loop muted>
                                        <source src={marketing} type="video/mp4" />
                                    </video>
                                    <h2>Methods & Techniques</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Video Marketing</a></li></div>
                                            <hr />
                                            <div><li><a href="#">E-Commerce Marketing <span>new</span></a></li></div>
                                            <hr />
                                            <div><li><a href="#">E-mail Marketing <span>new</span></a></li></div>
                                            <hr />
                                            <div><li><a href="#">Display Advertising</a></li></div>
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
                            <div class="nft-d">
                                <div class='main'>
                                    <video autoPlay loop >
                                        <source src={analytics} type="video/mp4" />
                                    </video>
                                    <h2>Analytics & Strategy</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Marketing Strategy</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Marketing Advice</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Web Analytics</a></li></div>
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
                            <div class="nft-d">
                                <div class='main'>
                                    <video autoPlay loop muted>
                                        <source src={music_vid} type="video/mp4" />
                                    </video>
                                    <h2>Industry & Purpose-Specific</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Music Promotion</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Podcast Marketing</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Book & eBook Marketing</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Mobile App Marketing</a></li></div>
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
                            <div class="nft-d">
                                <div class='main'>
                                    <video autoPlay loop >
                                        <source src={final} type="video/mp4" />
                                    </video>
                                    <h2>Miscellaneous</h2>
                                    <div className='list'>
                                        <ul>
                                            <div><li><a href="#">Crowd Funding</a></li></div>
                                            <hr />
                                            <div><li><a href="#">Other</a></li></div>
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

export default Digital