import React from "react";

import css from "./App.module.css";
import { Editor } from "./components/Editor";

export function App() {
	return (
		<div className={css.app}>
			<Editor />
		</div>
	);
}
