repo: cloudnativesdq/website
branch: main
## Last sync
date: 2026-07-26T14:12:23Z
### Updated in this project
- Imported tokens (colors, type, spacing, effects) from `globals.css` + `tailwind.config.ts`
- Built Button/Badge/Card/EventCard/OrganizerCard/StatPill/NavLink/SocialIconButton from `src/components/ui/*` and `src/components/*`
- Copied hero image, OG image, favicon from `public/` and `src/assets/` (logo since removed — new mark pending)
- Built interactive homepage UI kit (`ui_kits/website/`) with ES/EN toggle, matching `HomeView.tsx`/`HeroSection.tsx`/`Navbar.tsx`
- Added event-page, conference-page, and slide-deck templates

## Screen map
| Project screen | Repo files |
|---|---|
| `ui_kits/website/index.html` (Homepage) | `src/components/HomeView.tsx`, `HeroSection.tsx`, `Navbar.tsx`, `UpcomingEventsPreview.tsx`, `EventCard.tsx`, `OrganizersSection.tsx` |
| `components/core/Button.jsx` | `src/components/ui/button.tsx` |
| `components/core/Badge.jsx` | `src/components/ui/badge.tsx` |
| `components/core/Card.jsx` | `src/components/ui/card.tsx` |
| `components/patterns/EventCard.jsx` | `src/components/EventCard.tsx` |
| `components/patterns/OrganizerCard.jsx` | `src/components/OrganizersSection.tsx` |
| `tokens/colors.css`, `tokens/typography.css` | `src/app/globals.css`, `tailwind.config.ts` |
