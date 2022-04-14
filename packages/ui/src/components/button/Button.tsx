import { forwardRefWithAs } from "../../utilities/forwardRefWithAs";
import { Box } from "../box/Box";

import css from "./Button.module.css";

const defaultAs = "button";

export type ButtonColor = "blue" | "gray" | "green" | "red";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProperties = {
	color: ButtonColor;
	size: ButtonSize;
};

export const Button = forwardRefWithAs<typeof defaultAs, ButtonProperties>(
	({ as = defaultAs, children, className, color, size, ...props }, ref) => {
		return (
			<Box
				as={as}
				className={[css.button, css[color], css[size]]}
				ref={ref}
				{...props}
			>
				{children}
			</Box>
		);
	}
);

Button.displayName = "Button";
