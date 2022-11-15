import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import navigationRedirectButtons from "../../../../data/navigationRedirectButtons";

import "../../../../styles/descktop/UI/Header/Header.scss"

import Footer from "../footer/FooterComponent";
import HeaderLinkRedirect from "./HeaderLinkRedirectComponent";

export default function Header({ children }) {
    const [navigatorLinks, setNavigation] = useState(navigationRedirectButtons)
    const redirectButtons = useRef()
    const navigation = useRef()

    useEffect(() => {
        const elseElementsWidth = navigation.current.offsetWidth - redirectButtons.current.offsetWidth
        const navChildren = redirectButtons.current.children
        const list = []
        const more = {name: 'БОЛЬШЕ', list: [], id: Math.random()+ '' + Date.now()}
        let totalWidth = 0

        for (let i = 0; i < navChildren.length; i++) {
            if (totalWidth + navChildren[i].offsetWidth + elseElementsWidth + 200 >= window.innerWidth) {
                more.list.push(navigatorLinks[i])
                continue
            }
            totalWidth += navChildren[i].offsetWidth
            list.push(navigatorLinks[i])
        }

        if (more.list.length) {
            more.list.push(list.pop())
            list.push(more)
        }

        setNavigation(list)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="navigation" ref={navigation}>
                        <div className="logo">
                            <svg className="logo-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" height="50%"><path color="white" d="M20.5,0H7.5C4.467,0,2,2.467,2,5.5V22.5c.033,1.972,2.967,1.971,3,0V14h11.5c1.972-.033,1.971-2.967,0-3H5V5.5c0-1.378,1.122-2.5,2.5-2.5h13c1.972-.033,1.971-2.967,0-3Z"/></svg>
                            <img src="/svg/arrowBottom.svg" className="arrow" alt="^" />
                        </div>
                        <div className="logo" style={{marginLeft: 22}}>
                            <Link to="/"><img src="/svg/home.svg" alt="Home"/></Link>

                        </div>             
                        <div className="navigator-link" ref={redirectButtons}>
                            {navigatorLinks.map(el => {
                                return <HeaderLinkRedirect data={el} key={el.id} />
                            })}
                        </div>
                    </div>
                    <div className="dowload">
                        <div className="language">
                            <img src="/svg/language.svg" alt='*'></img>
                        </div>
                        <button className="regist-btn">ИГРАТЬ</button>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}