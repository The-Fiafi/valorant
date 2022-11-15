import React, { useEffect, useState }  from "react";
import usePrevious from "../../../../../UI/hooks/usePrevious";

import "../../../../../../styles/descktop/page/agents/selectionBar/components/ScrollNamesParts.scss";

import ScrollName from "./ScrollNameComponent";

export default function ScrollNamesParts({ bottom, sideRef, selectedAgent, agentsData }) {
    const [sides, setSides] = useState({})
    const select = useState(false)

    const sidesKeys = Object.keys(sides)

    const prevScroll = usePrevious(bottom)

    useEffect(() => {
        const replacementData = {}
        const agentsKeys = Object.keys(agentsData)

        agentsKeys.forEach((el, i) => {
            if (i < Math.round(agentsKeys.length / 2)) {
                replacementData[el] = i * 105

            }else {
                replacementData[el] = (agentsKeys.length - i) * -105
            }
        })

        setSides({...replacementData})
    }, [])

    useEffect(() => {
        let iteration = bottom - prevScroll ? bottom - prevScroll : prevScroll
        iteration -= iteration > 0 && iteration > 1 ? 1 : 0
        
        for (let i = 0; i < Math.abs(iteration); i++) {
            setSides(prev => {
                const agentsPosition = {}
                const agentsKeys = Object.keys(agentsData)

                agentsKeys.forEach(el => agentsPosition[prev[el]] = el)
                const agentsPositionKeys = Object.keys(agentsPosition)

                const maxPosition = Math.max(...agentsPositionKeys)
                const minPosition = Math.min(...agentsPositionKeys)

                if (iteration < 0) {
                    prev[agentsPosition[maxPosition]] = prev[agentsPosition[minPosition]] - 100

                    return {...prev}
                }else if (iteration > 0) {
                    prev[agentsPosition[minPosition]] = prev[agentsPosition[maxPosition]] + 100

                    return {...prev}
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bottom])

    return (
        <div className="agents-side" ref={sideRef}>
            {sidesKeys.map((el, i) => 
                <ScrollName 
                    agent={agentsData[el]}
                    index={i + 1}
                    key={agentsData[el].id}
                    top={sides[el]}
                    select={select}
                    selectedAgent={selectedAgent}
                />
            )}
        </div>
    )
}