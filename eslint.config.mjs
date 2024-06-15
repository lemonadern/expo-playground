import path from "path";
import { fileURLToPath } from "url";
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
    {
        ignores: [
            "babel.config.js",
        ]
    },
    js.configs.recommended,
    ...compat.plugins("expo"),
]

export default config;