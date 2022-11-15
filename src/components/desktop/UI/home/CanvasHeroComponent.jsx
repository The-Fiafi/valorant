import React, { useRef, useEffect } from "react"

export default function CanvasHero({ width, height }) {
    const canvas = useRef(true)

    useEffect(() => {
        const cvs = canvas.current
        const ctx = cvs.getContext('2d')

        const sprite = new Image()
        sprite.src = '/img/canvasSprite/ghost.png'

        const spriteWidth = sprite.width / 6
        const spriteHeight = sprite.height
        const centerX = cvs.width / 2 - spriteWidth
        const centerY = cvs.height / 2 - spriteHeight
        const maxFrameCount = 8

        let frameX = 0
        let gameFrameCount = 0
    
        ctx.font = '1rem DINNextW1G'
        ctx.fillStyle = 'white'

        function animate() {
            ctx.clearRect(0, 0, cvs.width, cvs.height)  

            ctx.drawImage(
                sprite,
                frameX * spriteWidth,
                0,
                spriteWidth,
                spriteHeight,
                centerX,
                centerY,
                spriteWidth * 2,
                spriteHeight
            )
                
            if (!(gameFrameCount % maxFrameCount)) {
                if (frameX < 5) frameX++
                else frameX = gameFrameCount = 0
            }

            gameFrameCount++
        }  

        let animationFrameId

        const render = () => {
            animate()

            animationFrameId = window.requestAnimationFrame(render)
        }

        sprite.onload = render

        return () => window.cancelAnimationFrame(animationFrameId)
    }, [])                                              

    return <canvas ref={canvas} style={{width, height}}></canvas>
}