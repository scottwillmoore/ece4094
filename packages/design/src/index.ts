import assert from "assert/strict";
import styleDictionary, { Config } from "style-dictionary";

const defaultBasePxFontSize = 16;
const valuePrecision = 4;

styleDictionary.registerTransform({
	name: "size/pxToRem",
	type: "value",

	matcher: ({ attributes }) => attributes!.category === "size",

	transformer: ({ path, value }, options) => {
		const formattedPath = path.join(".");
		assert(Number.isFinite(value), `The token "${formattedPath}" has a non-finite value`);

		const baseValue = options?.basePxFontSize || defaultBasePxFontSize;
		assert(Number.isFinite(baseValue), `The option "basePxFontSize" has a non-finite value`);

		return `${(value / baseValue).toFixed(valuePrecision)}rem`;
	},
});

const commonConfig: Config = {
	platforms: {},
};

const groups = ["bases/**/*.json", "themes", "components"];

// for group in groups, for file/folder in group, emit css+json for each, accumulate tokens with exportPlatform, continue

styleDictionary
	.extend({
		source: ["./src/**/*.json"],
		platforms: {
			web: {
				buildPath: "./dist/",
				files: [
					{
						destination: "index.scss",
						format: "css/variables",
						options: {
							outputReferences: true,
							selector: "@mixin test",
							showFileHeader: false,
						},
					},
					{
						format: "json/nested",
						destination: "index.json",
					},
				],
				transforms: ["attribute/cti", "name/cti/kebab", "size/pxToRem", "color/css"],
			},
		},
	})
	.buildAllPlatforms();
