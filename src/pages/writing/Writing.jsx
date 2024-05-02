import React from 'react'
import './Writing.css'
import book from '../images/books.mp4'
import trans from '../images/trans.mp4'
import business from '../images/business.mp4'
import linkedin from '../images/linkedin.mp4'


function Writing() {
  return (
    <>
    <div className='writing'>
        <div className="container">
            <div className="left">
                <h1><span>F R E E L A N C E R </span><b>.</b></h1>
                <h2>W r i t i n g <b>&</b> T r a n s l a t i o n</h2>
                <p>Get your words across—in any language.</p>
            </div>
            <div className='btn2'>
                <button>Try It <i class="fa-solid fa-angles-right"></i></button>
            </div>
        </div>
    </div>
    <div className="feed">
        <div className="container">
            <h1>Explore Writing & Translation</h1>
            <div className="row">
                <div className="col-4">
                    <div class="nft-w">
                        <div class='main'>
                            <img src="https://cdn.dribbble.com/users/13119129/screenshots/19408912/media/cfb16ededda5546d058fa948587162c8.gif" alt="" />
                            <h2>Content Writing</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Website Content</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Scriptwriting</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Articles & Blogs</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Creative Writing</a></li></div>
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
                    <div class="nft-w">
                        <div class='main'>
                            <img src="https://cdn.dribbble.com/users/13191912/screenshots/19490172/media/5599840117d4f43923a00bcc3c13e114.gif" alt="" />
                            <h2>Editing</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Proofreading & Editing</a></li></div>
                                    <hr />
                                    <div><li><a href="#">AI Content Editing</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Writing Advice</a></li></div>
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
                    <div class="nft-w">
                        <div class='main'>
                        <video autoPlay loop muted>
                                <source src={book} type="video/mp4" />
                            </video>
                            <h2>Book & eBook Publishing</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Book & eBook Writing</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Book Editing</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Beta Reading</a></li></div>
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
                    <div class="nft-w">
                        <div class='main'>
                            <video autoPlay loop >
                                <source src={trans} type="video/mp4" />
                            </video>
                            <h2>Translation & Transcription</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Translation</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Localization </a><span>new</span></li></div>
                                    <hr />
                                    <div><li><a href="#">Transcription</a></li></div>
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
                    <div class="nft-w">
                        <div class='main'>
                            <video autoPlay loop muted>
                                <source src={business} type="video/mp4" />
                            </video>
                            <h2>Business & Marketing Copy</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">UX Writing</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Ad Copy</a></li></div>
                                    <hr />
                                    <div><li><a href="#">E-mail Copy</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Case Studies</a></li></div>
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
                    <div class="nft-w">
                        <div class='main'>
                            <video autoPlay loop >
                                <source src={linkedin} type="video/mp4" />
                            </video>
                            <h2>Career Writing</h2>
                            <div className='list'>
                                <ul>
                                    <div><li><a href="#">Resume Writing</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Cover Letters</a></li></div>
                                    <hr />
                                    <div><li><a href="#">LLinkedin Profiles</a></li></div>
                                    <hr />
                                    <div><li><a href="#">Job Descriptions</a></li></div>
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

export default Writing