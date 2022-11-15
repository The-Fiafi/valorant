import React from "react";

import "../../../../styles/descktop/UI/footer/Footer.scss"

export default function Footer() {
    return (
        <div className="footer unselectable"> 
            <div className="fooled"></div>
            <div className="footer-top">
                <div className="footer-text">ЗАГРУЗИТЬ ИГРУ</div>
                <div className="footer-text">ЗАГРУЗИТЬ ПРИЛОЖЕНИЕ RIOT MOBILE</div>
            </div>
            <div className="footer-content">
                <div className="icons-links">
                    <div className="icons-links-icon">
                        <img src="/svg/icons/vk.svg" alt="vk" width="24px" />
                    </div>
                    <div className="icons-links-icon">
                        <img src="/svg/icons/discord.svg" alt="discord" width="24px" />
                    </div>
                    <div className="icons-links-icon">
                        <img src="/svg/icons/twitter.svg" alt="twitter" width="24px" />
                    </div>
                    <div className="icons-links-icon">
                        <img src="/svg/icons/youtube.svg" alt="youtube" width="24px" />
                    </div>
                </div>
                <div className="company-logo">
                    <img src="/svg/logo.svg" alt="F" height="48px" />
                </div>
                <div className="copyright">
                    <div className="copyright-container">
                        <span>
                            © 2022 Riot Games, Inc. Riot Games, VALORANT и все связанные с ними логотипы являются торговыми знаками или зарегистрированными торговыми знаками, принадлежащими Riot Games, Inc.
                        </span>
                    </div>
                </div>
                <div className="xyina-container">
                    <div className="footer-text">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</div>
                    <div className="footer-text">УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</div>
                    <div className="footer-text">НАСТРОЙКА COOKIE</div>
                </div>
                <div className="age-limit">
                    <div className="age-limit-img">
                        <img src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt85bea726d4b56373/5eceeb3654e7166d098d0c68/Russia_-_16_(color).png?&height=100&disable=upscale" alt="+16" />
                    </div>
                </div>
            </div>
        </div>
    )
}