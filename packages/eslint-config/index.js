/** Shared ESLint pieces for Pulse Next.js apps (flat config). */

export const pulseGlobalIgnores = [
  ".next/**",
  "out/**",
  "build/**",
  "dist/**",
  "next-env.d.ts",
  "coverage/**",
];

/** Firebase subscribe / localStorage hydrate patterns used across Pulse. */
export const pulseReactHooksRules = {
  "react-hooks/set-state-in-effect": "off",
  "react-hooks/refs": "off",
};

/**
 * Baseline rules layered on eslint-config-next.
 * Apps spread these after nextVitals / nextTs.
 */
export const pulseBaselineRules = {
  ...pulseReactHooksRules,
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
  "no-console": ["warn", { allow: ["warn", "error"] }],
};

/**
 * Helper: build a flat-config fragment apps can append.
 * @param {import('eslint').Linter.Config[]} nextConfigs - e.g. [...nextVitals, ...nextTs]
 */
export function pulseNextFlatConfig(nextConfigs) {
  return [
    ...nextConfigs,
    { ignores: pulseGlobalIgnores },
    { rules: pulseBaselineRules },
  ];
}
