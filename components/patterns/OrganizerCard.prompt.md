Team/organizer profile card for the "Nuestro Equipo" section. Mirrors `src/components/OrganizersSection.tsx`'s `OrganizerCard`.

```jsx
<OrganizerCard name="María Pérez" role="Organizer" company="Acme Corp" image="/team/maria.jpg" />
```

Photo sits at a 3° tilt and straightens on hover (hover state not modeled here — add `:hover{transform:rotate(0)}` in production). Cards are meant to sit in a `flex-wrap` row, 5-up on desktop.
