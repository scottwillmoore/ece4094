import { ForwardRefExoticComponentWithAs, forwardRefWithAs } from "../../utilities";
import { defaultAs } from "../box";
import { Stack, StackProps } from "../stack";

export type ColumnProps = Omit<StackProps, "direction">;

export const Column = forwardRefWithAs<typeof defaultAs, ColumnProps>(
	({ as = defaultAs, children, ...props }, ref) => (
		<Stack
			as={as}
			direction="column"
			ref={ref}
			{...props}
		>
			{children}
		</Stack>
	)
);

Column.displayName = "Column";
