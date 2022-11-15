import React from "react";

import "../../styles/UI/VideoPlayer.scss";

export default function VideoPlayer({ src, text }) {
    return (
        <div className="video-container" key={src}>
            <video autoPlay muted loop className="video">
                <source src={src} type="video/mp4"/>
            </video>
            <div className="video-text">{text}</div>
            <button className="video-button">
                <div className="button-svg">
                    <img src="/svg/buttonVideoBackground.svg" alt=">" />
                </div>
            </button>
        </div>
    )
}