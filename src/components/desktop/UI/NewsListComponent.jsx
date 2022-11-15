import React, { useEffect, useRef, useState } from "react";
import useCursorPosition from "../../UI/hooks/useCursorPosition";

import "../../../styles/descktop/UI/News.scss"

import CursorDecorator from "./CursorDecoratorComponent";
import PoputText from "./PoputTextComponent";
import BackGroundText from "../UI/home/BackgroundTextComponent";
import ScambleText from "../../UI/ScambleTextComponent";

export default function NewsList() {
    const scambleTextRef = useRef()

    const [cursor, moveHandler, cursorRef, scene] = useCursorPosition()
    const data = new Array(8).fill()

    const [mouseDown, setMouseDown] = useState(false)
    const [left, setLeft] = useState(0)
    const [transition, setTransition] = useState('')

    const cardRef = useRef()

    const width = data.length * 300

    useEffect(() => {
        scene.current.marginLeft = scene.current.parentNode.offsetLeft 
        scene.current.marginTop = 630
    }, )

    const setPositionHandler = position => {
        const cardsInColum = 4
        const marginLeft = 30

        const leftPosition = position * cardsInColum * (cardRef.current.clientWidth + marginLeft)
        setLeft(leftPosition)
        setTransition('1s')

        setTimeout(setTransition.bind(null, ''), 1000)
    }
     
    const upHandler = () => {
        setMouseDown(false)

        if (transition) return

        const marginRight = 30
        const cardsInColum = 4
        const cardWidth = cardRef.current.offsetWidth + marginRight
        
        let roundPosition = Math.floor((Math.ceil(left / cardWidth / 2) / 2))
        let newLeftPosition = roundPosition * cardsInColum * cardWidth

        if (Math.abs(newLeftPosition) >= width || newLeftPosition > 0) {
            const norlmalRoundPosition = roundPosition - (roundPosition < 0 ? -1 : 1)

            roundPosition = norlmalRoundPosition
        }

        setPositionHandler(roundPosition)
    }   

    return (
        <section className="news-list-section unselectable" ref={scene} onMouseMove={moveHandler}>
            <div className="background">
                <BackGroundText text={['мы', 'ждем']} fillColor="#ECE8E1" borderColor="#d1cdc7" data={[100, 0, 5]} />
                <div ref={scambleTextRef} className="news-scamble-text-container">
                    <ScambleText text="сотри границы" textRef={scambleTextRef} />
                </div>
            </div>
            <CursorDecorator cursorRef={cursorRef} cursor={cursor} transform="rotate(90deg)"/>
            <div className="news-list-container" >
                <div className="navigation">
                    <div className="news-header-text">
                        <PoputText text="ПОХОЖИЙ КОНТЕНТ" />
                    </div>
                    <div className="navigation-button-container">
                        {new Array(Math.floor(data.length / 4)).fill().map((_, i) => {
                            const roundPosition = Math.abs(Math.floor((Math.ceil(left / 300 / 2) / 2)))

                            return (
                                <div 
                                    key={i + i} 
                                    className={"navigation-button" + (roundPosition === i ? " select-button" : "")}
                                    onClick={setPositionHandler.bind(null, -i)}
                                ></div>
                            )
                        })}
                    </div>
                </div>
                
                <div 
                    className="news-cards" 
                    style={{left, width, transition}}
                    onMouseMove={ev => !mouseDown || transition || setLeft(prew => prew + ev.movementX + ev.movementX * 0.15)}
                    onMouseDown={setMouseDown.bind(null, true)}
                    onMouseUp={upHandler}
                    onMouseLeave={upHandler}
                >
                    {data.map((el, i) => (
                        <div className="news-card" key={i} ref={cardRef}>
                            <div className="news-logo"></div>
                            <div className="news-decorator"></div>
                            <div className="news-info">
                                <div className="news-timestamp">в прошлом году</div>
                                <div className="news-descryption">VALORANT – список изменений патча 3.06</div>
                                <div className="news-index">0{i + 1}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}