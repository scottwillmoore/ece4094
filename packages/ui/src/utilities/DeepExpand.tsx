export type DeepExpand<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: DeepExpand<O[K]> }
		: never
	: T;
