import { Component, ErrorInfo, ComponentType, PropsWithChildren } from "react";

export type FallbackComponentProps = {
	error: Error;
	reset: () => void;
};

export type FallbackComponent = ComponentType<FallbackComponentProps>;

export type ErrorBoundaryProps = PropsWithChildren<{
	fallbackComponent: FallbackComponent;
	onError?: (error: Error, errorInfo: ErrorInfo) => void;
	onReset?: () => void;
}>;

export type ErrorBoundaryState = {
	error: Error | null;
};

const initialState: ErrorBoundaryState = {
	error: null,
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	static getDerivedStateFromError(error: Error) {
		return { error };
	}

	override state = initialState;

	override componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
		this.props.onError?.(error, errorInfo);
	};

	override render = () => {
		if (this.state.error !== null) {
			const FallbackComponent = this.props.fallbackComponent;
			return (
				<FallbackComponent
					error={this.state.error}
					reset={this.reset}
				/>
			);
		}

		return this.props.children;
	};

	reset = () => {
		this.props.onReset?.();
		this.setState(initialState);
	};
}
