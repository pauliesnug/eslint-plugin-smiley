import {ESLintUtils} from "@typescript-eslint/utils";

export const createRule = ESLintUtils.RuleCreator(
    () =>
        `https://github.com/pauliesnug/eslint-plugin-smiley`
);

export const smileyRule: unknown = createRule({
    name: "smiley",
    meta: {
        docs: {
            description:
                "Meow",
            recommended: "error",
            requiresTypeChecking: false
        },
        messages: {
            "missing-smiley": "Must have smiley."
        },
        type: "problem",
        schema: {}
    },
    defaultOptions: [],
    create: function (context) {
        return {
            Identifier: (node) => {
                if (node) {
                    if (!node.name.endsWith("// :)")) {
                        context.report({node: node, messageId: "missing-smiley"});
                    }
                }
            }
        }
    }
})