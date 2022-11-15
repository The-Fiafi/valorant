import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./page/home/HomePage";
import AgentsPage from "./page/agents/AgentsPage";
import AgentsSelectPage from "./page/agents/AgentsSelectPage";
import Page404 from "./page/404/404";

export default function DesktopComponent() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/agents/:agent" element={<AgentsSelectPage />} />
            
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}