import React, { useEffect, useRef } from 'react';
import useElementSize from "../../../../UI/hooks/useElementSize";

import "../../../../../../src/styles/descktop/page/home/sections/LogoSection.scss";

import Button from "../../../../UI/ButtonComponent";

export default function LogoSection({ setSize }) {
    const videoRef = useRef()
    
    // eslint-disable-next-line
    const [_, videoHeight] = useElementSize(videoRef)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setSize(videoHeight), [videoHeight])

    return (
        <section className='hero-logo'  style={{top: videoHeight * -0.1}}>
            <div className="home-video">
                <video autoPlay muted loop ref={videoRef} className="video-valorant">
                    <source src="/video/Home.mp4" type="video/mp4"/>
                </video>
                <div className="home-valorant">
                    <div className="home-logo-text">
                        <p className="home-logo-des">Тактический шутер с матчами 5 на 5 и уникальными персонажами</p>
                        <div className="home-logo-svg">
                            <div className="home-logo-svg-underline" style={{height: videoHeight, top: videoHeight / -2}}></div>
                            <img src="/svg/VALORANT.svg" alt="VALORANT" width="100%"></img>
                        </div>
                        <div className="button-container">
                            <Button text="играть бесплатно" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}