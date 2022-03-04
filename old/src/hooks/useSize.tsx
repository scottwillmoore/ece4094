import { useCallback, useState } from "react";

import { useRefEffect } from "./useRefEffect";

const initialState = { width: 0, height: 0 };

export function useSize<T extends HTMLElement>() {
	const [size, setSize] = useState(initialState);

	const handleResize = useCallback<ResizeObserverCallback>((entries) => {
		if (entries[0]) {
			const { width, height } = entries[0].contentRect;
			setSize({ width, height });
		}
	}, []);

	const ref = useRefEffect<T>((element) => {
		const { width, height } = element.getBoundingClientRect();
		setSize({ width, height });

		const resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(element);

		return () => {
			resizeObserver.disconnect();
		};
	});

	return { ref, ...size };
}
