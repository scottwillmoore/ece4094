// Consider migration to TypeScript for better auto-completion.

// I think the canvas is being created on each mouse event. The canvas should
// instead only redraw on each mouse event. In addition, it should be
// rate-limited by requestAnimationFrame.

// Implement the ability to scroll vertically and horizontally and zoom in and
// out of the canvas.

import React, { useEffect, useRef, useState } from "react";

function useMouse(ref) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const listener = ({ target, clientX: x, clientY: y }) => {
            const { left, top } = target.getBoundingClientRect();
            setPosition({ x: x - left, y: y - top });
        };
        ref.current.addEventListener("mousemove", listener);
        return () => {
            ref.current.removeEventListener("mousemove", listener);
        };
    });
    return position;
}

export default function Editor() {
    const canvasRef = useRef<HTMLCanvasElement>();

    const { x: mouseX, y: mouseY } = useMouse(canvasRef);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const context = canvas.getContext("2d");

        const size = 16;
        for (let x = 0; x < canvas.width; x += size) {
            for (let y = 0; y < canvas.height; y += size) {
                context.fillRect(x, y, 1, 1);
            }
        }

        const round = number => Math.round(number / size) * size;
        context.fillRect(round(mouseX) - size, round(mouseY) - size, 2 * size, 2 * size);
    });

    return <canvas ref={canvasRef} className="editor"></canvas>;
}
