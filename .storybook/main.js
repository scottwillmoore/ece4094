module.exports = {
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"storybook-dark-mode",
	],
	framework: "@storybook/react",
	stories: ["../apps/*/src/**/*.preview.mdx", "../apps/*/src/**/*.preview.@(js|jsx|ts|tsx)"],
};
