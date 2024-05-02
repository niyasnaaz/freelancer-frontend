import React from 'react'
import './Photography.css'
import scene from '../images/scene.mp4'
import cycle from '../images/cycle.mp4'

function Photography() {
  return (
    <>
      <div className='photography'>
        <div className="container">
          <div className="left">
            <h1><span>F R E E L A N C E R </span><b>.</b></h1>
            <h2><b>P</b> h o t o g r a p h y</h2>
            <p>Get the shot you need. Every time.</p>
          </div>
          <div className='btn9'>
            <button>Try It <i class="fa-solid fa-angles-right"></i></button>
          </div>
        </div>
      </div>
      <div className="feed">
        <div className="container">
          <h1>Explore Photography</h1>
          <div className="row">
            <div className="col-4">
              <div class="nft-ph">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={cycle} type="video/mp4" />
                  </video>
                  <h2>Product</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Product Photography</a></li></div>
                      <hr />
                      <div><li><a href="#">Food Photographers</a></li></div>
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
              <div class="nft-ph">
                <div class='main'>
                  <img src="https://cdn.dribbble.com/users/3053661/screenshots/19922636/media/4e0e65deaddfeeb329f93efe8c74bacb.gif" alt="" />
                  <h2>People</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Portrait Photographers</a></li></div>
                      <hr />
                      <div><li><a href="#">Event Photographers</a></li></div>
                      <hr />
                      <div><li><a href="#">Lifestyle & Fashion Photographers</a></li></div>
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
              <div class="nft-ph">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={scene} type="video/mp4" />
                  </video>
                  <h2>Scenes</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Real Estate Photographers</a></li></div>
                      <hr />
                      <div><li><a href="#">Scenic Photographers</a></li></div>
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

export default Photography