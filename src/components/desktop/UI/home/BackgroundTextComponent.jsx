import React, { useRef } from "react";
import useChangePsition from "../../../UI/hooks/useChangePosition";

import "../../../../styles/descktop/UI/home/BackgroundText.scss"

export default function BackGroundText({ text, fillColor = "white", borderColor = "#E1DDD6", data = []}) {
    const backgroundRef = useRef()
    const top = useChangePsition(backgroundRef, ...data)

    return (
        <div className="background-text-container">
            <div className="background-text-container-news" style={{top}} ref={backgroundRef}>
                {text.map(el => (
                    <div className="background-text-container-news-text" key={Math.random() + Date.now()}>
                        <span style={{
                            WebkitTextStroke: `1px ${borderColor}`,
                            WebkitTextFillColor: fillColor
                        }}>{el.toUpperCase()}</span>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}