import { useLayoutEffect } from "react";

export function useAnimationFrame(callback: FrameRequestCallback) {
	useLayoutEffect(() => {
		let animationFrameId: number;

		const handleAnimationFrame: FrameRequestCallback = (...parameters) => {
			callback(...parameters);
			animationFrameId = requestAnimationFrame(handleAnimationFrame);
		};

		animationFrameId = requestAnimationFrame(handleAnimationFrame);

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [callback]);
}
