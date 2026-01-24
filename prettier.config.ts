import type { Config } from "prettier";

const config: Config = {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "none",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "avoid",
    endOfLine: "lf",

    // NOTE: Tailwind plugin must be last in the array (https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins)
    plugins: [
        // Sorts import statements (https://github.com/IanVS/prettier-plugin-sort-imports)
        "@ianvs/prettier-plugin-sort-imports"
    ],

    importOrder: [
        "^react$",
        "^react-dom/",
        "^@tanstack/react-start$",
        "^@tanstack/react-router$",
        "^@tanstack/",
        "",
        "^react-",
        "-react$",
        "",
        "<THIRD_PARTY_MODULES>",
        "",
        "^~/",
        "",
        "^[.]"
    ],
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderTypeScriptVersion: "5.0.0"
};

export default config;
