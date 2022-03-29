import { Icon, MessageCircle, MousePointer, Move, Settings, ZoomIn } from "react-feather";

import { FunctionComponent } from "react";

import { Editor } from "./Editor";

export type ToolButtonProps = {
	icon: Icon;
};

export const ToolButton: FunctionComponent<ToolButtonProps> = ({ icon: Icon }) => {
	return (
		<div className="rounded border border-gray-200 p-2 dark:border-indigo-900">
			<Icon
				className="stroke-gray-800 dark:stroke-indigo-100"
				strokeWidth={2}
				size={24}
			/>
		</div>
	);
};

export const ToolBar: FunctionComponent = () => {
	return (
		<div className="flex h-full flex-col justify-between">
			<div className="space-y-4 p-4">
				<ToolButton icon={MousePointer} />
				<ToolButton icon={Move} />
				<ToolButton icon={MessageCircle} />
				<ToolButton icon={ZoomIn} />
			</div>

			<div className="space-y-4 p-4">
				<ToolButton icon={Settings} />
			</div>
		</div>
	);
};

export const App: FunctionComponent = () => {
	return (
		<div className="flex h-full w-full flex-col bg-white dark:bg-gray-900">
			<div className="flex h-16 flex-none border-b border-gray-100 p-2 dark:border-gray-800"></div>
			<div className="flex flex-1">
				<div className="flex-none border-r border-gray-100 dark:border-gray-800">
					<ToolBar />
				</div>
				<div className="flex-1">
					<Editor />
				</div>
				<div className="w-96 flex-none border-l border-gray-100 p-2 dark:border-gray-800"></div>
			</div>
			<div className="flex h-8 flex-none border-t border-gray-100 p-2 dark:border-gray-800"></div>
		</div>
	);
};
