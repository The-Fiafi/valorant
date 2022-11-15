import React, { useRef } from "react";

import "../../../../../../src/styles/descktop/page/home/sections/AboutSection.scss"

import ScambleText from "../../../../UI/ScambleTextComponent";
import PoputText from "../../../UI/PoputTextComponent";
import Button from "../../../../UI/ButtonComponent";
import VideoPlayer from "../../../../UI/VideoPlayerComponent";
import LineWrapper from "../../../UI/LineWrapperComponent";

export default function AboutSection() {
    const textRef = useRef()

    return (
        <section className="about-section">
            <LineWrapper height="120%">
                <div className="about-section-container">
                    <div className="about-container-items">
                        <PoputText color="#0F1923" text="мы - valorant" />
                        <div className="about-scamble-text" ref={textRef}>
                            <div className="about-section-underline"></div>
                            <ScambleText text="MR0C - SWD - BR4 ПР0Т0К0Л VLRT " textRef={textRef} />       
                        </div>
                        <div className="about-section-content-container">
                            <div className="about-section-content-text">
                                <h5>СОТРИ ГРАНИЦЫ</h5>
                                <span className="about-section-text">Создайте уникальный стиль и испытайте себя на международной соревновательной сцене. У вас есть по 13 раундов за атакующих и защитников. Используйте весь арсенал оружия и тактических наработок. Один раунд – одна жизнь. Если хотите выжить, думайте быстрее оппонента. Побеждайте противников в рейтинговых играх, играх без ранга, в бою насмерть и в режиме "Быстрая установка Spike".</span>
                                <div className="button-about-section"><Button  text="основы игры" /></div>
                            </div>
                            <div className="about-section-video">
                                <div className="about-detail-box"></div>
                                <VideoPlayer text="Игровой процесс" src="/video/ValorantPlay.mp4" />
                            </div>
                        </div>
                        <div className="about-section-number-overview">
                            <div className="underline-overview"></div>
                            <span className="about-section-number-overview-text">00.</span>   
                        </div>
                    </div>
                </div>
            </LineWrapper>
        </section>
    )
}