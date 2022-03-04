import { RefCallback, useCallback, useLayoutEffect, useState } from "react";

import { usePhysicalSize } from "./usePhysicalSize";
import { useRefEffect } from "./useRefEffect";

function useMergedRefCallbacks<T>(refs: RefCallback<T>[]): RefCallback<T> {
	return useCallback((element) => {
		for (const ref of refs) {
			ref(element);
		}
	}, []);
}

export function useCanvas() {
	const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

	const { ref: sizeRef, width, height } = usePhysicalSize();

	const contextRef = useRefEffect<HTMLCanvasElement>((canvas) => {
		setCanvas(canvas);

		const context = canvas.getContext("2d");
		if (context) {
			setContext(context);
		}
	});

	useLayoutEffect(() => {
		if (canvas) {
			canvas.width = width;
			canvas.height = height;
		}
	}, [canvas, width, height]);

	const ref = useMergedRefCallbacks([sizeRef, contextRef]);

	return {
		ref,
		canvas,
		context,
		width,
		height,
	};
}
