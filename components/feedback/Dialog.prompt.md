Modal — used for the event-detail popup on the calendar view. Mirrors `src/components/ui/dialog.tsx`: `max-w-lg`, `gap-4`, `p-6`, black/80 overlay, close × top-right.

```jsx
<Dialog title="Kubernetes 101" description="12 Sep · 6:00 PM" onClose={close}
  footer={<Button size="sm">Ver Evento</Button>} />
```

Positioned `absolute` inside its container (not `fixed`) so it can be previewed in a card; swap to `fixed` in production.
