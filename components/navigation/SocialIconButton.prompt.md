Footer social/contact icon button (Instagram, LinkedIn, YouTube, GitHub, Email). Mirrors the social row in `src/components/HomeView.tsx`'s footer.

```jsx
<SocialIconButton icon={<InstagramIcon/>} href="https://instagram.com/cncf_sd" label="Instagram" />
```

Pass any 20px Lucide icon as `icon`. Hover state (not modeled inline): text turns accent, background lightens to `--accent-soft`.
