import React from "react";

import "../../../../../../src/styles/descktop/page/home/sections/NewsSection.scss"

import BackGroundText from "../../../UI/home/BackgroundTextComponent";
import data from "../../../../../data/newsBackData";
import NewsComponent from "../../../UI/home/HomeNewsComponent";
import PoputText from "../../../UI/PoputTextComponent";
import LineWrapper from "../../../UI/LineWrapperComponent";

export default function NewsSection({ logoSectionHeight }) {
    
    return (
        <section className="hot-valorant-news" style={{marginTop: logoSectionHeight - logoSectionHeight * 0.25}}>
            <div className="news-mask-transition"></div>
            <div className="background-text-container">
                 <BackGroundText text={['we are', 'valorant']} borderColor="#E2DED8" data={[100]} />
            </div>
            <LineWrapper>
                <div className="valorant-news-container">
                    <div className="news">
                        <div className="see-more">
                            <div className="see-more-text">
                                ПЕРЕЙТИ НА СТРАНИЦУ С НОВОСТЯМИ
                                <div className="arrow-right">
                                    <img src="/svg/arrowRight.svg" alt="->" width="100%"/> 
                                </div>
                            </div>
                        </div>
                        <div className="news-header">
                            <PoputText color="rgb(255, 70, 85)" text="Последние новости" />
                        </div>
                        <div className="news-top-list-container">
                            {data.map((el, i) => {
                                return <NewsComponent data={el} key={i + Math.random() + Date.now()} />
                            })}
                        </div>
                    </div>
                </div>
            </LineWrapper>
        </section>
    )
}