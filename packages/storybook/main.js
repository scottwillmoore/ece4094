module.exports = {
	addons: ["@storybook/addon-essentials", "storybook-css-modules-preset", "storybook-dark-mode"],
	framework: "@storybook/react",
	stories: ["../*/src/**/*.stories.@(js|jsx|ts|tsx)"],
};
