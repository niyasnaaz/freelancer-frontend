
import React from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import preview_vid from "../images/preview_video.mp4";
import concept_video from "../images/concept_video.mp4";
import Banner from "../../components/banner/Banner";
import { Link } from "react-router-dom";

function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src={preview_vid} controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <Link to="/graphics" onClick={scrollToTop}>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                  alt=""
                />
              </Link>
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <Link to={'/digital'} onClick={scrollToTop}>
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                  alt=""
                />
              </Link>
              <div className="line"></div>
              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <Link to={'/writing'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <Link to={'/video'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <Link to={'/music'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <Link to={'/program'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <Link to={'/business'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <Link to={'/lifestyle'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <Link to={'/data'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <Link to={'/photography'} onClick={scrollToTop}>              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              /></Link>
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              <span>F R E E L A N C E R</span>. <i>business</i>
            </h1>
            <h1>A business solution designed for <i>teams</i></h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Freelancer Business</button>
          </div>
          <div className="item">
            <video src={concept_video} controls />
          </div>
        </div>
      </div>
      <div className="banner">
        <Banner />
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;


