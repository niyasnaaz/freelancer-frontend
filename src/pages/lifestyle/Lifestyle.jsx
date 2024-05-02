import React from 'react'
import './Lifestyle.css'
import dress from '../images/dress.mp4'
import gym from '../images/gym.mp4'
import travel from '../images/travel.mp4'


function Lifestyle() {
  return (
    <>
      <div className='lifestyle'>
        <div className="container">
          <div className="left">
            <h1><span>F R E E L A N C E R </span><b>.</b></h1>
            <h2><b>L</b> i f e s t y l e</h2>
            <p>Your life. Your style. Find the balance.</p>
          </div>
          <div className='btn7'>
            <button>Try It <i class="fa-solid fa-angles-right"></i></button>
          </div>
        </div>
      </div>
      <div className="feed">
        <div className="container">
          <h1>Explore Lifestyle</h1>
          <div className="row">
            <div className="col-4">
              <div class="nft-l">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={dress} type="video/mp4" />
                  </video>
                  <h2>Fashion & Style</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Modeling</a></li></div>
                      <hr />
                      <div><li><a href="#">Styling</a></li></div>
                      <hr />
                      <div><li><a href="#">Acting</a></li></div>
                      <hr />
                      <div><li><a href="#">Beauty</a></li></div>
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
              <div class="nft-l">
                <div class='main'>
                <video autoPlay loop >
                    <source src={gym} type="video/mp4" />
                  </video>
                  <h2>Wellness & Fitness</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Fitness Lessons</a></li></div>
                      <hr />
                      <div><li><a href="#">Workout Plans</a></li></div>
                      <hr />
                      <div><li><a href="#">Meal Plans</a></li></div>
                      <hr />
                      <div><li><a href="#">Nutrition Coaching</a></li></div>
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
              <div class="nft-l">
                <div class='main'>
                <video autoPlay loop >
                    <source src={travel} type="video/mp4" />
                  </video>                  
                  <h2>Leisure & Hobbies</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Arts & Crafts</a></li></div>
                      <hr />
                      <div><li><a href="#">Travelling</a></li></div>
                      <hr />
                      <div><li><a href="#">Collectibles</a></li></div>
                      <hr />
                      <div><li><a href="#">Astrology & Psychics</a></li></div>
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

export default Lifestyle