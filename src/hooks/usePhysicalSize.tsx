import { useDevicePixelRatio } from "./useDevicePixelRatio";
import { useSize } from "./useSize";

export function usePhysicalSize() {
	const devicePixelRatio = useDevicePixelRatio();
	const { ref, width: cssWidth, height: cssHeight } = useSize();

	const physicalWidth = devicePixelRatio * cssWidth;
	const physicalHeight = devicePixelRatio * cssHeight;

	return {
		ref,
		devicePixelRatio,
		width: physicalWidth,
		height: physicalHeight,
	};
}
