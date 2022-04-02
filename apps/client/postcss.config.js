const presetEnvPlugin = require("postcss-preset-env");

module.exports = {
	plugins: [
		presetEnvPlugin({
			enableClientSidePolyfills: false,
		}),
	],
};
