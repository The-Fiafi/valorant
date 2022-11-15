import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import agentsData from "../../../../../../data/agentsPageData";

import "../../../../../../styles/descktop/page/agents/selectionBar/components/AgentsScrollNames.scss";

import ScrollNamesParts from "./ScrollNamesPartsComponent";

export default function AgentsScrollNames() {
    const [mouseDown, setMouseDown] = useState(false)
    const [bottom, setBottomPosition] = useState(-220)
    const [transition, setTransition] = useState(null)
    const selectedAgent = useRef()
    const [agent, setAgent] = useState(useParams())

    const navigation = useNavigate()

    const containerRef = useRef()
    const sideRef = useRef()
    let prevState = useRef()

    const mouseHandler = ev => {
        if (!mouseDown || transition) return setMouseDown(false)

        if (typeof prevState.current === 'number') {
            const changes = prevState.current - ev.nativeEvent.pageY

            setBottomPosition(prev => prev + changes)
        }

        prevState.current = ev.nativeEvent.pageY
    }
    
    const zeroing = () => {
        setMouseDown(false)
        prevState.current = null
    }

    const leaveHandler = () => {
        if (!mouseDown) return zeroing()
        if (transition) return 

        selectedAgent.select = null
        setTransition('1s')
        
        if (selectedAgent.current) {
            setBottomPosition(Math.round(selectedAgent.current[0] / 100) * 100 - 150)
            
            setTimeout(() => {
                if(!selectedAgent.current) return

                navigation(`/agents/${selectedAgent.current[1]}`)
                
                selectedAgent.select = selectedAgent.current[1]
                selectedAgent.current = null
                setTransition(null)
            }, 1000)

            zeroing()
            return
        }

        const agents = sideRef.current.children
        const deviation = Math.round(bottom / 100) * 105

        let agentCloseToZero = [Infinity, {}]

        for (let i = 0; i < agents.length; i++) {
            const position = +agents[i].style['top'].slice(0, -2)
            const normolizePosition = Math.abs(position - deviation )

            if (normolizePosition < agentCloseToZero[0] && normolizePosition > 150) {
                agentCloseToZero = [Math.abs(normolizePosition), agents[i], position]
            } 
        }

        const agentCountIndex = agentCloseToZero[1].outerText.indexOf('\n')
        const agentName = agentCloseToZero[1].outerText.slice(agentCountIndex).toLowerCase()

        setBottomPosition(Math.round(agentCloseToZero[2] / 100) * 100 - 150)
        setTimeout(() => {
            navigation(`/agents/${agentName}`)
            selectedAgent.select = agentName.slice(1)
            setTransition(null)
        }, 1000)
        
        zeroing()
    }

    if (agent) {
        const position = Object.keys(agentsData).indexOf(agent.agent) * 100
        selectedAgent.current = [position, agent.agent]

        setBottomPosition(Math.round(selectedAgent.current[0] / 100) * 100 - 220)
        
        selectedAgent.select = selectedAgent.current[1]
        selectedAgent.current = null
        setAgent(null)
    }

    return (
        <div className="scroll-names-container unselectable"
            onMouseDown={setMouseDown.bind(null, true)} 
            onMouseMove={mouseHandler}
            onMouseLeave={leaveHandler}
            style={{bottom, transition}}
            ref={containerRef}
        >
            <ScrollNamesParts 
                sideRef={sideRef} 
                bottom={Math.round(bottom / 100)}
                selectedAgent={[selectedAgent, leaveHandler]} 
                agentsData={agentsData}
            />
        </div>
    )
}