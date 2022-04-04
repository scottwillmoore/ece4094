import { forwardRefWithAs } from "../utilities/forwardRefWithAs";

export type ClassName = { [key: string]: boolean } | string[] | string | null | undefined;

const toClassName = (value: ClassName) => {
	let classNames: string[] = [];

	if (typeof value == "string") {
		classNames.push(value);
	} else if (typeof value == "object") {
		if (value instanceof Array) {
			for (const className of value) {
				classNames.push(className);
			}
		} else {
			for (const className in value) {
				if (value[className]) {
					classNames.push(className);
				}
			}
		}
	}

	const className = classNames.join(" ");

	return className;
};

export type BoxProps = {
	className?: ClassName;
};

const defaultAs = "div";

export const Box = forwardRefWithAs<typeof defaultAs, BoxProps>(
	({ as: Component = defaultAs, children, className, ...props }, forwardedRef) => {
		return (
			<Component
				className={toClassName(className)}
				ref={forwardedRef}
				{...props}
			>
				{children}
			</Component>
		);
	}
);

Box.displayName = "Box";
