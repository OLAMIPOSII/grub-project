import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For A Better Experience Download <br /> GRUB App.
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="PLAY STORE BANNER" />
        <img src={assets.app_store} alt="APP STORE BANNER" />
      </div>
    </div>
  );
};

export default AppDownload;
