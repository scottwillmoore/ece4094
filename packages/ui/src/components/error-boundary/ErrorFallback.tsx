import { Box } from "../box";
import { Center } from "../center";
import { FallbackComponent } from "./ErrorBoundary";

import css from "./ErrorFallback.module.scss";

export const ErrorFallback: FallbackComponent = ({ error, reset }) => {
	return (
		<Center classList={[css.errorFallback]}>
			<Box as="pre">{error.stack}</Box>
		</Center>
	);
};
