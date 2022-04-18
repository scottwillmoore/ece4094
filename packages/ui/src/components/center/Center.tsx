import { ForwardRefExoticComponentWithAs, forwardRefWithAs } from "../../utilities";
import { defaultAs } from "../box";
import { Stack, StackProps } from "../stack";

export type CenterProps = Omit<StackProps, "align" | "direction" | "justify">;

export const Center = forwardRefWithAs<typeof defaultAs, CenterProps>(
	({ as = defaultAs, children, ...props }, ref) => (
		<Stack
			align="center"
			as={as}
			justify="center"
			ref={ref}
			{...props}
		>
			{children}
		</Stack>
	)
);

Center.displayName = "Center";
