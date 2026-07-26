# Contributing

## Ground rules

- **Tokens first.** Never hardcode a color, radius, or font stack in a component — add or reuse a custom property in `tokens/` and reference it via `var(--…)`. If a value doesn't exist as a token, that's the bug to fix.
- **Match the source.** Values come from [cloudnativesdq/website](https://github.com/cloudnativesdq/website) (`src/app/globals.css`, `tailwind.config.ts`, `src/components/`). Copy exact numbers; don't snap them to a 4/8px grid.
- **Don't invent components.** New primitives should correspond to something the product actually renders. Anything added for convenience goes in `readme.md` under "Intentional additions" with a one-line reason.

## Adding a component

Each component is a directory-mate trio:

```
components/<group>/MyThing.jsx        # export function MyThing(props) {…}
components/<group>/MyThing.d.ts       # props interface
components/<group>/MyThing.prompt.md  # one-line "what & when", usage example, variants
```

Plus one `@dsCard`-tagged HTML file per directory showing the variants densely (see `components/core/core.card.html`). Import React only — no npm packages, no CSS-in-JS.

## Adding a token

Add it to the right file in `tokens/` (`colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`), under `:root` for the dark default, and — if it's a surface/text/border/accent token — mirror it in the `[data-theme="light"]` block so both themes stay in sync.

## Adding a template

One folder per template: `templates/<slug>/` with a `<Slug>.dc.html` entry and a sibling `ds-base.js` that points at this repo's `styles.css` + `_ds_bundle.js`.

## Generated files

`_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` are generated from the sources. They're committed so consumers can use the repo directly from a CDN, but never hand-edit them.

## Fonts and icons

Anything added under `assets/` must be recorded in `ATTRIBUTION.md` with its license. Fonts need their OFL text alongside them.
