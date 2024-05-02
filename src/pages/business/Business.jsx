import React from 'react'
import './Business.css'
import accounts from '../images/accounts.mp4'
import tax from '../images/tax.mp4'
import card from '../images/DCS.mp4'

function Business() {
  return (
    <>
      <div className='business'>
        <div className="container">
          <div className="left">
            <h1><span>F R E E L A N C E R </span><b>.</b></h1>
            <h2><b>B</b> u s i n e s s</h2>
            <p>Take your business to the next level.</p>
          </div>
          <div className='btn6'>
            <button>Try It <i class="fa-solid fa-angles-right"></i></button>
          </div>
        </div>
      </div>
      <div className="feed">
        <div className="container">
          <h1>Explore Business</h1>
          <div className="row">
            <div className="col-4">
              <div class="nft-b">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={accounts} type="video/mp4" />
                  </video>
                  <h2>Accounting & Finance</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Accounting & Bookkeeping</a></li></div>
                      <hr />
                      <div><li><a href="#">Tax Consulting</a></li></div>
                      <hr />
                      <div><li><a href="#">Financial Forecasting & Modeling</a></li></div>
                      <hr />
                      <div><li><a href="#">Financial Consulting</a></li></div>
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
              <div class="nft-b">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={card} type="video/mp4" />
                  </video>
                  <h2>Sales & Customer Care</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Sales</a></li></div>
                      <hr />
                      <div><li><a href="#">Lead Generation</a></li></div>
                      <hr />
                      <div><li><a href="#">Call Center & Calling</a></li></div>
                      <hr />
                      <div><li><a href="#">Customer Care</a></li></div>
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
              <div class="nft-b">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={tax} type="video/mp4" />
                  </video>                  
                  <h2>Legal Services</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Application & Registration</a></li></div>
                      <hr />
                      <div><li><a href="#">Legal Documents & Contracts</a></li></div>
                      <hr />
                      <div><li><a href="#">Legal Review <span>new</span></a></li></div>
                      <hr />
                      <div><li><a href="#">Legal Consulting</a></li></div>
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

export default Business