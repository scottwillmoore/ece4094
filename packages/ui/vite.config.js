const path = require("path");
const reactPlugin = require("@vitejs/plugin-react");

module.exports = {
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/index.tsx"),
			name: "ece4094_ui",
			fileName: (format) => {
				let extension;

				switch (format) {
					case "es":
						extension = "mjs";
						break;

					case "umd":
						extension = "js";
						break;

					default:
						throw new Error("Unsupported format");
				}

				return `index.${extension}`;
			},
			formats: ["es", "umd"],
		},
	},
	plugins: [reactPlugin()],
};
