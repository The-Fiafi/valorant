import React from "react";

import "../../../../styles/descktop/UI/home/NewsComponent.scss"

export default function NewsComponent({ data }) {
    return (
        <div className="news-container">
            <div className="preview">
                <span className="image-news-mask"></span>
                <img src={data.img} width="100%" alt="NewsImage"/>
            </div>
            <div className="other-info">
                <span>{data.timestamp}</span>
                <span className="type">{data.type.toUpperCase()}</span>
            </div>
            <div className="news-descryption">
                {data.descryption.toUpperCase()}
            </div>
        </div>
    )
}