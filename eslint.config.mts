import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { ignores: [".next/**"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
     ...pluginReact.configs.flat.recommended,
     settings: {
        react: {
           version: "detect"
        }
     },
     rules: {
        "react/react-in-jsx-scope": "off",
        ...pluginReact.configs.flat.recommended.rules
     }
  },
  ...tseslint.configs.recommended,
  {
     rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off"
     }
  }
];

