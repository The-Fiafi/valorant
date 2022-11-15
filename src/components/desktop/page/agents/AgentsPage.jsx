import React, { useRef } from "react";
import useElementSize from "../../../UI/hooks/useElementSize";
import useChangePsition from "../../../UI/hooks/useChangePosition";

import "../../../../styles/descktop/page/agents/Agents.scss";

import Header from "../../UI/Header/HeaderComponent";
import AgentSelectionBar from "./selectionBar/AgentSelectionBarComponent";
import ScambleText from "../../../UI/ScambleTextComponent";

export default function AgentsPage() {
    const backgroundRef = useRef()
    const scambleTextRef = useRef()
    const contentContainerRef = useRef()
    const [imageWidth] = useElementSize(backgroundRef)
    const [windowWidth] = useElementSize()
    const paddingBottom = useChangePsition(contentContainerRef, 50, -20, 20)

    const width = imageWidth <= windowWidth && imageWidth ? '100%' : 'max-content'

    return (
        <Header>
            <div className="agents-page">
                <img src="/img/back/agents-background.jpg" ref={backgroundRef} alt="" style={{width}} className="agents-page-background " />
                <div className="agents-page-container" ref={contentContainerRef}>
                    <div className="agent-selection-bar-container">
                        <AgentSelectionBar />
                    </div>
                    <div className="agents-group" style={{paddingBottom}}>
                        <img src="/img/agentsPage/agents-group.png" className="unselectable" alt="" height="100%" />
                    </div>
                    <div className="agents-page-container-descryption" style={{paddingBottom}}>
                        <div className="content-container">     
                            <div className="scamble-text-container" ref={scambleTextRef}>
                                <ScambleText once={true} text="// ВСТРЕЧАЙТЕ АГЕНТОВ" textRef={scambleTextRef} />
                            </div>
                            <span>
                                Найдите новые способы установки Spike и устранения противников, играя за стратегов, охотников и бойцов на любой вкус.
                            </span>
                        </div>
                    </div>
                </div>
            </div>    
        </Header>
    )
}