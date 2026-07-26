Primary CTA button — gradient/glow "default" for the main call to action, glass "secondary" and bordered "outline" for supporting actions, "ghost"/"link" for low-emphasis and inline actions.

```jsx
<Button variant="default" size="lg">Únete a la Comunidad</Button>
<Button variant="secondary">Explorar Eventos</Button>
```

Variants: default (gradient + glow, uppercase), secondary (glass bg-white/5), outline (bordered), ghost, destructive, link (underline, no case transform). Sizes: sm/default/lg/icon. Matches `src/components/ui/button.tsx` cva variants 1:1; default variant additionally gets the site's signature hover-lift + glow-md→glow-lg treatment.
