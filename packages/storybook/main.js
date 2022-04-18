module.exports = {
	addons: ["@storybook/addon-essentials", "@storybook/preset-scss", "storybook-dark-mode"],
	core: {
		builder: "webpack5",
	},
	framework: "@storybook/react",
	stories: ["../*/src/**/*.stories.@(js|jsx|ts|tsx)"],
	typescript: {
		reactDocgen: false,
	},
};
