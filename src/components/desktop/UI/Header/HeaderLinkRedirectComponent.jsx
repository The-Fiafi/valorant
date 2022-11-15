import React, { useState } from "react"

import "../../../../styles/descktop/UI/Header/HeaderLinkRedirect.scss"

import { Link } from "react-router-dom"

export default function HeaderLinkRedirect({ data }) {
    const list = data.list
    const isLinked = !list.length && data.hyperlink
    const [visible, setVisible] = useState(true)
    
    const getAll = (el, iteration = 0) => {
        const isLink = !el.list.length && el.hyperlink
        const listElement = (
            <div className={isLink ? "" : "list-element"} key={Math.random()+ '' + Date.now() + iteration}>
                {el.name}
                {el.link ? <img src="/svg/link.svg" style={{marginLeft: 5}} alt="^" /> : <></>}
            </div>
        )

        if (!el.list.length) return isLink ? <Link key={Math.random()+ '' + Date.now() + iteration} to={el.hyperlink}>{listElement}</Link> : listElement

        return (
            <div className="each-element"  key={Math.random()+ '' + Date.now() + iteration}>
                <div className="list-element" 
                    onClick={setVisible.bind(null, !visible)}
                    style={{display: el.link ? 'flex' : 'block'}}
                >
                    <div>{el.name}</div>
                    {el.link ? <img src="/svg/link.svg" style={{marginLeft: 5}} alt="^" /> : <></>}
                </div>

                <div className="each-element" 
                    style={{
                        paddingLeft: '20px',
                        display: !visible ? 'flex' : 'none',
                    }}
                >
                    {el.list.map(value => {
                        return getAll(value, iteration + 1)
                    })}
                </div>
            </div>
        )
    }

    const button = (
        <div className={isLinked ? "" : "button"}>
            {data.name.toUpperCase()}
            {list.length ? 
                <img src="/svg/arrowBottom.svg" className="arrow" alt="^" /> 
            : <></>}

            <div className="popup-list" 
                style={{
                    top: 'calc(100% - 5px)',
                    minWidth: list.length ? 170 : '',
                    display: 'none'
                }}
            >
                <div className="underline"></div>
                {list.map(el => {
                    return getAll(el)
                })}
            </div>
        </div>
    )

    return (
        <div className="redirect-container">
            {isLinked ? <Link to={data.hyperlink}>{button}</Link> : button}
        </div>
    )
}