import { ChangeEventHandler, FunctionComponent, useCallback, useEffect, useState } from "react";
import { Awareness as AwarenessProtocol } from "y-protocols/awareness";
import { WebsocketProvider } from "y-websocket";
import { Array as SharedArray, Doc as SharedDocument, Map as SharedMap } from "yjs";

import css from "./Awareness.module.css";

// https://docs.yjs.dev/api/about-awareness
// https://github.com/tandem-pt/zustand-yjs
// https://github.com/joebobmiles/zustand-middleware-yjs
// https://github.com/sep2/immer-yjs

export const Awareness: FunctionComponent = () => {
	const [value, setValue] = useState<number>();

	const [updateValue, setUpdateValue] = useState<(newValue: number) => void>();

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(event) => {
			const newValue = Number.parseInt(event.target.value);
			updateValue?.(newValue);
		},
		[updateValue]
	);

	useEffect(() => {
		const sharedDocument = new SharedDocument();

		const awarenessProvider = new AwarenessProtocol(sharedDocument);

		const serverUrl = "ws://localhost:1234";
		const roomName = "sharedRoom";
		const websocketProvider = new WebsocketProvider(serverUrl, roomName, sharedDocument, {
			awareness: awarenessProvider,
			connect: true,
		});

		const sharedMap = sharedDocument.getMap<number>("sharedMap");
		sharedMap.observe(() => {
			setValue(sharedMap.get("sharedValue"));
		});

		const sharedValue = sharedMap.get("sharedValue");
		if (sharedValue) {
			setValue(sharedValue);
		} else {
			sharedMap.set("sharedValue", 0);
		}

		setUpdateValue(() => {
			return (newValue: number) => {
				sharedMap.set("sharedValue", newValue);
			};
		});

		return () => {
			websocketProvider.destroy();
			awarenessProvider.destroy();
			sharedDocument.destroy();
		};
	}, []);

	return (
		<div className={css.document}>
			<input
				className={css.input}
				onChange={handleChange}
				type="number"
				value={value ?? 0}
			/>
		</div>
	);
};
