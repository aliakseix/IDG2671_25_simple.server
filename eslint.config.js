import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ["node_modules"]
	},
	{languageOptions: { globals: {...globals.browser, ...globals.node} }},
	pluginJs.configs.recommended,
	{
		rules: {
				"no-unused-vars": "warn",
				"semi": [2, "always"],
				"no-empty": "warn"
		}
	}
];