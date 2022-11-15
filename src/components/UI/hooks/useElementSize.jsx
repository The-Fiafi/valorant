import { useLayoutEffect, useState } from "react";

export default function useElementSize(ref) {
    const [size, setSize] = useState([0, 0])

    useLayoutEffect(() => {
        if (!ref) {
            const sizeResize = () => setSize([window.innerWidth, window.innerHeight])

            sizeResize()

            window.addEventListener('resize', sizeResize)

            return () => window.removeEventListener('resize', sizeResize)
        }

        const observer = new ResizeObserver(entries => {
            setSize(() => {
                const element = entries[0].target
                return [element.offsetWidth, element.offsetHeight]
            })
        })

        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [ref])

    return size
}