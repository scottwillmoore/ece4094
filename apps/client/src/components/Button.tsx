import {
	ComponentProps,
	ComponentPropsWithRef,
	ElementType,
	ForwardedRef,
	FunctionComponent,
	PropsWithChildren,
	ReactElement,
	VoidFunctionComponent,
	forwardRef,
} from "react";

import { Box, forwardRefWithAs } from "./Box";

import css from "./Button.module.css";

const defaultAs = "button";

export const Button = forwardRefWithAs<typeof defaultAs>(
	({ as = defaultAs, children, className, ...props }, ref) => {
		return (
			<Box
				as={as}
				className={css.button}
				ref={ref}
				{...props}
			>
				{children}
			</Box>
		);
	}
);

Button.displayName = "Button";
