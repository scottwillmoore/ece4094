import { useEffect, useState } from "react";

export function useDevicePixelRatio() {
	const [devicePixelRatio, setDevicePixelRatio] = useState(
		window.devicePixelRatio
	);

	useEffect(() => {
		const mediaQuery = `(resolution: ${devicePixelRatio.toFixed(0)}x)`;
		const mediaQueryList = window.matchMedia(mediaQuery);
		const handleChange = () => setDevicePixelRatio(window.devicePixelRatio);
		mediaQueryList.addEventListener("change", handleChange, { once: true });
		return () => mediaQueryList.removeEventListener("change", handleChange);
	}, [devicePixelRatio]);

	return devicePixelRatio;
}
