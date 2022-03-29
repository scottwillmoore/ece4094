import { FunctionComponent, useId } from "react";

import { Transform } from "./Editor";

export type GridType = "cross" | "dot" | "graph";

export type GridProperties = {
	size: number;
	transform: Transform;
	type: GridType;
};

export const Grid: FunctionComponent<GridProperties> = ({
	transform,
	size: unscaledSize,
	type,
}) => {
	const patternId = useId();
	const patternUrl = `url(#${patternId})`;

	const size = transform.scale * unscaledSize;
	const halfSize = size / 2;

	const x = (transform.x - halfSize) % size;
	const y = (transform.y - halfSize) % size;

	let pattern: JSX.Element;
	switch (type) {
		case "cross":
			const crossSize = 2.5;
			const crossThickness = 0.5;
			pattern = (
				<>
					<line
						x1={halfSize - crossSize}
						y1={halfSize - crossSize}
						x2={halfSize + crossSize}
						y2={halfSize + crossSize}
						strokeWidth={crossThickness}
						className="stroke-indigo-300 dark:stroke-indigo-900"
					/>

					<line
						x1={halfSize - crossSize}
						y1={halfSize + crossSize}
						x2={halfSize + crossSize}
						y2={halfSize - crossSize}
						strokeWidth={crossThickness}
						className="stroke-indigo-300 dark:stroke-indigo-900"
					/>
				</>
			);
			break;

		case "dot":
			const dotSize = 1;
			pattern = (
				<circle
					cx={halfSize}
					cy={halfSize}
					r={dotSize}
					className="fill-indigo-300 dark:fill-indigo-900"
				/>
			);
			break;

		case "graph":
			const graphThickness = 0.25;
			pattern = (
				<>
					<line
						x1={0}
						y1={halfSize}
						x2={size}
						y2={halfSize}
						strokeWidth={graphThickness}
						className="stroke-indigo-300 dark:stroke-indigo-900"
					/>

					<line
						x1={halfSize}
						y1={0}
						x2={halfSize}
						y2={size}
						strokeWidth={graphThickness}
						className="stroke-indigo-300 dark:stroke-indigo-900"
					/>
				</>
			);
			break;
	}

	return (
		<svg className="absolute h-full w-full">
			<defs>
				<pattern
					id={patternId}
					x={x}
					y={y}
					width={size}
					height={size}
					patternUnits="userSpaceOnUse"
				>
					{pattern}
				</pattern>
			</defs>

			<rect
				x="0"
				y="0"
				width="100%"
				height="100%"
				fill={patternUrl}
			></rect>
		</svg>
	);
};
