import React from "react";


import "../../../../../styles/descktop/page/agents/selectionBar/AgentSelectionBar.scss";

import CursorDecorator from "../../../UI/CursorDecoratorComponent";
import AgentsScrollNames from "./components/AgentsScrollNamesComponent";

export default function AgentSelectionBar({ cursor, moveHandler, cursorRef }) {
    return (
        <div className="scroll-bar">
            <CursorDecorator cursorRef={cursorRef} cursor={cursor} />
            <div className="scroll-bar-container" onMouseMove={moveHandler}>
                <AgentsScrollNames />
            </div>
        </div>
    )
}