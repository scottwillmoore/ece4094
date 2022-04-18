import { ForwardRefExoticComponentWithAs, forwardRefWithAs, toKebabCase } from "../../utilities";

export type AriaAttributes = { [key: `aria-${string}`]: string };
export type AriaSet = { [key: string]: AriaValue };
export type AriaValue = boolean | null | number | string | undefined;

const toAriaAttributes = (ariaSet?: AriaSet) => {
	const ariaAttributes: AriaAttributes = {};
	if (ariaSet) {
		for (const name in ariaSet) {
			let value = ariaSet[name];
			if (value) {
				if (typeof value == "boolean") {
					value = "";
				} else if (typeof value == "number") {
					value = value.toString();
				}
				ariaAttributes[`aria-${toKebabCase(name)}`] = value;
			}
		}
	}
	return ariaAttributes;
};

export type ClassList = ClassValue[];
export type ClassSet = { [key: string]: boolean };
export type ClassValue = ClassList | ClassSet | null | string | undefined;

const pushClassValue = (classNames: string[], value: ClassValue) => {
	if (typeof value == "string") {
		classNames.push(value);
	} else if (typeof value == "object") {
		if (value instanceof Array) {
			for (const childValue of value) {
				pushClassValue(classNames, childValue);
			}
		} else {
			for (const className in value) {
				if (value[className]) {
					classNames.push(className);
				}
			}
		}
	}
};

const toClassName = (classList?: ClassList) => {
	let classNames: string[] = [];
	if (classList) {
		for (const value of classList) {
			pushClassValue(classNames, value);
		}
	}
	return classNames.join(" ");
};

export type DataAttributes = { [key: `data-${string}`]: string };
export type DataSet = { [key: string]: DataValue };
export type DataValue = boolean | null | number | string | undefined;

const toDataAttributes = (dataSet?: DataSet) => {
	const dataAttributes: DataAttributes = {};
	if (dataSet) {
		for (const name in dataSet) {
			let value = dataSet[name];
			if (value) {
				if (typeof value == "boolean") {
					value = "";
				} else if (typeof value == "number") {
					value = value.toString();
				}
				dataAttributes[`data-${toKebabCase(name)}`] = value;
			}
		}
	}
	return dataAttributes;
};

export type BoxProps = {
	ariaSet?: AriaSet;
	classList?: ClassList;
	dataSet?: DataSet;
};

export const defaultAs = "div";

export const Box = forwardRefWithAs<typeof defaultAs, BoxProps>(
	({ ariaSet, as: Component = defaultAs, children, classList, dataSet, ...props }, ref) => (
		<Component
			className={toClassName(classList)}
			ref={ref}
			{...props}
			{...toAriaAttributes(ariaSet)}
			{...toDataAttributes(dataSet)}
		>
			{children}
		</Component>
	)
);

Box.displayName = "Box";
