Transient notification — the contact form's send confirmation/error. The source uses Sonner + shadcn Toaster (`src/components/ui/sonner.tsx`, `use-toast.ts`); this is the visual equivalent.

```jsx
<Toast tone="success" title="¡Mensaje enviado con éxito!" />
<Toast tone="error" title="Hubo un error al enviar el mensaje." description="Inténtalo de nuevo." />
```

Stack bottom-right in production. Tones: default / success (accent) / error (danger).
