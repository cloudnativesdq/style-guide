Community event listing card, used on the homepage preview grid (`compact`) and the full events page (stacked). Mirrors `src/components/EventCard.tsx`.

```jsx
<EventCard title="Kubernetes 101" type="Meetup" date="12 Sep 2026" location="Santo Domingo" spotsRemaining={4} />
```

`compact` switches to a small square thumbnail + tight row layout for the homepage's 3-up preview grid. Sold-out state overrides the spots-remaining badge.
