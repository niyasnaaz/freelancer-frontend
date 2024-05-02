import React from 'react'
import './Video.css'
import ads from '../images/ads.mp4'
import explainer from '../images/explainer.mp4'
import motion from '../images/motion.mp4'
import ae from '../images/ae.mp4'
import spaceship from '../images/spaceship.mp4'
import product from '../images/product.mp4'

function Video() {
  return (
    <>
      <div className='video'>
        <div className="container">
          <div className="left">
            <h1><span>F R E E L A N C E R </span><b>.</b></h1>
            <h2>V i d e o <b>&</b> A n i m a t i o n</h2>
            <p>Bring your story to life with creative videos.</p>
          </div>
          <div className='btn3'>
            <button>Try It <i class="fa-solid fa-angles-right"></i></button>
          </div>
        </div>
      </div>
      <div className="feed">
        <div className="container">
          <h1>Explore Video & Animation</h1>
          <div className="row">
            <div className="col-4">
              <div class="nft-v">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={ae} type="video/mp4" />
                  </video>
                  <h2>Editing & Post-Production</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Video Editing</a></li></div>
                      <hr />
                      <div><li><a href="#">Visual Effects</a></li></div>
                      <hr />
                      <div><li><a href="#">Video Art</a></li></div>
                      <hr />
                      <div><li><a href="#">Subtitles & Captions</a></li></div>
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
              <div class="nft-v">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={spaceship} type="video/mp4" />
                  </video>
                  <h2>Animation</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Character Animation</a></li></div>
                      <hr />
                      <div><li><a href="#">Animation GIFs</a></li></div>
                      <hr />
                      <div><li><a href="#">Animation For Kids</a></li></div>
                      <hr />
                      <div><li><a href="#">NFT Animation</a></li></div>
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
              <div class="nft-v">
                <div class='main'>
                <video autoPlay loop >
                    <source src={motion} type="video/mp4" />
                  </video>
                  <h2>Motion Graphics</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Logo Animation</a></li></div>
                      <hr />
                      <div><li><a href="#">Lotting & Web Animation</a></li></div>
                      <hr />
                      <div><li><a href="#">Text Animation <span>new</span></a></li></div>
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
              <div class="nft-v">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={ads} type="video/mp4" />
                  </video>
                  <h2>Social & Marketing Videos</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Video Ads & Commercials</a></li></div>
                      <hr />
                      <div><li><a href="#">Social Media Videos</a></li></div>
                      <hr />
                      <div><li><a href="#">Music Videos</a></li></div>
                      <hr />
                      <div><li><a href="#">UGC Videos <span>new</span></a></li></div>
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
              <div class="nft-v">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={explainer} type="video/mp4" />
                  </video>
                  <h2>Explainer Videos</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Animated Explainers</a></li></div>
                      <hr />
                      <div><li><a href="#">live Action Explainers</a></li></div>
                      <hr />
                      <div><li><a href="#">Screencasting Videos</a></li></div>
                      <hr />
                      <div><li><a href="#">Crowdfunding Videos</a></li></div>
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
              <div class="nft-v">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={product} type="video/mp4" />
                  </video>
                  <h2>Product Videos</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">3D Product Animation</a></li></div>
                      <hr />
                      <div><li><a href="#">E-Commerce Product Videos</a></li></div>
                      <hr />
                      <div><li><a href="#">Corporate Videos</a></li></div>
                      <hr />
                      <div><li><a href="#">App & Website Previews</a></li></div>
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

export default Video