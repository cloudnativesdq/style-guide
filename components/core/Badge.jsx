import React from "react";
const VARIANTS={default:{background:"var(--accent)",color:"#04202b",border:"1px solid transparent"},secondary:{background:"var(--bg-glass)",color:"var(--text-primary)",border:"1px solid var(--border-default)"},destructive:{background:"rgba(239,74,74,.15)",color:"var(--status-danger)",border:"1px solid rgba(239,74,74,.3)"},warning:{background:"rgba(242,169,60,.15)",color:"var(--status-warning)",border:"1px solid rgba(242,169,60,.3)"},outline:{background:"transparent",color:"var(--text-primary)",border:"1px solid var(--border-default)"},accentSoft:{background:"var(--accent-soft)",color:"var(--accent)",border:"1px solid var(--border-accent)"}};
export function Badge({variant="default",children,style,...props}){
const v=VARIANTS[variant]||VARIANTS.default;
return React.createElement("span",{...props,style:{display:"inline-flex",alignItems:"center",gap:6,borderRadius:"var(--radius-full)",padding:"4px 12px",fontSize:10,fontWeight:700,letterSpacing:"var(--tracking-wide)",textTransform:"uppercase",fontFamily:"var(--font-heading)",...v,...style}},children);
}
