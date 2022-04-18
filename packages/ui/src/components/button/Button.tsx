import { As, ForwardRefExoticComponentWithAs, forwardRefWithAs } from "../../utilities";
import { Box } from "../box";

import css from "./Button.module.scss";

const defaultAs: As = "button";

export type ButtonColor = "blue" | "gray" | "green" | "red";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
	color: ButtonColor;
	size: ButtonSize;
};

export const Button = forwardRefWithAs<typeof defaultAs, ButtonProps>(
	({ as = defaultAs, children, className, color, size, ...props }, ref) => {
		return (
			<Box
				as={as}
				classList={[css.button]}
				dataSet={{ color, size }}
				ref={ref}
				{...props}
			>
				{children}
			</Box>
		);
	}
);

Button.displayName = "Button";
