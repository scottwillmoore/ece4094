import { FunctionComponent } from "react";

import { Box, Center, Column, ErrorBoundary, Row } from "@ece4094/ui";

import { Editor } from "../editor/Editor";

import css from "./App.module.scss";

export const App: FunctionComponent = () => (
	<ErrorBoundary>
		<Column classList={[css.app]}>
			<Row classList={[css.topPanel]}>
				<Center classList={[css.logo]}>A</Center>
			</Row>
			<Row classList={[css.row]}>
				<Box classList={[css.leftPanel]}></Box>
				<Box classList={[css.editor]}>
					<Editor />
				</Box>
				<Box classList={[css.rightPanel]}></Box>
			</Row>
		</Column>
	</ErrorBoundary>
);
