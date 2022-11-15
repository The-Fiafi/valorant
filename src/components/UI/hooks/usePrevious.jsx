import { useRef, useEffect } from "react";

export default function usePrevious(value) {
    const state = useRef(value)

    useEffect(() => {
        state.current = value    
    }, [value])
    
    return state.current
}