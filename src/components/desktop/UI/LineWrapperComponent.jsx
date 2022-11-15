import React, { useRef } from "react";

import "./../../../styles/descktop/UI/LineWrapper.scss";


export default function LineWrapper({ children, height = "100%" }) {
    const elementRef = useRef()

    return (
        <div ref={elementRef} className="line-wrapper-container">
            <div className="line" style={{height}}></div>
            {children}
        </div>
    )
}