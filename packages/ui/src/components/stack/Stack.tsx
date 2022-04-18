import { ForwardRefExoticComponentWithAs, forwardRefWithAs } from "../../utilities";
import { Box, BoxProps, defaultAs } from "../box";

import css from "./Stack.module.scss";

export type StackAlign = "baseline" | "center" | "end" | "normal" | "start" | "stretch";
export type StackDirection = "column" | "row";
// prettier-ignore
export type StackJustify = "around" | "between" | "center" | "end" | "normal" | "even" | "start" | "stretch";

export type StackProps = BoxProps & {
	align?: StackAlign;
	direction?: StackDirection;
	inline?: boolean;
	justify?: StackJustify;
};

const defaultAlign: StackAlign = "normal";
const defaultDirection: StackDirection = "row";
const defaultInline: boolean = false;
const defaultJustify: StackJustify = "normal";

export const Stack = forwardRefWithAs<typeof defaultAs, StackProps>(
	(
		{
			align = defaultAlign,
			as = defaultAs,
			children,
			classList,
			dataSet,
			direction = defaultDirection,
			inline = defaultInline,
			justify = defaultJustify,
			...props
		},
		ref
	) => (
		<Box
			as={as}
			classList={[...(classList || []), css.stack]}
			dataSet={{ ...(dataSet || {}), align, direction, inline, justify }}
			ref={ref}
			{...props}
		>
			{children}
		</Box>
	)
);

Stack.displayName = "Stack";
