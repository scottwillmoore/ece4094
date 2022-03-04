import React, { useLayoutEffect } from "react";

import { useCanvas } from "../hooks/useCanvas";
import css from "./Editor.module.css";

export function Editor() {
	const { ref, canvas, context, width, height } = useCanvas();

	useLayoutEffect(() => {
		if (context) {
			context.clearRect(0, 0, width, height);
			context.fillRect(0, 0, 100, 100);
		}
	}, [canvas, context, width, height]);

	return (
		<div className={css.editor}>
			<canvas className={css.viewport} ref={ref}></canvas>
		</div>
	);
}
