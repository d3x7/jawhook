import React from "react";
import "./Header.css";
import backgroundVideo from "../assets/videos/backgroundVideo.mp4";

const Header = () => {
  return (
    <div>
      <div className="title">
        <h1 className="">
          <span className="jaw">Jaw</span> <span className="hook">Hook</span>
        </h1>
        <p>Приватный чит на Warface</p>
      </div>
      <div className="backgroundVideo">
        <video src={backgroundVideo} autoPlay loop muted className="video" />
      </div>
    </div>
  );
};

export default Header;
