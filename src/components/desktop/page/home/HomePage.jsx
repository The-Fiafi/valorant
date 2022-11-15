import React, { useState } from "react";

import "../../../../../src/styles/descktop/page/home/Home.scss"

import Header from "../../UI/Header/HeaderComponent";
import AboutSection from "./sections/HomeAboutSection";
import ActSection from "./sections/HomeActSection";
import AgentsSection from "./sections/HomeAgentsSection";
import LogoSection from "./sections/HomeLogoSection";
import MapSection from "./sections/HomeMapSection";
import NewsSection from "./sections/HomeNewsSection";

export default function HomePage() {
    const [logoSectionHeight, setLogoSectionHeight] = useState(0)

    return (
        <Header>
            <div className="home">
                <LogoSection setSize={setLogoSectionHeight} />
                <NewsSection logoSectionHeight={logoSectionHeight} />
                <ActSection />
                <AboutSection />
                <AgentsSection />
                <MapSection />
            </div>
        </Header>
    )
}