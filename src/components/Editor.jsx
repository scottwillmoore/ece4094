import React, { useEffect, useRef, useState } from "react";

function useMouse(reference) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const listener = ({ target, clientX: x, clientY: y }) => {
            const { left, top } = target.getBoundingClientRect();
            setPosition({ x: x - left, y: y - top });
        };
        reference.current.addEventListener("mousemove", listener);
        return () => {
            reference.current.removeEventListener("mousemove", listener);
        };
    });
    return position;
}

export default function Editor() {
    const canvasReference = useRef(null);

    const { x: mouseX, y: mouseY } = useMouse(canvasReference);

    useEffect(() => {
        const canvas = canvasReference.current;
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

    return <canvas ref={canvasReference} className="editor"></canvas>;
}
