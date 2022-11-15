import React, { useRef } from "react";
import useChangePsition from "../../../../UI/hooks/useChangePosition";

import "../../../../../../src/styles/descktop/page/home/sections/AgentsSection.scss";

import PoputText from "../../../UI/PoputTextComponent";
import Button from "../../../../UI/ButtonComponent";
import CanvasHero from "../../../UI/home/CanvasHeroComponent";
import LineWrapper from "../../../UI/LineWrapperComponent";

export default function AgentsSection() {
    const backgroundRef = useRef()
    const canvasRef = useRef()
    const bottom = useChangePsition(canvasRef, 180, -200, 40)
    const backgroundPositionY = useChangePsition(backgroundRef, Infinity, 0, 30)

    return (
        <section className="agents-section">    
            <LineWrapper>
                <div className="agents-section-container" style={{backgroundPositionY}} ref={backgroundRef}>
                    <div className="canvas-agent" ref={canvasRef}>
                        <div className="canvas-agent-container" style={{bottom}}>
                            <CanvasHero width="100%" height="100%" />
                        </div>
                    </div>
                    <div className="text-agent-container">
                        <div className="agents-section-underline"></div>
                        <PoputText color="white" text="АГЕНТЫ" />
                        <h5 className="header-text">КРЕАТИВНОСТЬ – ВАШЕ ГЛАВНОЕ ОРУЖИЕ.</h5>
                        <div className="agent-section-text">Это не просто игра со стрельбой. Вам на выбор предлагаются агенты, вооруженные различными смертоносными умениями, с помощью которых любое оружие в ваших руках заиграет новыми красками. У каждого агента уникальный игровой процесс – двух одинаковых не найти.</div>
                        <div className="button-container-agents">
                            <Button firstColor="#ece8e1" color="#1A242C" borderColor="#F5979A" text="посмотреть всех агентов" />
                        </div>
                    </div>
                </div>
            </LineWrapper>
        </section>
    )
}