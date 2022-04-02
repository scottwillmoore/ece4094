import { FunctionComponent } from "react";
import { Icon, MessageCircle, MousePointer, Move, Settings, ZoomIn } from "react-feather-icons";

import css from "./ToolBar.module.css";

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
