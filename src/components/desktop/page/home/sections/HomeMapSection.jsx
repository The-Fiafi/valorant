import React, { useRef } from "react";
import useChangePsition from "../../../../UI/hooks/useChangePosition";

import "../../../../../../src/styles/descktop/page/home/sections/MapSection.scss"

import BackGroundText from "../../../UI/home/BackgroundTextComponent";
import PoputText from "../../../UI/PoputTextComponent";
import Button from "../../../../UI/ButtonComponent";
import LineWrapper from "../../../UI/LineWrapperComponent";
import useElementSize from "../../../../UI/hooks/useElementSize";

export default function MapSection() {
    const birds = useRef()
    const back = useRef()
    const birdsPosition = useChangePsition(birds, 900, 500, 30)

    // eslint-disable-next-line
    const [_, height] = useElementSize(back)
    
    return (
        <section className="maps-section" style={{minHeight: height - 150}}>
            <div className="maps-section-background">
                <div className="maps-section-background-birds" ref={birds} style={{right: birdsPosition, top: birdsPosition / 2 - (birdsPosition - 500)}}>
                    <img src="/img/back/birds.png" alt="" />
                </div>
                <img src="/img/back/maps.png" width="100%" alt="" ref={back} />
            </div>
            <div className="maps-section-background-text">
                <div className="maps-section-background-text-container">
                    <BackGroundText text={['place']} fillColor="#ECE8E1" borderColor="#d1cdc7" data={[300, 0, 15]} />
                </div>
            </div>
            <LineWrapper>
                <div className="maps-section-container">
                    <div className="maps-section-text-content">
                        <PoputText text="Карты" />
                        <h5 className="maps-section-agitation">СРАЖАЙТЕСЬ ПО ВСЕМУ МИРУ</h5>
                        <span className="maps-section-text-that-no-one-will-read">Каждая карта – площадка для демонстрации ваших нестандартных игровых решений. Командные стратегии, яркие моменты и клатчи – вот для чего созданы эти карты. Сделайте так, чтобы ваш стиль игры копировали многие годы</span>
                        <div className="maps-section-container-button">
                            <Button text="Посмотреть все карты" />
                        </div>
                    </div>
                </div>
            </LineWrapper>
        </section>
    )
}