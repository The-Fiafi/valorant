import React, { useRef, useState, useEffect } from "react";

import "./../../../styles/descktop/UI/PoputText.scss"

export default function PoputText({ color, text, depth = 100 }) {
    const textRef = useRef()
    const [marginTop, setMargin] = useState(depth)

    useEffect(() => {
        const elementObserver = new IntersectionObserver(observer => {
            setMargin(prew => observer[0].isIntersecting ? 0 : prew)

            if (observer[0].isIntersecting) elementObserver.disconnect()
        }, {threshold: 0.5})

        if (textRef.current) elementObserver.observe(textRef.current)

        return () => elementObserver.disconnect()
    }, [])

    return (    
        <div className="header-text-container" ref={textRef} style={{color}}>
            <span style={{opacity: 0}}>{text.toUpperCase()}</span>
            <span className="poput-text" style={{marginTop}}>{text.toUpperCase()}</span>
        </div>
    )
}