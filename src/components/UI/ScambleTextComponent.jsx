import { useEffect, useState } from "react"

export default function ScambleText({ text, textRef, once }) {
    const [returnText, setReturnText] = useState('')

    useEffect(() => {
        const textObserver = new IntersectionObserver(observer => {
            if (observer[0].isIntersecting) {
                for (let i = 0; i < text.length; i++) {
                    setTimeout(() => {
                        setReturnText(prew => prew + text[i])
                    }, i * 20)
                }
                
                if (once) textObserver.disconnect()

                return
            }

            setReturnText('')
        })

        textObserver.observe(textRef.current)

        return () => textObserver.disconnect()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return returnText
}