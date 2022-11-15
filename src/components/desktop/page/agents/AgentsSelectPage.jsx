import React from "react"

import "../../../../styles/descktop/page/agents/AgentsSelect.scss";

import Header from "../../UI/Header/HeaderComponent";
import AgentsPreview from "./sections/AgentPreviewSection";
import AgentSkills from "./sections/AgentSkillsComponentSection";

export default function AgentsSelectPage() {
    return (
        <Header>
            <AgentsPreview />
            <AgentSkills />
        </Header>
    )
}