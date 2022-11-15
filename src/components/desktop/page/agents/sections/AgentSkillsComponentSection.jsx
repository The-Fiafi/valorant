import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useChangePsition from "../../../../UI/hooks/useChangePosition";

import agentsData from "../../../../../data/agentsPageData";

import "../../../../../styles/descktop/page/agents/sections/AgentSkills.scss";

import LineWrapper from "../../../UI/LineWrapperComponent";
import PoputText from "../../../UI/PoputTextComponent";
import ScambleText from "../../../../UI/ScambleTextComponent";
import NewsList from "../../../UI/NewsListComponent";

export default function AgentSkills() {
    const backRef = useRef()
    const scambleTextRef = useRef()
    const scrollPosition = useChangePsition(backRef, 90, 0, 15)

    const selectedAgent = useParams().agent
    const selectedAgentCheck = selectedAgent.indexOf('\n') !== -1 ? selectedAgent.slice(1) : selectedAgent
    const agent = agentsData[selectedAgentCheck]
    
    const agentSkills = agent.skills
    const [video, setVideo] = useState(0)
    const skillsButtons = ["Q", "E", "C", "X"]

    return (
        <section className="agent-skills">
            <LineWrapper>
                <div 
                    className="agent-skills-background" 
                    ref={backRef}
                    style={{backgroundPositionY: scrollPosition}}    
                >
                    <div className="side-decorator" style={{top: -1 * scrollPosition}}></div>
                    <div className="scamble-text-container" ref={scambleTextRef}>
                        <ScambleText once={true} text="сотри границы" textRef={scambleTextRef} />
                    </div>
                </div>
                <div className="agent-skills-container">
                    <div className="skills-header">
                        <PoputText text="ОСОБЫЕ УМЕНИЯ" />
                    </div>
                    <div className="skills">
                        {agentSkills.map((el, i) => (
                            <div 
                                className={`skill ${el.title === agentSkills[video].title ? 'select' : ''}`}
                                key={agent.id + Math.random()} 
                                onClick={setVideo.bind(null, i)}
                            >
                                <div className="hover-effect"></div>
                                <img className="skill-icon" alt="" src={el.icon} />
                            </div>
                        ))}
                    </div>
                    <div className="skills-descryption" key={agentSkills[video].title}>
                        <div className="skill-button">
                            {skillsButtons[video]} - "{agentSkills[video].title}"
                        </div>
                        <div className="skill-descryption-content">
                            {agentSkills[video].descrypion}
                        </div>
                    </div>
                    <div className="skill-video" key={agentSkills[video].video}>
                        <div className="skill-video-container">
                            <video autoPlay muted loop className="video">
                                <source src={agentSkills[video].video} type="video/mp4"/>
                            </video>

                            <div className="decorator"></div>
                        </div>
                    </div>
                </div>
                <NewsList />
            </LineWrapper>
        </section>
    )
}