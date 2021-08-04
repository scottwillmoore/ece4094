import { RefCallback, useCallback, useRef } from "react";

type Destructor = () => void;
export type RefEffectCallback<T> = (element: T) => void | Destructor;

export function useRefEffect<T>(effect: RefEffectCallback<T>): RefCallback<T> {
	const destructorRef = useRef<Destructor | null>(null);

	const ref = useCallback<RefCallback<T>>(
		(element) => {
			if (destructorRef.current) {
				destructorRef.current();
				destructorRef.current = null;
			}

			if (element) {
				const destructor = effect(element);
				if (destructor) {
					destructorRef.current = destructor;
				}
			}
		},
		[effect]
	);

	return ref;
}
