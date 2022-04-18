import { ForwardRefExoticComponentWithAs, forwardRefWithAs } from "../../utilities";
import { defaultAs } from "../box";
import { Stack, StackProps } from "../stack";

export type RowProps = Omit<StackProps, "direction">;

export const Row = forwardRefWithAs<typeof defaultAs, RowProps>(
	({ as = defaultAs, children, ...props }, ref) => (
		<Stack
			as={as}
			direction="row"
			ref={ref}
			{...props}
		>
			{children}
		</Stack>
	)
);

Row.displayName = "Row";
