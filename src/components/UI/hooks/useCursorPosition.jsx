import { useState, useRef } from "react";

export default function useCursorPosition() {
    const scene = useRef()
    const cursotRef = useRef()
    const [cursor, setCursor] = useState({})

    const moveHandler = ev => {
        setCursor(prew => {
            return {
                ...prew,
                top: ev.pageY - scene.current.offsetTop - 130  - (scene.current.marginTop ?? 0),
                left: ev.clientX - scene.current.offsetLeft - (scene.current.marginLeft ?? 0) - 40,
            }
        })
    }

    return [cursor, moveHandler, cursotRef, scene]
}