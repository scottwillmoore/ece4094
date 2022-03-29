import {
	FunctionComponent,
	PointerEventHandler,
	useCallback,
	useState,
	WheelEventHandler,
} from "react";
import { X } from "react-feather";

import { Grid } from "./Grid";

export type Transform = {
	scale: number;
	x: number;
	y: number;
};

export const Editor: FunctionComponent = () => {
	const [transform, setTransform] = useState<Transform>({ scale: 1, x: 0, y: 0 });

	const [previousTransform, setPreviousTransform] = useState<Transform>(transform);
	const [isDown, setIsDown] = useState(false);
	const [downPosition, setDownPosition] = useState({ x: 0, y: 0 });

	const handleDown: PointerEventHandler = useCallback(
		({ button, clientX, clientY, currentTarget, pointerId }) => {
			if (button == 0 || button == 1) {
				currentTarget.setPointerCapture(pointerId);
				setPreviousTransform(transform);
				setIsDown(true);
				setDownPosition({
					x: clientX,
					y: clientY,
				});
			}
		},
		[transform]
	);

	const handleMove: PointerEventHandler = useCallback(
		({ clientX, clientY }) => {
			if (isDown) {
				const x = previousTransform.x + (clientX - downPosition.x);
				const y = previousTransform.y + (clientY - downPosition.y);
				setTransform(({ scale }) => ({ scale, x, y }));
			}
		},
		[previousTransform, isDown, downPosition]
	);

	const handleUp: PointerEventHandler = useCallback(() => {
		setIsDown(false);
	}, []);

	const handleWheel: WheelEventHandler = useCallback(({ buttons, deltaX, deltaY }) => {
		if (deltaY < 0) {
			setTransform(({ scale, x, y }) => ({ scale: scale + 0.1, x, y }));
		} else if (deltaY > 0) {
			setTransform(({ scale, x, y }) => ({ scale: scale - 0.1, x, y }));
		}
	}, []);

	return (
		<div
			className="relative h-full w-full select-none bg-white dark:bg-gray-900"
			onPointerDown={handleDown}
			onPointerMove={handleMove}
			onPointerUp={handleUp}
			onWheel={handleWheel}
		>
			{/* Major grid */}
			<Grid
				transform={transform}
				type="dot"
				size={32}
			/>

			<svg className="absolute h-full w-full">
				<g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
					<text
						x={0}
						y={0}
						className="fill-black dark:fill-white"
					>
						{transform.scale}, {transform.x}, {transform.y}
					</text>

					<rect
						x={128}
						y={128}
						width={128}
						height={64}
						className="fill-indigo-500"
					/>
				</g>
			</svg>

			{/* Minor grid */}
			{/* <Grid
				transform={transform}
				type="graph"
				size={128}
			/> */}
		</div>
	);
};
