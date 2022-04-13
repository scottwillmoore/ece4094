import { FallbackComponent } from "./ErrorBoundary";

import css from "./ErrorFallback.module.css";

export const ErrorFallback: FallbackComponent = ({ error, reset }) => {
	return (
		<div className={css.errorFallback}>
			<div className={css.errorContainer}>
				<h1 className={css.errorTitle}>Error!</h1>

				<pre className={css.errorMessage}>{error.stack}</pre>

				<button
					className={css.resetButton}
					onClick={reset}
				>
					Reset
				</button>
			</div>
		</div>
	);
};
