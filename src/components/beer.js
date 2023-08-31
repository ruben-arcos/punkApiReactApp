// import React from "react";
import React, { useState } from "react";
import "../App.css";
// eslint-disable-next-line
import Heart from "react-animated-heart";

export default function Beer(props) {
  console.log(props);

  const [isLiked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const toggleLike = () => {
    setLiked((prevIsLiked) => !prevIsLiked);
    setLikesCount((prevLikesCount) => (isLiked ? prevLikesCount - 1 : prevLikesCount + 1));
  };


  // child component
  return (
    <li className="beerInfo">
      <img
        className="beerImg"
        src={props.beer.image_url}
        alt={props.beer.name}
      />
      <h3 className="beerName">{props.beer.name}</h3>
      <p className="description">{props.beer.description}</p>
      <Heart isClick={isLiked} onClick={toggleLike} />
      <p>Likes: {likesCount}</p>
    </li>
  );
}
