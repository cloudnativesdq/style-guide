Hero-section metric pill (member count, events hosted, location). Mirrors the stat blocks in `src/components/HeroSection.tsx`.

```jsx
<StatPill icon={<UsersIcon/>} value="+250" label="miembros" />
```

`icon` accepts any 16–20px icon element (Lucide recommended, see Iconography in the README). Row of these sits centered under the hero subtitle, `flex-wrap` on mobile.
