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

export type As<T = {}> = ElementType<T>;

type AsElement<T extends As> = T extends keyof HTMLElementTagNameMap
	? HTMLElementTagNameMap[T]
	: T extends keyof SVGElementTagNameMap
	? SVGElementTagNameMap[T]
	: any;

export type AsProp<T extends As> = { as?: T };

type Merge<T, U> = T & Omit<U, keyof T>;

export type PropsWithAs<T extends As, P> = Merge<AsProp<T> & P, ComponentPropsWithRef<T>>;

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
