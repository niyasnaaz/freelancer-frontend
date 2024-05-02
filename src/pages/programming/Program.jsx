import React from 'react'
import './Program.css'
import cyber from '../images/cyber.mp4'
import website from '../images/website.mp4'
import app_development from '../images/app_development.mp4'
import software_development from '../images/software_development.mp4'
import app from '../images/app.mp4'
import platform from '../images/platform.mp4'

function Program() {
  return (
    <>
      <div className='program'>
        <div className="container">
          <div className="left">
            <h1><span>F R E E L A N C E R </span><b>.</b></h1>
            <h2>P r o g r a m m i n g <b>&</b> T e c h</h2>
            <p>You think it. A programmer develops it.</p>
          </div>
          <div className='btn5'>
            <button>Try It <i class="fa-solid fa-angles-right"></i></button>
          </div>
        </div>
      </div>
      <div className="feed">
        <div className="container">
          <h1>Explore Programming & Tech</h1>
          <div className="row">
            <div className="col-4">
              <div class="nft-p">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={website} type="video/mp4" />
                  </video>
                  <h2>Websites</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Weebsite Development <span>new</span></a></li></div>
                      <hr />
                      <div><li><a href="#">Weebsite Maintenance</a></li></div>
                      <hr />
                      <div><li><a href="#">WordPress</a></li></div>
                      <hr />
                      <div><li><a href="#">Shopify</a></li></div>
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
              <div class="nft-p">
                <div class='main'>
                  <video autoPlay loop muted>
                    <source src={app_development} type="video/mp4" />
                  </video>
                  <h2>Application Development</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Web Applications</a></li></div>
                      <hr />
                      <div><li><a href="#">Game Development</a></li></div>
                      <hr />
                      <div><li><a href="#">Chatbot Development</a></li></div>
                      <hr />
                      <div><li><a href="#">Browser Extensions</a></li></div>
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
              <div class="nft-p">
                <div class='main'>
                <video autoPlay loop >
                    <source src={software_development} type="video/mp4" />
                  </video>
                  <h2>Software Development</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Software Development</a></li></div>
                      <hr />
                      <div><li><a href="#">AI Development</a></li></div>
                      <hr />
                      <div><li><a href="#">API & Integrations</a></li></div>
                      <hr />
                      <div><li><a href="#">Scripting</a></li></div>
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
              <div class="nft-p">
                <div class='main'>
                  <video autoPlay loop muted >
                    <source src={app} type="video/mp4" />
                  </video>
                  <h2>Mobile Apps</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Mobile App Development</a></li></div>
                      <hr />
                      <div><li><a href="#">Android App Development</a></li></div>
                      <hr />
                      <div><li><a href="#">IOS App Development</a></li></div>
                      <hr />
                      <div><li><a href="#">Cross-Platform Apps</a></li></div>
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
              <div class="nft-p">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={platform} type="video/mp4" />
                  </video>
                  <h2>Website Platforms</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Wix</a></li></div>
                      <hr />
                      <div><li><a href="#">Webflow</a></li></div>
                      <hr />
                      <div><li><a href="#">GoDaddy</a></li></div>
                      <hr />
                      <div><li><a href="#">WooCommerce</a></li></div>
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
              <div class="nft-p">
                <div class='main'>
                  <video autoPlay loop >
                    <source src={cyber} type="video/mp4" />
                  </video>
                  <h2>Support & Cybersecurity</h2>
                  <div className='list'>
                    <ul>
                      <div><li><a href="#">Support & IT</a></li></div>
                      <hr />
                      <div><li><a href="#">Cloud Computing</a></li></div>
                      <hr />
                      <div><li><a href="#">DevOps Engineering <span>new</span></a></li></div>
                      <hr />
                      <div><li><a href="#">Cyber Security</a></li></div>
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

export default Program