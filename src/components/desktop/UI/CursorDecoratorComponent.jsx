import React from "react";

import "../../../styles/descktop/UI/CursorDecorator.scss";


export default function CursorDecorator({ cursorRef, cursor, transform}) {
    return (
        <div className="cursor-decorator-container">
            <div className="cursor-decorator" ref={cursorRef} style={{...cursor, transform}}>
                <div className="border">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92"><path d="m91.5 46-8.7 28.1L60 91.5H31.9L9.2 74.1.5 46l8.7-28.1L31.9.5H60l22.8 17.4L91.5 46z" fillRule="evenodd" clipRule="evenodd" fill="#2b2b2b3a" stroke="#ece8e1" pathLength="1"></path></svg>
                </div>
                <div className="arrowUp">
                    <img src="/svg/cursor/black/arrow.svg" className="unselectable" alt="" width="20px" />
                </div>
                <div className="arrowDown">
                    <img src="/svg/cursor/black/arrow.svg" className="unselectable" alt="" width="20px" />
                </div>
            </div>
        </div>
    )
}