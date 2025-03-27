import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  {
    languageOptions: {
      globals: globals.browser, // Define browser globals
    },
    rules: {
      // Any additional rules you want to add can be added here
    },
  },
  pluginJs.configs.recommended, // Include @eslint/js recommended config
  eslintConfigPrettier, // Include eslint-config-prettier to disable Prettier conflicts
];
