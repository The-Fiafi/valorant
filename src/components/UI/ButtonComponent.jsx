import React from "react";
import { Link } from "react-router-dom";

import "../../styles/UI/Button.scss"

export default function Button({ to, text, color = "white", firstColor = '#FF4655', lastColor = '#0F1923', borderColor = '#AEBA9C' , onClick }) {
    return (
        <Link to={to}>
            <button className="button-valorant">
                <div className="border-button-top" style={{
                    border: `1px solid ${borderColor}`
                }}></div>
                <div className="top-label" style={{background: firstColor}}></div>

                <div className="button-module-mask">
                    <span style={{background: lastColor}} className="button-hover-mask"></span>
                </div> 
                <span className="button-bold-text" style={{color}}>{text.toUpperCase()}</span>

                <div className="bottom-label" style={{background: firstColor}}></div>
                <div className="border-button-bottom" style={{
                    border: `1px solid ${borderColor}`,
                }}></div>
            </button>
        </Link>
    )
}