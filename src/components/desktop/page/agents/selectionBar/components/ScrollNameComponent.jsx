import React from "react";

import "../../../../../../styles/descktop/page/agents/selectionBar/components/ScrollName.scss"

export default function ScrollName({ agent, index, top, selectedAgent }) {
    const color = agent.name === selectedAgent[0].select ? "select" : ""

    return (
        <div 
            className="agent-scroll" 
            style={{top}} 
            onClick={() => {
                selectedAgent[0].current = [top, agent.name]
                selectedAgent[1]()
            }}
        >
            <div className="agent-scroll-container">
                <div className="agent-index">
                    {index}
                </div>
                <div className={"agent-scroll-name " + color}>{agent.name}</div>
            </div>
        </div>
    )
}