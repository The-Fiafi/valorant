import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useCursorPosition from "../../../../UI/hooks/useCursorPosition";

import agentsData from "../../../../../data/agentsPageData";

import useElementSize from "../../../../UI/hooks/useElementSize";
import useChangePsition from "../../../../UI/hooks/useChangePosition";

import "../../../../../styles/descktop/page/agents/sections/AgentPreview.scss";

import AgentsSelectionBar from "../selectionBar/AgentSelectionBarComponent.jsx";
import ScambleText from "../../../../UI/ScambleTextComponent";

export default function AgentsPreview() {
    const videoRef = useRef()
    const agentImageRef = useRef()
    const scambleTextRef = useRef()

    const [videoWidth] = useElementSize(videoRef)
    const [windowWidth] = useElementSize()

    const bottom = useChangePsition(agentImageRef, -100, -150, 20)
    const selectedAgent = useParams().agent
    const selectedAgentCheck = selectedAgent.indexOf('\n') !== -1 ? selectedAgent.slice(1) : selectedAgent
    const agent = agentsData[selectedAgentCheck]

    const [cursor, moveHandler, cursorRef, scene] = useCursorPosition()

    const width = videoWidth - 1 < windowWidth && videoWidth ? "100vw" : "max-content"
    
    return (
        <section className="agent-biography">
            <div className="background" >
                 <video style={{width}} ref={videoRef} className="background-video" autoPlay muted loop>
                     <source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4" type="video/mp4" />
                 </video>
            </div>
            <div className="agent-biography-container" ref={scene}>
                <div className="agent-selection-bar-container">
                    <AgentsSelectionBar 
                        cursor={cursor} 
                        moveHandler={moveHandler}
                        cursorRef={cursorRef}
                        scene={scene}
                    />
                </div>
                <div className="agent-image-container">
                    <img 
                        ref={agentImageRef} 
                        style={{bottom}} 
                        className="agent-image" 
                        src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png" 
                        alt="" 
                    />
                </div>
                <div className="agents-biography">
                    <div className="agents-biography-centered" style={{bottom}}>
                        <div className="agents-biography-container" >    
                            <div className="agents-biography-header">
                                <div className="scamble-text-container" ref={scambleTextRef}>
                                    <ScambleText once={true} text="// РОЛЬ" textRef={scambleTextRef} />
                                </div>
                                <div className="agents-biography-role">
                                    <div>{agent.role}</div>
                                    <img
                                        src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png"
                                        alt=""
                                        className="agents-biography-role-icon"
                                    />
                                </div>
                            </div>
                            <div className="scamble-text-container" ref={scambleTextRef}>
                                <ScambleText once={true} text="// БИОГРАФИЯ" textRef={scambleTextRef} />
                            </div> 
                            <span>
                                {agent.biography}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 