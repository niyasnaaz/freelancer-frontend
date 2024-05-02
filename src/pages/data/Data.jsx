import React from 'react'
import './Data.css'
import ml from '../images/ml.mp4'
import data_col from '../images/data_col.mp4'
import dashboard from '../images/dashboard.mp4'

function Data() {
  return (
    <>
      <div className='data'>
        <div className="container">
          <div className="left">
            <h1><span>F R E E L A N C E R </span><b>.</b></h1>
            <h2><b>D</b> a t a</h2>
            <p>Analyze and grow with data-powered insights.</p>
          </div>
          <div className='btn8'>
            <button>Try It <i class="fa-solid fa-angles-right"></i></button>
          </div>
        </div>
      </div>
      <div className="feed">
        <div className="container">
          <h1>Explore Data</h1>
          <div className="row">
            <div className="col-4">
              <div class="nft-dd">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={ml} type="video/mp4" />
                  </video>
                  <h2>Data Science & ML</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Data Science & ML</a></li></div>
                      <hr />
                      <div><li><a href="#">Machine Learning <span>new</span></a></li></div>
                      <hr />
                      <div><li><a href="#">Deep Learning</a></li></div>
                      <hr />
                      <div><li><a href="#">Computer Vision</a></li></div>
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
              <div class="nft-dd">
                <div class='main'>
                <video autoPlay loop >
                    <source src={data_col} type="video/mp4" />
                  </video>
                  <h2>Data Collection</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Data Entry</a></li></div>
                      <hr />
                      <div><li><a href="#">Data Typing</a></li></div>
                      <hr />
                      <div><li><a href="#">Data Formatting</a></li></div>
                      <hr />
                      <div><li><a href="#">Data Cleaning</a></li></div>
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
              <div class="nft-dd">
                <div class='main'>
                <video autoPlay loop >
                    <source src={dashboard} type="video/mp4" />
                  </video>                  
                  <h2>Data Analysis</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Data Visualization</a></li></div>
                      <hr />
                      <div><li><a href="#">Data Annotation</a></li></div>
                      <hr />
                      <div><li><a href="#">Data Analytics</a></li></div>
                      <hr />
                      <div><li><a href="#">Dashboards</a></li></div>
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

export default Data