Generic glass-surface card shell (`rounded-lg border bg-card shadow-sm` in the original shadcn primitive, restyled to the brand's glass/blur surface) with Header/Title/Description/Content/Footer slots.

```jsx
<Card>
  <CardHeader><CardTitle>Kubernetes 101</CardTitle><CardDescription>Meetup · Sep 12</CardDescription></CardHeader>
  <CardContent>...</CardContent>
</Card>
```

Use this generic shell for anything that isn't an event or organizer (those have dedicated patterns below).
