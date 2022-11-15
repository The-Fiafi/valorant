import React from "react";
import { Link } from "react-router-dom";

import "../../../../styles/descktop/page/404/404.scss";

import Button from "../../../UI/ButtonComponent";

export default function Page404() {
    const backgroundFill = new Array(4).fill('404 404 404')

    return (
        <main className="page404">
            <div className="page404-background">
                {backgroundFill.map((el, i) => <span style={{paddingLeft: i % 2 ? '' : '300px'}} key={Math.random() + Math.random()}>{el}</span>)}
            </div>
            <section className="page404-content">
                <div className="page404-content-container">
                    <div className="page404-header-text">
                        <h1>
                            SORRY<br/>PAGE NOT FOUND
                        </h1>
                        
                        <div className="cube-decoraator"></div>
                    </div>
                    <div className="return-back-button">
                        <div className="button-contaienr">
                            <h1>Re-fill your ammo and try it again</h1>
                            <Button to="/" firstColor="white" color="" lastColor="#DC3F4D" borderColor="white" text="go to homepage" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}