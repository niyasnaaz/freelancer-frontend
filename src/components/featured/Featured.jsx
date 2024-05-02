import React, { useEffect, useState } from "react";
import "./Featured.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


  function Featured() {
    const [input, setInput] = useState("");
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const navigate = useNavigate();
  
    // Array of background images
    const backgroundImages = [
      "https://cdn.dribbble.com/users/2060878/screenshots/17154287/media/b79810c349443539e5fd75f81da921c3.jpg?resize=1000x500&vertical=center",
      "https://cdn.dribbble.com/userupload/13126540/file/original-5d068438ecf0fa91fc028a55c3d9f6e1.jpg?resize=1000x500",
      "https://cdn.dribbble.com/userupload/12283904/file/original-1343cf5fc2d88d1dd62f0e4fed562301.png?resize=900x400",
      "https://cdn.dribbble.com/users/4643902/screenshots/20166311/media/769c84904387cfc96d1392df72797ed0.jpg?resize=1000x500&center",
      "https://cdn.dribbble.com/users/4643902/screenshots/17512468/media/86adf3bb2aa002d47ca395caaecfc7ed.jpg?resize=900x400&center",
      "https://cdn.dribbble.com/userupload/9402352/file/original-ae58dd61c1c18f88c938af607ab94cc1.png?resize=1000x500",
      "https://cdn.dribbble.com/userupload/7375291/file/original-f1456f5ce7fe6a55997d04aa8c3cd4a1.jpg?resize=900x400",
      "https://cdn.dribbble.com/users/5276550/screenshots/17833531/media/bd3aa2e181e90c40cc6393a0302e36cd.jpg?resize=800x400&vertical=center"
    ];
  
    useEffect(() => {
      // Change background image every 5 seconds
      const interval = setInterval(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [backgroundImages.length]);
  
    const handleSubmit = () => {
      navigate(`/gigs?search=${input}`);
    };
  return (
    <div className="featured" style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}>
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span><br /> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <input
                type="text"
                placeholder='Search for Any Services..'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: "25px" }} /></button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
