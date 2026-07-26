/* @ds-bundle: {"format":4,"namespace":"CloudNativeSantoDomingoDesignSystem_e36e6c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"SocialIconButton","sourcePath":"components/navigation/SocialIconButton.jsx"},{"name":"EventCard","sourcePath":"components/patterns/EventCard.jsx"},{"name":"OrganizerCard","sourcePath":"components/patterns/OrganizerCard.jsx"},{"name":"StatPill","sourcePath":"components/patterns/StatPill.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7f6d68c84237","components/core/Button.jsx":"7fe666ee638c","components/core/Card.jsx":"d7730d7c4394","components/feedback/Dialog.jsx":"dd3f64621cf2","components/feedback/Toast.jsx":"5a3e6bb96b5e","components/feedback/Tooltip.jsx":"42de259ad449","components/forms/Input.jsx":"22f18018ddc1","components/forms/Label.jsx":"23e7e4aa05a0","components/forms/Select.jsx":"89600eb5afa0","components/forms/Switch.jsx":"cdec3ec53bef","components/forms/Textarea.jsx":"c2d32c27fe11","components/navigation/NavLink.jsx":"9e31a6daa779","components/navigation/SocialIconButton.jsx":"8d2b5a60f57f","components/patterns/EventCard.jsx":"228f62a06a50","components/patterns/OrganizerCard.jsx":"3af0c246cfbd","components/patterns/StatPill.jsx":"ad3dd3cd3255","ui_kits/website/HomePage.jsx":"4f446d96dc00","ui_kits/website/Pages.jsx":"ada524a80136"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CloudNativeSantoDomingoDesignSystem_e36e6c = window.CloudNativeSantoDomingoDesignSystem_e36e6c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const VARIANTS = {
  default: {
    background: "var(--accent)",
    color: "#04202b",
    border: "1px solid transparent"
  },
  secondary: {
    background: "var(--bg-glass)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)"
  },
  destructive: {
    background: "rgba(239,74,74,.15)",
    color: "var(--status-danger)",
    border: "1px solid rgba(239,74,74,.3)"
  },
  warning: {
    background: "rgba(242,169,60,.15)",
    color: "var(--status-warning)",
    border: "1px solid rgba(242,169,60,.3)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)"
  },
  accentSoft: {
    background: "var(--accent-soft)",
    color: "var(--accent)",
    border: "1px solid var(--border-accent)"
  }
};
function Badge({
  variant = "default",
  children,
  style,
  ...props
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  return React.createElement("span", {
    ...props,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--radius-full)",
      padding: "4px 12px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      fontFamily: "var(--font-heading)",
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  default: {
    background: "var(--accent)",
    color: "#04202b"
  },
  secondary: {
    background: "var(--bg-glass)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)"
  },
  destructive: {
    background: "var(--status-danger)",
    color: "#fff"
  },
  link: {
    background: "transparent",
    color: "var(--accent)",
    textDecoration: "underline",
    textUnderlineOffset: "4px"
  }
};
const SIZES = {
  sm: {
    height: 36,
    padding: "0 14px",
    fontSize: 13
  },
  default: {
    height: 40,
    padding: "0 20px",
    fontSize: 14
  },
  lg: {
    height: 48,
    padding: "0 32px",
    fontSize: 15
  },
  icon: {
    height: 40,
    width: 40,
    padding: 0
  }
};
function Button({
  variant = "default",
  size = "default",
  children,
  style,
  ...props
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  const s = SIZES[size] || SIZES.default;
  const [hover, setHover] = React.useState(false);
  const glow = variant === "default" ? hover ? "var(--glow-lg)" : "var(--glow-md)" : "none";
  return React.createElement("button", {
    ...props,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      letterSpacing: "0.02em",
      textTransform: variant === "link" ? "none" : "uppercase",
      cursor: "pointer",
      transition: "all var(--duration-slow) var(--ease-out-quart)",
      transform: hover && variant === "default" ? "translateY(-2px)" : "none",
      boxShadow: glow,
      ...v,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  style,
  children,
  ...props
}) {
  return React.createElement("div", {
    ...props,
    style: {
      borderRadius: "var(--radius-lg)",
      background: "var(--bg-glass)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-2xl)",
      ...style
    }
  }, children);
}
function CardHeader({
  style,
  children,
  ...props
}) {
  return React.createElement("div", {
    ...props,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: 24,
      ...style
    }
  }, children);
}
function CardTitle({
  style,
  children,
  ...props
}) {
  return React.createElement("h3", {
    ...props,
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--text-primary)",
      lineHeight: 1.1,
      margin: 0,
      ...style
    }
  }, children);
}
function CardDescription({
  style,
  children,
  ...props
}) {
  return React.createElement("p", {
    ...props,
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      margin: 0,
      ...style
    }
  }, children);
}
function CardContent({
  style,
  children,
  ...props
}) {
  return React.createElement("div", {
    ...props,
    style: {
      padding: "0 24px 24px",
      ...style
    }
  }, children);
}
function CardFooter({
  style,
  children,
  ...props
}) {
  return React.createElement("div", {
    ...props,
    style: {
      display: "flex",
      alignItems: "center",
      padding: "0 24px 24px",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,.8)"
    }
  }, React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 512,
      display: "grid",
      gap: 16,
      padding: 24,
      borderRadius: "var(--radius-lg)",
      background: "var(--bg-card)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-2xl)",
      fontFamily: "var(--font-body)"
    }
  }, React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      right: 16,
      top: 16,
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      fontSize: 18,
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\u00d7"), title && React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)"
    }
  }, title), description && React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, description), children, footer && React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  default: {
    border: "var(--border-default)",
    accent: "var(--accent)"
  },
  success: {
    border: "var(--border-accent)",
    accent: "var(--accent)"
  },
  error: {
    border: "rgba(239,74,74,.35)",
    accent: "var(--status-danger)"
  }
};
function Toast({
  title,
  description,
  tone = "default",
  onClose
}) {
  const t = TONES[tone] || TONES.default;
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      width: "100%",
      maxWidth: 380,
      padding: 16,
      borderRadius: "var(--radius-md)",
      background: "var(--bg-surface)",
      border: `1px solid ${t.border}`,
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)"
    }
  }, React.createElement("div", {
    style: {
      width: 3,
      alignSelf: "stretch",
      borderRadius: 2,
      background: t.accent,
      flexShrink: 0
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, title), description && React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, description)), React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\u00d7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  side = "top"
}) {
  const [show, setShow] = React.useState(false);
  const pos = side === "bottom" ? {
    top: "calc(100% + 6px)"
  } : {
    bottom: "calc(100% + 6px)"
  };
  return React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, show && React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      ...pos,
      zIndex: 50,
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-default)",
      background: "var(--bg-surface)",
      color: "var(--text-primary)",
      padding: "6px 12px",
      fontSize: 13,
      fontFamily: "var(--font-body)",
      boxShadow: "var(--shadow-md)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  style,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement("input", {
    ...props,
    onFocus: e => {
      setFocus(true);
      props.onFocus && props.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur && props.onBlur(e);
    },
    style: {
      display: "flex",
      height: 40,
      width: "100%",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${focus ? "var(--accent)" : "var(--border-default)"}`,
      background: "var(--bg-glass)",
      padding: "8px 12px",
      fontSize: 14,
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      outline: "none",
      boxShadow: focus ? "var(--glow-sm)" : "none",
      transition: "all var(--duration-base) var(--ease-out-quart)",
      boxSizing: "border-box",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function Label({
  children,
  style,
  ...props
}) {
  return React.createElement("label", {
    ...props,
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      display: "block",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  value,
  onChange,
  style,
  ...props
}) {
  return React.createElement("select", {
    ...props,
    value,
    onChange,
    style: {
      display: "flex",
      height: 40,
      width: "100%",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-default)",
      background: "var(--bg-glass)",
      padding: "8px 12px",
      fontSize: 14,
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      outline: "none",
      appearance: "none",
      cursor: "pointer",
      boxSizing: "border-box",
      ...style
    }
  }, options.map((o, i) => React.createElement("option", {
    key: i,
    value: typeof o === "string" ? o : o.value,
    style: {
      background: "var(--bg-card)"
    }
  }, typeof o === "string" ? o : o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label
}) {
  const [on, setOn] = React.useState(checked);
  const toggle = () => {
    const v = !on;
    setOn(v);
    onChange && onChange(v);
  };
  const el = React.createElement("button", {
    onClick: toggle,
    role: "switch",
    "aria-checked": on,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      height: 24,
      width: 44,
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      border: "2px solid transparent",
      background: on ? "var(--accent)" : "var(--border-default)",
      cursor: "pointer",
      padding: 0,
      transition: "background var(--duration-base) var(--ease-out-quart)"
    }
  }, React.createElement("span", {
    style: {
      display: "block",
      height: 20,
      width: 20,
      borderRadius: "var(--radius-full)",
      background: "var(--bg-page)",
      boxShadow: "var(--shadow-md)",
      transform: on ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-out-quart)"
    }
  }));
  if (!label) return el;
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 14,
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      cursor: "pointer"
    }
  }, el, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  style,
  rows = 4,
  ...props
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement("textarea", {
    ...props,
    rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "block",
      width: "100%",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${focus ? "var(--accent)" : "var(--border-default)"}`,
      background: "var(--bg-glass)",
      padding: "10px 12px",
      fontSize: 14,
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      outline: "none",
      resize: "vertical",
      boxShadow: focus ? "var(--glow-sm)" : "none",
      transition: "all var(--duration-base) var(--ease-out-quart)",
      boxSizing: "border-box",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function NavLink({
  href = "#",
  children,
  active = false,
  ...props
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement("a", {
    href,
    ...props,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      fontSize: 14,
      fontWeight: 700,
      color: hover || active ? "var(--accent)" : "var(--text-muted)",
      textDecoration: "none",
      fontFamily: "var(--font-body)",
      paddingBottom: 4,
      transition: "color var(--duration-base) var(--ease-out-quart)"
    }
  }, children, React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 2,
      width: hover || active ? "100%" : 0,
      background: "var(--accent)",
      transition: "width var(--duration-base) var(--ease-out-quart)"
    }
  }));
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SocialIconButton.jsx
try { (() => {
function SocialIconButton({
  icon,
  href = "#",
  label
}) {
  return React.createElement("a", {
    href,
    "aria-label": label,
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-lg)",
      background: "var(--bg-glass-dark)",
      border: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)",
      transition: "all var(--duration-slow) var(--ease-out-quart)"
    }
  }, icon);
}
Object.assign(__ds_scope, { SocialIconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SocialIconButton.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EventCard.jsx
try { (() => {
function EventCard({
  title,
  type,
  date,
  location,
  image,
  soldOut,
  spotsRemaining,
  compact = false,
  href = "#"
}) {
  const showSpots = !soldOut && spotsRemaining !== undefined && spotsRemaining < 10;
  return React.createElement("a", {
    href,
    style: {
      display: "flex",
      flexDirection: compact ? "row" : "column",
      gap: 16,
      padding: 4,
      borderRadius: "var(--radius-xl)",
      background: "var(--bg-glass)",
      border: "1px solid var(--border-subtle)",
      textDecoration: "none",
      boxShadow: "var(--shadow-2xl)",
      overflow: "hidden",
      transition: "all var(--duration-slow) var(--ease-out-quart)"
    }
  }, React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--bg-card)",
      width: compact ? 112 : "100%",
      height: compact ? 112 : 180,
      backgroundImage: image ? `url(${image})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: compact ? "8px 8px 8px 0" : "0 12px 12px",
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("span", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      gap: 6,
      padding: "2px 10px",
      borderRadius: "var(--radius-full)",
      background: "var(--accent-soft)",
      color: "var(--accent)",
      fontFamily: "var(--font-heading)",
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      border: "1px solid var(--border-accent)"
    }
  }, type), React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      color: "var(--text-primary)",
      fontSize: compact ? 16 : 20,
      lineHeight: 1.2
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, date), !compact && location && React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, location), (soldOut || showSpots) && React.createElement("span", {
    style: {
      alignSelf: "flex-start",
      padding: "2px 10px",
      borderRadius: "var(--radius-full)",
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      fontFamily: "var(--font-heading)",
      background: soldOut ? "rgba(239,74,74,.15)" : "rgba(242,169,60,.15)",
      color: soldOut ? "var(--status-danger)" : "var(--status-warning)"
    }
  }, soldOut ? "Sold Out" : `${spotsRemaining} lugares`)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/OrganizerCard.jsx
try { (() => {
function OrganizerCard({
  name,
  role,
  company,
  image
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: 24,
      borderRadius: "var(--radius-xl)",
      background: "var(--bg-glass)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-lg)",
      width: 180
    }
  }, React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "2px solid var(--border-default)",
      marginBottom: 20,
      transform: "rotate(3deg)",
      backgroundImage: image ? `url(${image})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "var(--bg-card)"
    }
  }), React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, name), React.createElement("div", {
    style: {
      width: 32,
      height: 1,
      background: "var(--border-accent)",
      margin: "8px 0"
    }
  }), React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--accent)"
    }
  }, role), React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--text-muted)"
    }
  }, company));
}
Object.assign(__ds_scope, { OrganizerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/OrganizerCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StatPill.jsx
try { (() => {
function StatPill({
  icon,
  value,
  label
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      padding: "16px 32px",
      borderRadius: "var(--radius-xl)",
      background: "var(--bg-glass)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-lg)",
      minWidth: 130
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, icon, React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 26,
      color: "var(--text-primary)"
    }
  }, value)), React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-heading)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StatPill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  NavLink,
  SocialIconButton,
  EventCard,
  OrganizerCard,
  StatPill
} = window.CloudNativeSantoDomingoDesignSystem_e36e6c;
const ICON = n => `../../assets/icons/${n}.svg`;
const T = {
  es: {
    home: "Inicio",
    events: "Eventos",
    team: "Equipo",
    gallery: "Galería",
    contact: "Contacto",
    badge: "Latin America · CNCF Community Group",
    h1a: "Cloud Native",
    h1b: "Santo Domingo",
    sub: "Formando a la próxima generación de ingenieros en República Dominicana con tecnologías open source y principios Cloud Native.",
    join: "Únete a la Comunidad",
    explore: "Explorar Eventos",
    members: "miembros",
    eventsLabel: "eventos realizados",
    upcoming: "Próximos Eventos",
    upcomingSub: "Los próximos encuentros de la comunidad.",
    seeAll: "Ver todos los eventos",
    team_t: "Nuestro Equipo",
    team_sub: "El equipo que impulsa el ecosistema Cloud Native en Santo Domingo.",
    presentations: "Presentaciones",
    cfp: "Postular Charla",
    loc: "República Dominicana"
  },
  en: {
    home: "Home",
    events: "Events",
    team: "Team",
    gallery: "Gallery",
    contact: "Contact",
    badge: "Latin America · CNCF Community Group",
    h1a: "Cloud Native",
    h1b: "Santo Domingo",
    sub: "Training the next generation of engineers in the Dominican Republic through open source technologies and Cloud Native principles.",
    join: "Join the Community",
    explore: "Explore Events",
    members: "members",
    eventsLabel: "events hosted",
    upcoming: "Upcoming Events",
    upcomingSub: "The community's next meetups.",
    seeAll: "See all events",
    team_t: "Our Team",
    team_sub: "The team driving the Cloud Native ecosystem in Santo Domingo.",
    presentations: "Slide Decks",
    cfp: "Call for Speakers",
    loc: "Dominican Republic"
  }
};
const EVENTS = [{
  title: "Kubernetes 101: Primeros Pasos",
  type: "Meetup",
  date: "12 de septiembre, 2026 · 6:00 PM",
  location: "Santo Domingo, RD",
  spotsRemaining: 6
}, {
  title: "Cloud Native Day RD 2026",
  type: "Conference",
  date: "20 de noviembre, 2026",
  location: "Santo Domingo, RD",
  soldOut: true
}, {
  title: "Observabilidad con OpenTelemetry",
  type: "Online",
  date: "3 de octubre, 2026 · 7:00 PM",
  location: "Virtual"
}];
const ORGANIZERS = [{
  name: "Ana Ramírez",
  role: "Organizer",
  company: "Acme Cloud"
}, {
  name: "Luis Peña",
  role: "Co-organizer",
  company: "Globant"
}, {
  name: "Carla Núñez",
  role: "Organizer",
  company: "Claro RD"
}, {
  name: "Miguel Ozuna",
  role: "Speaker Lead",
  company: "Freelance"
}, {
  name: "Diana Feliz",
  role: "Community Manager",
  company: "Banreservas"
}];
function Icon({
  name,
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: ICON(name),
    width: size,
    height: size,
    style: {
      filter: "invert(1)",
      opacity: .9,
      ...style
    },
    alt: ""
  });
}
function Navbar({
  lang,
  setLang,
  page,
  setPage
}) {
  const [open, setOpen] = React.useState(false);
  const t = T[lang];
  const links = [["home", t.home], ["events", t.events], ["team", t.team], ["gallery", t.gallery], ["contact", t.contact]];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(9,13,22,.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border-subtle)",
      padding: "14px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--text-primary)",
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Cloud Native"), /*#__PURE__*/React.createElement("span", null, "SDQ")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, links.map(([k, label]) => /*#__PURE__*/React.createElement(NavLink, {
    key: k,
    href: "#",
    active: page === k,
    onClick: e => {
      e.preventDefault();
      setPage(k);
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(lang === "es" ? "en" : "es"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 14px",
      borderRadius: "var(--radius-lg)",
      background: "var(--bg-glass)",
      border: "1px solid var(--border-default)",
      color: "var(--text-primary)",
      fontSize: 10,
      fontWeight: 900,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 14
  }), lang === "es" ? "EN" : "ES"))));
}
function Hero({
  lang
}) {
  const t = T[lang];
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let f;
    const start = performance.now();
    const dur = 1200;
    const step = now => {
      const p = Math.min((now - start) / dur, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * 248));
      if (p < 1) f = requestAnimationFrame(step);
    };
    f = requestAnimationFrame(step);
    return () => cancelAnimationFrame(f);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 620,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderBottom: "1px solid var(--border-subtle)",
      backgroundImage: "linear-gradient(180deg, rgba(9,13,22,.2), rgba(9,13,22,.9)), url(../../assets/hero-banner.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 900,
      margin: "0 auto",
      padding: "80px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      borderRadius: "var(--radius-full)",
      background: "rgba(0,0,0,.4)",
      border: "1px solid var(--border-accent)",
      fontFamily: "var(--font-heading)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 12,
    style: {
      filter: "none"
    }
  }), t.badge), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: "clamp(2.5rem,6vw,5.5rem)",
      lineHeight: 0.95,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)",
      margin: "0 0 24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .9,
      display: "block"
    }
  }, t.h1a), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      display: "block"
    }
  }, t.h1b)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--text-muted)",
      maxWidth: 600,
      margin: "0 auto 40px",
      lineHeight: 1.6,
      fontWeight: 500
    }
  }, t.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 20,
      marginBottom: 44,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    }),
    value: `+${count}`,
    label: t.members
  }), /*#__PURE__*/React.createElement(StatPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-check",
      size: 16
    }),
    value: "+18",
    label: t.eventsLabel
  }), /*#__PURE__*/React.createElement(StatPill, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }),
    value: "Santo Domingo",
    label: t.loc
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, t.join, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      filter: "none"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, t.explore))));
}
function EventsPreview({
  lang
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: "clamp(1.75rem,3vw,2.75rem)",
      color: "var(--accent)",
      margin: "0 0 12px"
    }
  }, t.upcoming), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 17
    }
  }, t.upcomingSub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 24,
      marginBottom: 40
    }
  }, EVENTS.map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: i
  }, e, {
    href: "#"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, t.seeAll, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))));
}
function Team({
  lang
}) {
  const t = T[lang];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "88px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: "clamp(1.75rem,3vw,2.75rem)",
      color: "var(--accent)",
      margin: "0 0 12px"
    }
  }, t.team_t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 17
    }
  }, t.team_sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 20
    }
  }, ORGANIZERS.map((o, i) => /*#__PURE__*/React.createElement(OrganizerCard, _extends({
    key: i
  }, o))))));
}
function Footer({
  lang
}) {
  const t = T[lang];
  const socials = [["instagram", "Instagram"], ["linkedin", "LinkedIn"], ["github", "GitHub"], ["youtube", "YouTube"], ["mail", "Email"]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "80px 24px",
      borderTop: "1px solid var(--border-subtle)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      marginBottom: 40,
      flexWrap: "wrap"
    }
  }, socials.map(([icon, label]) => /*#__PURE__*/React.createElement(SocialIconButton, {
    key: icon,
    label: label,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 24,
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "presentation",
    size: 14
  }), t.presentations), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mic-vocal",
    size: 14
  }), t.cfp)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      opacity: .5,
      fontWeight: 700
    }
  }, "\xA9 2026 Cloud Native SDQ \xB7 Santo Domingo, ", t.loc));
}
function HomePage() {
  const [lang, setLang] = React.useState("es");
  const [page, setPage] = React.useState("home");
  const Page = {
    events: window.EventsPage,
    team: window.TeamPage,
    gallery: window.GalleryPage,
    contact: window.ContactPage
  }[page];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      background: "var(--bg-page)",
      backgroundImage: "radial-gradient(at 0% 0%, hsla(199,89%,48%,.08) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(199,89%,48%,.08) 0, transparent 50%)"
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    lang: lang,
    setLang: setLang,
    page: page,
    setPage: setPage
  }), Page ? /*#__PURE__*/React.createElement(Page, {
    lang: lang
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(EventsPreview, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Team, {
    lang: lang
  })), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  EventCard,
  OrganizerCard,
  Input,
  Label,
  Textarea,
  Select,
  Toast,
  Dialog,
  SocialIconButton
} = window.CloudNativeSantoDomingoDesignSystem_e36e6c;
const PICON = n => `../../assets/icons/${n}.svg`;
function PIcon({
  name,
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: PICON(name),
    width: size,
    height: size,
    style: {
      filter: "invert(1)",
      opacity: .9,
      ...style
    },
    alt: ""
  });
}
function PageHeader({
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "72px 24px 40px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      fontSize: "clamp(2rem,4vw,3.25rem)",
      letterSpacing: "-0.02em",
      color: "var(--accent)",
      margin: "0 0 14px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 17,
      maxWidth: 560,
      margin: "0 auto",
      lineHeight: 1.6
    }
  }, subtitle));
}
const ALL_EVENTS = [{
  title: "Seguridad en la Era de la IA: Blindando la Infraestructura Cloud",
  type: "Meetup",
  date: "29 de julio, 2026 · 6:30 PM",
  location: "Alterna Academy, Santo Domingo",
  spotsRemaining: 8
}, {
  title: "Connections Lab: Networking del Ecosistema Tech",
  type: "Meetup",
  date: "27 de julio, 2026 · 6:00 PM",
  location: "Santo Domingo, RD",
  soldOut: true
}, {
  title: "Observabilidad con OpenTelemetry",
  type: "Online",
  date: "3 de octubre, 2026 · 7:00 PM",
  location: "Virtual"
}, {
  title: "Junte Cloud Native: Edición Fin de Año",
  type: "Meetup",
  date: "18 de diciembre, 2025 · 6:00 PM",
  location: "Santo Domingo, RD",
  isPast: true
}, {
  title: "Kubernetes pa' no morir en el intento: Guía práctica",
  type: "Meetup",
  date: "19 de noviembre, 2025 · 6:00 PM",
  location: "INTEC, Santo Domingo",
  isPast: true
}, {
  title: "Introducción a Red Hat OpenShift",
  type: "Online",
  date: "21 de octubre, 2025 · 7:00 PM",
  location: "Virtual",
  isPast: true
}];
function EventsPage({
  lang
}) {
  const [filter, setFilter] = React.useState("Todos");
  const [tab, setTab] = React.useState("upcoming");
  const [modal, setModal] = React.useState(null);
  const list = ALL_EVENTS.filter(e => (tab === "upcoming" ? !e.isPast : e.isPast) && (filter === "Todos" || e.type === filter));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 24px 96px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: lang === "es" ? "Eventos" : "Events",
    subtitle: lang === "es" ? "Revive nuestros encuentros y no te pierdas los próximos." : "Relive our meetups and don't miss the next ones."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      marginBottom: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, [["upcoming", lang === "es" ? "Próximos" : "Upcoming"], ["past", lang === "es" ? "Pasados" : "Past"]].map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      padding: "8px 18px",
      borderRadius: "var(--radius-full)",
      cursor: "pointer",
      fontFamily: "var(--font-heading)",
      fontSize: 12,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      background: tab === k ? "var(--accent-soft)" : "transparent",
      color: tab === k ? "var(--accent)" : "var(--text-muted)",
      border: `1px solid ${tab === k ? "var(--border-accent)" : "var(--border-subtle)"}`
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Todos", "Meetup", "Online", "Conference"],
    value: filter,
    onChange: e => setFilter(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
      gap: 20
    }
  }, list.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: ev => {
      ev.preventDefault();
      setModal(e);
    }
  }, /*#__PURE__*/React.createElement(EventCard, _extends({}, e, {
    href: "#"
  }))))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--text-muted)",
      padding: "48px 0"
    }
  }, lang === "es" ? "No hay eventos que coincidan." : "No matching events."), /*#__PURE__*/React.createElement(Dialog, {
    open: !!modal,
    onClose: () => setModal(null),
    title: modal && modal.title,
    description: modal && `${modal.date} · ${modal.location || ""}`,
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, lang === "es" ? "Ver Evento" : "View Event")
  }));
}
const TEAM = [{
  name: "Ana Ramírez",
  role: "Organizer",
  company: "Acme Cloud"
}, {
  name: "Luis Peña",
  role: "Co-organizer",
  company: "Globant"
}, {
  name: "Carla Núñez",
  role: "Organizer",
  company: "Claro RD"
}, {
  name: "Miguel Ozuna",
  role: "Speaker Lead",
  company: "Freelance"
}, {
  name: "Diana Feliz",
  role: "Community Manager",
  company: "Banreservas"
}, {
  name: "Gerson Rosario",
  role: "Speaker",
  company: "América Móvil"
}, {
  name: "Molly Devers Mateo",
  role: "Partner",
  company: "TechTalkCafé"
}, {
  name: "Stacy Balbi",
  role: "Partner",
  company: "Hard Devs"
}];
function TeamPage({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 24px 96px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: lang === "es" ? "Nuestro Equipo" : "Our Team",
    subtitle: lang === "es" ? "El equipo que impulsa el ecosistema Cloud Native en Santo Domingo." : "The team driving the Cloud Native ecosystem in Santo Domingo."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 20
    }
  }, TEAM.map((o, i) => /*#__PURE__*/React.createElement(OrganizerCard, _extends({
    key: i
  }, o)))));
}
function GalleryPage({
  lang
}) {
  const [active, setActive] = React.useState(0);
  const shots = [0, 1, 2, 3, 4, 5, 6, 7];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 24px 96px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: lang === "es" ? "Galería" : "Gallery",
    subtitle: lang === "es" ? "Fotos de nuestros encuentros y cómo ha crecido la comunidad." : "Photos from our meetups and how the community has grown."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-2xl)",
      aspectRatio: "16/7",
      backgroundImage: "url(../../assets/hero-banner.jpg)",
      backgroundSize: "cover",
      backgroundPosition: `${active * 12}% center`,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(9,13,22,.75), transparent 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accentSoft"
  }, lang === "es" ? `Foto ${active + 1} de ${shots.length}` : `Photo ${active + 1} of ${shots.length}`)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive((active - 1 + shots.length) % shots.length),
    "aria-label": "Anterior",
    style: {
      position: "absolute",
      left: 16,
      top: "50%",
      transform: "translateY(-50%)",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-full)",
      background: "var(--bg-glass-dark)",
      border: "1px solid var(--border-subtle)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "arrow-right",
    size: 18,
    style: {
      transform: "rotate(180deg)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive((active + 1) % shots.length),
    "aria-label": "Siguiente",
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-full)",
      background: "var(--bg-glass-dark)",
      border: "1px solid var(--border-subtle)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "arrow-right",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(8,1fr)",
      gap: 10
    }
  }, shots.map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    "aria-label": `Foto ${i + 1}`,
    style: {
      aspectRatio: "1",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      padding: 0,
      overflow: "hidden",
      border: `1px solid ${active === i ? "var(--accent)" : "var(--border-subtle)"}`,
      backgroundImage: "url(../../assets/hero-banner.jpg)",
      backgroundSize: "cover",
      backgroundPosition: `${i * 12}% center`,
      opacity: active === i ? 1 : .55
    }
  }))));
}
function ContactPage({
  lang
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "0 24px 96px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: lang === "es" ? "Contáctanos" : "Contact Us",
    subtitle: lang === "es" ? "¿Tienes alguna duda o quieres colaborar con nosotros? ¡Escríbenos!" : "Do you have any questions or want to collaborate with us? Write to us!"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      borderRadius: "var(--radius-xl)",
      background: "var(--bg-glass)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-2xl)",
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "cn"
  }, lang === "es" ? "Nombre" : "Name"), /*#__PURE__*/React.createElement(Input, {
    id: "cn",
    placeholder: lang === "es" ? "Tu nombre" : "Your name"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "ce"
  }, lang === "es" ? "Correo Electrónico" : "Email"), /*#__PURE__*/React.createElement(Input, {
    id: "ce",
    type: "email",
    placeholder: "tu@correo.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "cm"
  }, lang === "es" ? "Mensaje" : "Message"), /*#__PURE__*/React.createElement(Textarea, {
    id: "cm",
    rows: 5,
    placeholder: lang === "es" ? "Cuéntanos en qué podemos colaborar" : "Tell us how we can collaborate"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SocialIconButton, {
    label: "Instagram",
    icon: /*#__PURE__*/React.createElement(PIcon, {
      name: "instagram",
      size: 20
    })
  }), /*#__PURE__*/React.createElement(SocialIconButton, {
    label: "LinkedIn",
    icon: /*#__PURE__*/React.createElement(PIcon, {
      name: "linkedin",
      size: 20
    })
  }), /*#__PURE__*/React.createElement(SocialIconButton, {
    label: "Email",
    icon: /*#__PURE__*/React.createElement(PIcon, {
      name: "mail",
      size: 20
    })
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, lang === "es" ? "Enviar Mensaje" : "Send Message"))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: lang === "es" ? "¡Mensaje enviado con éxito!" : "Message sent successfully!",
    onClose: () => setSent(false)
  })));
}
Object.assign(window, {
  EventsPage,
  TeamPage,
  GalleryPage,
  ContactPage,
  PageHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.SocialIconButton = __ds_scope.SocialIconButton;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.OrganizerCard = __ds_scope.OrganizerCard;

__ds_ns.StatPill = __ds_scope.StatPill;

})();
