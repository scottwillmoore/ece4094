export const toKebabCase = (string: string) => {
	return string.replace(
		/[A-Z]+(?![a-z])|[A-Z]/g,
		(match, offset) => (offset ? "-" : "") + match.toLowerCase()
	);
};
