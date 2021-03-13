import React, { useEffect, useRef } from "react";

export default function Editor() {
    const canvasReference = useRef(null);

    useEffect(() => {
        const canvas = canvasReference.current;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const context = canvas.getContext("2d");
        context.fillRect(0, 0, 100, 100);

        const size = 16;
        for (let x = 0; x < canvas.width; x += size) {
            for (let y = 0; y < canvas.height; y += size) {
                context.fillRect(x, y, 1, 1);
            }
        }
    });

    return <canvas ref={canvasReference} className="editor"></canvas>;
}
