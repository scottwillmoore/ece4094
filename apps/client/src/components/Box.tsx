import {
	ComponentPropsWithRef,
	ElementType,
	ExoticComponent,
	ForwardRefExoticComponent,
	ForwardRefRenderFunction,
	ForwardedRef,
	PropsWithChildren,
	ReactElement,
	forwardRef,
} from "react";

// https://design-system.pluralsight.com/core/iconography
//
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012
//
// https://github.com/geist-org/geist-ui/blob/master/components/button/button.tsx
//
// https://github.com/modulz/stitches/blob/canary/packages/react/types/styled-component.d.ts
//
// https://github.com/mui/material-ui/blob/master/packages/mui-system/src/Box/Box.d.ts
// https://github.com/mui/material-ui/blob/master/packages/mui-types/index.d.ts
//
// https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/components/Box/Box.tsx
// https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/types/Polymorphic.ts
//
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/styled-components/index.d.ts
//
// https://www.radix-ui.com/docs/primitives/utilities/polymorphic
// https://github.com/radix-ui/primitives/blob/main/packages/react/polymorphic/src/polymorphic.ts
// https://www.radix-ui.com/docs/primitives/utilities/slot
//
// https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/
//
// https://codesandbox.io/s/9dxyq?file=/src/PolymorphicComponentGeneric.tsx:3001-3033

type As<T = {}> = ElementType<T>;

type AsElement<T extends As> = T extends keyof HTMLElementTagNameMap
	? HTMLElementTagNameMap[T]
	: T extends keyof SVGElementTagNameMap
	? SVGElementTagNameMap[T]
	: any;

type AsProp<T extends As> = { as?: T };

type Merge<T, U> = T & Omit<U, keyof T>;

type PropsWithAs<T extends As, P> = Merge<AsProp<T> & P, ComponentPropsWithRef<T>>;

// prettier-ignore
export type ExoticComponentWithAs<T extends As, P> = 
	& ExoticComponent<PropsWithAs<T, P>>
	& (<U extends As>(props: PropsWithAs<U, P> & Required<AsProp<U>>) => ReactElement | null);

// prettier-ignore
export type ForwardRefExoticComponentWithAs<T extends As, P> = 
	& ForwardRefExoticComponent<PropsWithAs<T, P>>
	& ExoticComponentWithAs<T, P>;

// prettier-ignore
export type ForwardRefWithAsRenderFunction<T extends As, P> =
	& ForwardRefRenderFunction<AsElement<T>, PropsWithAs<T, P>>
	& ((props: PropsWithChildren<PropsWithAs<T, P>>, ref: ForwardedRef<AsElement<T>>) => ReactElement | null);

export const forwardRefWithAs = <T extends As, P = {}>(
	render: ForwardRefWithAsRenderFunction<T, P>
) => forwardRef(render) as ForwardRefExoticComponentWithAs<T, P>;

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
