import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.css";
import no_avatar from '../img/noavatar.jpg'


function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);


  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/" onClick={scrollToTop}>
            <span className="text">F R E E L A N C E R</span>
          </Link>
          <span className="dot"> .</span>
        </div>
        <div className="links">
          <span>Freelance Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || no_avatar} alt="" />

              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs" onClick={scrollToTop}>
                        Gigs
                      </Link>
                      <Link className="link" to="/add" onClick={scrollToTop}>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders" onClick={scrollToTop}>
                    Orders
                  </Link>
                  <Link className="link" to="/messages" onClick={scrollToTop}>
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link" >Sign in</Link>
              <Link className="link" to="/register" onClick={scrollToTop}>
                <a className="btn">JOIN</a>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/graphics" onClick={scrollToTop}>
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/video" onClick={scrollToTop}>
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/writing" onClick={scrollToTop}>
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/data" onClick={scrollToTop}>
              Data
            </Link>
            <Link className="link menuLink" to="/digital" onClick={scrollToTop}>
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/music" onClick={scrollToTop}>
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/program" onClick={scrollToTop}>
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/business" onClick={scrollToTop}>
              Business
            </Link>
            <Link className="link menuLink" to="/lifestyle" onClick={scrollToTop}>
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
