import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.css";

function CatCard({ card }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to="/gigs?cat" onClick={scrollToTop}>
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;
