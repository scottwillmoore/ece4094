import { FunctionComponent } from "react";

import { Button } from "./Button";
import { Editor } from "./Editor";

import css from "./App.module.css";

export const App: FunctionComponent = () => {
	return (
		<div className={css.app}>
			<div className={css.topContainer}>
				<Button>Hello, world!</Button>
			</div>
			<div className={css.horizontalContainer}>
				<div className={css.leftPanelContainer}></div>
				<div className={css.editorContainer}>
					<Editor />
				</div>
				<div className={css.rightPanelContainer}></div>
			</div>
		</div>
	);
};
