import { useEffect, useState } from 'react';


export default function useChangePsition(ref, maxPosition = Infinity, minPosition = 0, diff = 10) {
    const [position, setPosition] = useState(minPosition)

    useEffect(() => {
        if (!ref.current) return

        const wheelIvent = ev => {
            if (ref.onScreen) {
                if (ev.deltaY < 0) {
                    setPosition(prew => prew - diff > minPosition ? prew - diff : minPosition)
                    return 
                }
                setPosition(prew => prew + diff < maxPosition ? prew + diff : maxPosition)
            }
        }

        const elementObserver = new IntersectionObserver(
            observer => ref.onScreen = observer[0].isIntersecting, 
            {threshold: 0.1}
        )
        
        elementObserver.observe(ref.current)

        window.addEventListener('wheel', wheelIvent)

        return () => {
            elementObserver.disconnect()
            window.removeEventListener('wheel', wheelIvent)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return position
}