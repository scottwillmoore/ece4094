import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ErrorFallback } from "./components/ErrorFallback";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Failed to get the root element");
}

const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<ErrorBoundary fallbackComponent={ErrorFallback}>
			<App />
		</ErrorBoundary>
	</StrictMode>
);
