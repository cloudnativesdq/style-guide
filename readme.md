# Cloud Native Santo Domingo — Design System

Design system for **Cloud Native Santo Domingo (CNCF SDQ)**, the CNCF-affiliated community group based in Santo Domingo, Dominican Republic. It powers community-facing design work — the community website, event graphics, decks, social posts — with a shared visual language: CNCF-community conventions plus a small set of Dominican-heritage color accents.

## Sources

- **Website codebase (primary source):** [`cloudnativesdq/website`](https://github.com/cloudnativesdq/website) — Next.js 16 + Tailwind + shadcn/ui site for the community. All tokens, the component inventory, and the UI kit below were built by reading this repo directly (`globals.css`, `tailwind.config.ts`, and the component source in `src/components/`).
- **CNCF brand guidelines:** https://www.cncf.io/brand-guidelines/ — the parent foundation's identity rules (this is a *community group* identity, not the CNCF mark itself; don't reuse the CNCF logo).
- **CNCF artwork repo:** https://github.com/cncf/artwork — canonical CNCF/Kubernetes/project logos and usage rules.
- **CNCF community groups repo:** https://github.com/cncf/communitygroups — the community-group program this chapter belongs to.
- **CNCF Foundation style guide:** https://github.com/cncf/foundation/blob/main/style-guide.md — voice/tone and trademark rules referenced for the CONTENT FUNDAMENTALS section below.
- **CNCF community platform:** https://community.cncf.io/cloud-native-santo-domingo/ — the chapter's official event listings; real event copy here shows a warmer, emoji/slang-heavy voice than the website (see Content Fundamentals).
- **Instagram:** https://www.instagram.com/cncfsdq/ and **LinkedIn:** https://www.linkedin.com/company/cloudnativesdq/ — could not be fetched directly in this session (no domain access); see Caveats.
- **Dominican patriotic symbols:** https://www.presidencia.gob.do/acerca-de-rd/simbolos-patrios — official guidance on the flag, shield and anthem. **We use this only as color inspiration** (ultramarine blue, vermillion red) — this design system never reproduces the flag or coat of arms, which are protected national symbols with their own legal usage rules (Law 210-19).

If you have access to these repos, read them directly for anything this system doesn't cover — they're the ground truth this was built from.

## What's in here

- `styles.css` + `tokens/` — CSS custom properties: colors, type, spacing, effects, fonts. Link `styles.css` alone; it pulls in everything else.
- `components/core/` — Button, Badge, Card (generic shadcn-style primitives, restyled to the brand's glass surfaces).
- `components/patterns/` — EventCard, OrganizerCard, StatPill (site-specific composite cards).
- `components/navigation/` — NavLink, SocialIconButton.
- `ui_kits/website/` — interactive homepage recreation (nav, hero, events, team, footer) with a working ES/EN language toggle.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand surfaces/motion) shown in the Design System tab.
- `assets/` — hero image, OG image, and copied icon SVGs (Lucide + Simple Icons). No logo file — see caveats.
- `templates/` — event page, conference page, and slide deck templates.
- Light/dark theming — `[data-theme="light"]` opt-in on any container; see Visual Foundations.

## Components

| Component | Group | What it's for |
|---|---|---|
| `Button` | core | Primary CTA (gradient+glow), secondary (glass), outline, ghost, destructive, link |
| `Badge` | core | Uppercase pill — event type tags, sold-out/spots-remaining flags |
| `Card` / `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` | core | Generic glass card shell |
| `EventCard` | patterns | Meetup/conference listing card |
| `OrganizerCard` | patterns | Team member card (tilted photo) |
| `StatPill` | patterns | Hero metric pill (icon + number + label) |
| `Input` / `Textarea` / `Label` / `Select` / `Switch` | forms | Contact-form fields and event filters |
| `Dialog` / `Toast` / `Tooltip` | feedback | Event-detail modal, send confirmations, hover hints |
| `NavLink` | navigation | Navbar link, animated underline |
| `SocialIconButton` | navigation | Footer social/contact icon button |

### Intentional scope note
The codebase ships the full `shadcn/ui` primitive library (49 components in `src/components/ui/`). The families the site actually uses are now all covered above — Button, Badge, Card, Input, Label, Textarea, Select, Switch, Dialog, Tooltip, Toast (Sonner) — each traced to its source file. The remainder (Accordion, Breadcrumb, Carousel, Chart, Command, Menubar, Pagination, Resizable, Sidebar, …) are stock, unmodified Radix wrappers the product doesn't render; pull them from the source repo if ever needed — the tokens here already match their expected `--radius`/`--border`/`--card` variables.

## Content fundamentals

**Bilingual, Spanish-first.** The site's default language is Spanish (`es`), with a one-tap toggle to English — copy is fully parallel in both, never machine-translated afterthought. Example: *"Formando a la próxima generación de ingenieros en República Dominicana"* / *"Training the next generation of engineers in the Dominican Republic."*

**Voice:** direct, active, invitational — "Únete a la Comunidad" ("Join the Community"), never passive corporate-speak. Second person ("¿Tienes un tema interesante?" — "Have an interesting topic?") when addressing the reader directly; first-person-plural "we/us" framing for the organizers ("Contáctanos", "Nuestro Equipo").
**Casing:** Sentence case for body copy and descriptions; Title Case for nav labels and buttons; ALL CAPS reserved for tiny tracked-out eyebrows/badges only ("Latin America · CNCF Community Group", "Sold Out").
**Two registers, split by channel.** The *website* product copy carries zero emoji — clean, uppercase-eyebrow, no-decoration. Social and event copy (Instagram/LinkedIn, community.cncf.io) is warmer and more playful: colloquial Dominican phrasing like *"Kubernetes pa' no morir en el intento"*, one or two emoji as punctuation (🚀 for momentum, 🎟️ for tickets, 💜 for the women-in-tech collabs) — never emoji-per-line decoration.

**Social caption anatomy** (observed across real posts — follow this shape):
1. **Hook, 1–2 short lines with a hard break.** Often a problem statement in stark parallel construction: *"La IA no solo genera código. / También genera nuevos vectores de ataque."* Or a celebratory opener: *"¡El ecosistema Cloud Native en Latinoamérica sigue imparable! 🚀"*
2. **The invitation, naming the community as the actor.** *"Por eso, Cloud Native Santo Domingo te invita a una charla que aborda este problema de frente: '…'"* — talk titles always in quotes, full title, no truncation.
3. **Speakers credited individually, name + company + what they cover.** *"Gerson Rosario, de America Movil, quien cubre gobernanza y cumplimiento automatizado."* One per line. Partners/co-hosts get the same treatment.
4. **Sponsor thanks on its own line.** *"Gracias a: Alterna Academy, ProDoctivity."*
5. **Date + scarcity, then the link.** *"29 de julio. Cupos limitados."* → *"Regístrate aquí: <link>"*. Dates are conversational ("29 de julio"), never ISO.
6. **Hashtags last, lowercase, 5–8 of them** — mixing topic and community tags: `#networking #women #it #tech #event #womenincloudnative #cncf`.

**Line breaks are the layout.** Captions are written as many short one-sentence paragraphs, not dense blocks — the whitespace does the pacing work.
**Spanish with English technical terms left intact** — "supply chain", "runtime", "cloud", "networking", "cupos" all coexist; never force-translate tech vocabulary.
**Community over product.** Posts foreground people and connection (*"Volver a conectar con la comunidad"*, *"crearás conexiones que pueden impulsar tu carrera"*) before technology.
**Numbers do the talking.** The hero leads with three animated stats (+members, +events hosted, location) rather than adjectives — credibility through count, not claims.
**CNCF trademark discipline (per the Foundation style guide):** always "Cloud Native Computing Foundation (CNCF)" on first mention, "CNCF" after; never imply this community group speaks for CNCF itself — it's an independently-run, CNCF-affiliated community group.

## Visual foundations

**Theming:** every semantic color token (`--bg-page`, `--text-primary`, `--accent`, `--border-*`, etc.) resolves differently under `[data-theme="light"]` — set `data-theme="light"` on `<html>` or any container to flip that subtree to a bright variant while keeping every component and template unchanged. Dark remains the default (the site's native theme); light is the opt-in. See the "Light / Dark Variants" card.

**Palette:** near-black navy base (`--navy-950 #090d16`) with a single sky-cyan accent (`--cyan-500`, ~`hsl(199 89% 48%)`) used for every interactive/brand touchpoint — links, glows, badges, gradient CTAs. Only one accent hue; warning (amber) and danger (red) are reserved strictly for event status (sold out / low spots). No secondary "brand color" beyond cyan.
**Dominican identity layer:** a small `--heritage-*` set (ultramarine blue, vermillion red, white) drawn from the flag's colors for sparing, optional use — a footer flourish, a "Made in RD" badge, a map pin — never the flag or shield graphic itself.
**Type:** Space Grotesk (heading, 700–900 weight, tight tracking, huge display sizes up to `7rem`) paired with Inter (body, 400–600). Headings are set in `font-black`/`font-bold` at aggressive negative letter-spacing; body copy is relaxed (`line-height:1.6`).
**Backgrounds:** solid near-black base + two soft radial cyan glows (top-left/top-right, ~8% opacity) fixed to the viewport — never a hard gradient banner. The hero additionally uses one full-bleed photographic background (blurred, darkened ~50%, scaled 110%) — abstract cloud/network imagery, not people or screenshots. No illustrations, no repeating patterns/textures.
**Animation:** everything eases on one curve, `cubic-bezier(.25,1,.5,1)` ("ease-out-quart"), 300ms default / 500ms for cards. Fade-up + 20px rise on scroll-in; a count-up on hero stats; a slow 6s float on decorative blobs. No bounce, no spring, no rotation flourishes except the 3°→0° organizer-photo tilt on hover. `prefers-reduced-motion` is fully respected (durations collapse to ~0).
**Hover states:** lift (`-translate-y` 2–4px) + brighten border to accent at 30–50% opacity + (on the primary CTA only) glow intensifies from `glow-md` to `glow-lg`. Text links: color shifts to accent + underline sweeps left-to-right.
**Press states:** scale down to `0.95` (buttons/social icons) or `0.90` (small tap targets like the mobile lang toggle) — no color change on press, just a spring-free scale.
**Borders:** hairline `1px solid rgba(255,255,255,.08–.12)` everywhere — never a heavier or colored border except the deliberate accent-tinted border on hover/focus.
**Shadows/glow:** two separate systems — plain drop shadows (`shadow-sm/md/lg/2xl`, pure black at low opacity, for depth) and colored **glow** shadows (`glow-sm/md/lg`, cyan at low opacity, for "this is interactive/important"). Cards get shadow only; the primary CTA and hero badges get glow.
**Corner radii:** big and soft — 12–40px (`--radius-sm` through `--radius-2xl`), fully round (`--radius-full`) for pills/badges/social buttons. Nothing sharp; nothing under 12px except the smallest badge padding.
**Cards:** glass surfaces, not solid fills — `background:rgba(255,255,255,.05–.08)`, `backdrop-filter:blur`, hairline border, big radius (20–40px), soft black shadow. No colored left-border accent anywhere in the source — avoid that pattern.
**Transparency/blur:** used constantly and deliberately — the navbar, cards, badges, and footer icons are all translucent-glass (`.glass`/`.glass-darker` utilities); it's the single most defining visual signature of this brand, not an occasional effect.
**Imagery color vibe:** cool, blue-toned, abstract/technical (network nodes, hexagons, glowing lines) — never warm, never literal photos of a data center, never grainy/film-like. Treat any photography (team photos, event photos) as its own separate warmer register, kept small (avatar-scale) and never full-bleed.

## Iconography

**System:** [Lucide](https://lucide.dev) (`lucide-react`), used at 16–20px, 2px stroke, `currentColor` — copied into `assets/icons/` as static SVGs (arrow-right, calendar, calendar-check, coffee, globe, mail, map-pin, menu, mic-vocal, monitor, presentation, sparkles, users, x). Icon choice is semantic: `Calendar`/`Coffee`/`Monitor` map to event type (in-person/meetup/virtual), never decorative.
**Social/brand icons:** Instagram, GitHub and YouTube from [Simple Icons](https://simpleicons.org); LinkedIn from [Font Awesome brands](https://fontawesome.com) (Simple Icons no longer ships a LinkedIn mark). All filled, monochrome, tinted with `--text-muted` and brightening to accent on hover.
**No icon font, no emoji-as-icon.** Every icon in the product is a real SVG, never a Unicode glyph or emoji standing in for one.

## Templates
- `templates/event-page/` — single-meetup landing page (hero, details, speakers, RSVP)
- `templates/conference-page/` — multi-track conference page (agenda, speakers, sponsors)
- `templates/slide-deck/` — 5-slide deck: title, agenda, big quote, comparison, thank-you
- `templates/social-post/` — 1080×1080 event announcement graphic + ready-to-paste caption following the anatomy above

## Index

- `styles.css`, `tokens/*.css` — global tokens (see Visual Foundations above)
- `components/core/{Button,Badge,Card}.jsx` — primitives
- `components/forms/{Input,Textarea,Label,Select,Switch}.jsx` — form controls
- `components/feedback/{Dialog,Toast,Tooltip}.jsx` — overlays and notifications
- `components/patterns/{EventCard,OrganizerCard,StatPill}.jsx` — composite patterns
- `components/navigation/{NavLink,SocialIconButton}.jsx` — nav/footer
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `ui_kits/website/{index.html,HomePage.jsx,Pages.jsx}` — interactive recreation: homepage, events (filter + modal), team, gallery (carousel), contact (form + toast)
- `assets/fonts/` — self-hosted Space Grotesk + Inter variable TTFs (OFL licensed)
- `assets/{hero-banner.jpg,og-image.jpg,favicon.svg,icons/*.svg}` — real brand + icon assets (no logo — pending new mark)
- `templates/event-page/`, `templates/conference-page/`, `templates/slide-deck/` — reusable content templates
- `SKILL.md` — Claude Code-compatible skill wrapper for this system
- `github.md` — source-repo sync record

## Using this design system

**In a plain HTML page** — link the one stylesheet, then load the compiled component bundle:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, EventCard } = window.CloudNativeSantoDomingoDesignSystem_e36e6c;
</script>
```

**Tokens only** (recommended for production apps) — `@import` the token layer and use the custom properties directly; no JS needed:

```css
@import url("tokens/colors.css");
@import url("tokens/typography.css");
.cta { background: var(--accent); border-radius: var(--radius-md); font-family: var(--font-heading); }
```

**Light mode** — set `data-theme="light"` on `<html>` or any container; every semantic token re-resolves. Dark is the default.

**In a React/Next app** — copy the `.jsx` files you need out of `components/` (they import React only) or lift the values from them; then link `styles.css` (or just `tokens/`) globally. Self-hosted fonts live in `assets/fonts/` — keep the `OFL-*.txt` files next to them.

**As a Claude / Claude Code skill** — `SKILL.md` at the repo root makes this whole folder loadable as an agent skill; point Claude Code at the repo and invoke `cloud-native-sdq-design`.

## Repository layout

```
styles.css              single entry point — @imports the token files
tokens/                 colors, typography, spacing, effects, fonts (@font-face)
components/<group>/     React primitives (.jsx + .d.ts + .prompt.md + card html)
templates/<slug>/       event page, conference page, slide deck, social post
ui_kits/website/        interactive recreation of cloudnativesdq.org
guidelines/*.card.html  foundation specimen cards
assets/                 fonts, icons, imagery
readme.md               this guide      SKILL.md        agent skill wrapper
CONTRIBUTING.md         how to extend   ATTRIBUTION.md  third-party licenses
github.md               upstream source record (cloudnativesdq/website)
_ds_bundle.js           generated — compiled component bundle (committed)
_ds_manifest.json       generated — index of components/tokens/cards (committed)
```

## License

MIT for everything authored here (`LICENSE`). Bundled fonts, icons and images are third-party — see `ATTRIBUTION.md` before redistributing. CNCF/Kubernetes marks belong to The Linux Foundation; Dominican national symbols are protected under Ley 210-19 and are **not** reproduced here (flag-derived colors only).

## Caveats — please help me iterate

1. **Logo** — still pending your new mark; the "Cloud Native SDQ" wordmark stands in everywhere a logo would go (thumbnail, brand card, navbar, social-post template). Drop the file in `assets/` (SVG + a monochrome variant ideally) and I'll wire it in.
2. **Dominican heritage accent** — now used as a thin ultramarine/vermillion end-cap on the social-post bottom rule, plus the color tokens. I deliberately stopped short of anything flag- or shield-shaped, since those are protected symbols with their own usage rules. Tell me how much further you want to go (textile/larimar-inspired pattern, map silhouette, taino-motif geometry) and I'll explore options rather than guess.
3. **Instagram/LinkedIn still not directly readable** — the captions you pasted were enough to build the caption anatomy above; more posts (especially your best-performing graphics) would let me tighten the social-post template's visual formula.
4. **No Figma / design file** — everything is reverse-engineered from the live codebase; a Figma link would let me verify exact spacing/type and catch anything code-only exploration missed.
5. **Event calendar view not rebuilt** — `EventCalendar.tsx` (month grid + per-day event modal) is the one substantial site surface still missing from the UI kit. Say the word and I'll add it.

Bold ask: **drop in the new logo when it's ready and tell me whether to build the calendar view next** — those are the two biggest remaining gaps.
