import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

import "../../index.css";

export default {
	component: Button,
	title: "Button",
};

const Template: any = (props: any) => <Button {...props}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
	color: "blue",
	size: "medium",
};
