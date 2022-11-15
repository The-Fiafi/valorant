import React, { useRef } from "react";
import useElementSize from "../../../../UI/hooks/useElementSize";

import "../../../../../../src/styles/descktop/page/home/sections/ActSection.scss";

import PoputText from "../../../UI/PoputTextComponent";
import Button from "../../../../UI/ButtonComponent";
import LineWrapper from "../../../UI/LineWrapperComponent";

export default function ActSection() {
    const imgRef = useRef()
    const [imageWidth] = useElementSize(imgRef)
    const [windowWidth] = useElementSize()

    const width = imageWidth < windowWidth && imageWidth ? '100%' : 'max-content'

    return (
        <section className="act-section">
            <img alt="" src="/img/HomeValorantActSection.jpg" ref={imgRef} style={{width}} />
            <LineWrapper>
                <div className="act-section-container">
                    <div className="act">
                        <div className="act-section-season">ЭПИЗОД_05 // АКТ 2 / ГОД 2</div>
                        <PoputText color="white" text="ИЗМЕРЕНИЕ" />
                        <div className="act-section-button">
                            <Button text="Обзор акта 2" />
                        </div>
                    </div>
                </div>
            </LineWrapper>
        </section>
    )
}